/**
 * js 파일을 동적으로 로드하는 함수
 * 
 * @param {string}url - 로드할 js파일 경로
 * @returns {Promise<string>} - 주어진 URL의 스크립트가 성공적으로 로드되면 URL을 반환하고, 실패하면 오류를 반환하는 Promise 
 */
function loadScript(url) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		
		script.onload = () => resolve(url);
		script.onerror = () => reject(new Error('Faild to load script ${url}'));
		
		document.head.appendChild(script);
	});
}

/**
 * 로드할 js파일 리스트 
 */
const script = [
	'js/ol/ol.js', // OpenLayer
	'js/map/utils/checkBox_mockData.js', //checkBox mock data
	'js/map/utils/vector_style.js', //vector-style 정보
	'js/map/request.js', //Geoserver 요청
	'js/map/utils/map_setting.js', //지도 설정 관련
	'js/map/utils/data_modal.js', // 모달 table 출력
	'js/map/load_map.js', //map 렌더링 파일
	'js/rmate/layout/utils.js',
	'js/rmate/layout/series.js', //main2 - rmateMapChart 파일
	'js/rmate/layout/mapChart.js',
	'js/rmate/layout/layout.js',
	'js/rmate/layout/mapData.js',
	'js/rmate/layout/init_render.js',
	'js/rmate/statistic_modal.js',
	'js/rmate/layout/functions.js',
	'js/rmate/chart/chart.js',
	'js/rmate/chart/chart2.js',
	//'js/rmate/rmap.js', //main- rmateMapChart 파일
];

const script2 = [
	'js/ol/ol.js', // OpenLayer
	'js/map/utils/checkBox_mockData.js', //checkBox mock data
	'js/map/utils/vector_style.js', //vector-style 정보
	'js/map/request.js', //Geoserver 요청
	'js/map/utils/map_setting.js', //지도 설정 관련
	'js/map/utils/data_modal.js', // 모달 table 출력
	'js/map/load_map.js', //map 렌더링 파일
	'js/rmate/layout/series.js', //main2 - rmateMapChart 파일
	'js/rmate/layout/mapChart.js',
	'js/rmate/layout/layout.js',
	'js/rmate/layout/mapData.js',
	'js/rmate/layout/init_render2.js',
];

const links = [
	'css/spa/cube.css',
	'css/spa/spa.css',
]

/**
 * Promise를 사용해 비동기 작업 관리 -> 병렬로 처리에 에러 발생
 */
//Promise.all(script.map(loadScript))
//		   .then(() => {
//			   console.log('All scripts loaded');
//		   })
//		   .catch(error => {
//			   console.log('Error loading scripts : ', error);
//		   });

/**
 * 스크립트 로드 함수
 */
function loadScript(src) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve(src);
		script.onerror = () => reject(new Error(`Script load error for ${src}`));
		document.head.appendChild(script);
	})
}

function loadLink(src) {
	return new Promise((resolve, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = src;
		document.head.appendChild(link);
	});
}

/**
 * 순차적으로 스크립트 로드하는 함수
 */
async function loadScripts() {
	for(const src of script2) {
		try {
			await loadScript(src);
			console.log(`${src} loaded`);
		} catch (error) {
			console.log('Error loading script: ', error);
			break;
		}
	}
	console.log('All scripts loaded in sequence');
}

async function loadLinks() {
	for(const link of links) {
		try {
			await loadLink(link);
			console.log(`${link} loaded`);
		} catch (error) {
			console.log('Error loading link : ', error);
			break;
		}
	}
}

loadScripts();
loadLinks();

//document의 readyState를 검사해서 콜백을 실행해주는 식의 처리를 외부 모듈 자바스크립트에서 적용
var DOMReady = function(callback) { 
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};