rMateChartH5.create("chart1", "chartHolder", "", "100%", "100%"); 

// 스트링 형식으로 레이아웃 정의.
var layoutStr = 
	'<rMateChart>'
		+'<Options>'
			+'<Caption text="전국산업분류" paddingBottom="5"/>'
		+'</Options>'
		/*
			TreeMapChart를 설정하기 위하여 TreeMapChart 노드를 설정하도록 합니다.
			buttonMode - 각 차트 아이템에 마우스 오버시 손가락 표시를 나타내도록 설정합니다.
		*/
		+'<TreeMapChart showDataTips="true" buttonMode="true">'
			+'<series>'
				/*
					TreeMapChart의 series속성으로 TreeMapSeries를 설정하도록 합니다.
					weightField - 트리 맵으로 출력하려는 데이터 값 필드 명을 설정합니다.
					nameField - 트리 맵 안에 출력할 문자열의 필드 명을 설정합니다.
					groupField - 차트 데이터가 계층형 데이터일 해당 데이터들 중 그룹으로 가져올 데이터 필드 명을 설정합니다.
					labelPosition - weightField, nameField 값이 표현하는 문자열을 트리 맵에 출력할지 설정합니다.
					showGroupHeader - 차트 데이터가 계층형 데이터일 경우 각 계층에 해당하는 대표 문자열을 출력할지 설정합니다.
					groupNameField - showGroupHeader가 true일 경우 groupHeader에 출력할 문자열의 데이터 필드 명을 설정합니다.
				*/
				+'<TreeMapSeries weightField="total" groupHeaderFontFamily="맑은 고딕" groupHeaderFontWeight="bold" showGroupHeader="true" groupField="items" displayName="Industry" groupNameField="name" color="#ffffff" nameField="industry" labelPosition="inside" groupHeaderHeight="23" groupLabelYOffset="-2">'
					+'<fills>'
						+'<SolidColor color="#e1394a"/>'
						//+'<SolidColor color="#f14048"/>'
						//+'<SolidColor color="#f05559"/>'
						//+'<SolidColor color="#ee6464"/>'
						+'<SolidColor color="#ef726c"/>'
						//+'<SolidColor color="#f58672"/>'
						//+'<SolidColor color="#f99978"/>'
						//+'<SolidColor color="#faa677"/>'
						+'<SolidColor color="#fdb278"/>'
						//+'<SolidColor color="#ffcb7f"/>'
						//+'<SolidColor color="#f7d78e"/>'
						//+'<SolidColor color="#efe19a"/>'
						+'<SolidColor color="#efeca9"/>'
						//+'<SolidColor color="#e1e599"/>'
						//+'<SolidColor color="#c3e7a1"/>'
						//+'<SolidColor color="#a5dca3"/>'
						+'<SolidColor color="#9ad9a9"/>'
						//+'<SolidColor color="#7ad3a5"/>'
						//+'<SolidColor color="#6acdb8"/>'
						//+'<SolidColor color="#5ebcc6"/>'
						+'<SolidColor color="#52abd5"/>'
						//+'<SolidColor color="#599cd3"/>'
						//+'<SolidColor color="#599cd3"/>'
						//+'<SolidColor color="#6288d3"/>'
						+'<SolidColor color="#545da8"/>'
					+'</fills>'
					+'<groupHeaderColor>'
						+'<SolidColor color="#f6f6f6"/>'
					+'</groupHeaderColor>'
					+'<showDataEffect>'
						+'<SeriesZoom relativeTo="series" horizontalFocus="center" verticalFocus="middle" duration="1000" elementOffset="2"/>'
					+'</showDataEffect>'
				+'</TreeMapSeries>'
			+'</series>'
		+'</TreeMapChart>'
	+'</rMateChart>';

// 차트 데이터
var chartData = [{
		"name":"용인시 처인구",
		"items": [{
			"name":"모현읍",
			"items" : [
				{"industry":"가용지","total":18},
				{"industry":"주유소용지","total":22},
				{"industry":"수도용지","total":58551},
				{"industry":"답","total":122},
				{"industry":"도로","total":448},
				{"industry":"과수원","total":21027},
				{"industry":"철도용지","total":0},
				{"industry":"유원지","total":93368},
				{"industry":"주차장","total":123634},
				{"industry":"하천","total":19240},

			]
		},{
			"name":"포곡읍",
			"items" : [
				{"industry":"농업 임업 및 어업","total":88},
				{"industry":"광업","total":11},
				{"industry":"제조업","total":27751},
				{"industry":"전기 가스 증기 및 수도사업","total":60},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":390},

			]
		},{
			"name":"유림동",
			"items" : [
				{"industry":"농업 임업 및 어업","total":17},
				{"industry":"광업","total":9},
				{"industry":"제조업","total":25426},
				{"industry":"전기 가스 증기 및 수도사업","total":53},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":279},
				{"industry":"건설업","total":5708},
				{"industry":"도매 및 소매업","total":52854},
				{"industry":"운수업","total":19938},
				{"industry":"숙박 및 음식점업","total":32453},

			]
		},{
			"name":"양지면",
			"items" : [
				{"industry":"농업 임업 및 어업","total":22},
				{"industry":"광업","total":28},
				{"industry":"제조업","total":22175},
				{"industry":"전기 가스 증기 및 수도사업","total":69},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":379},
				{"industry":"건설업","total":4850},

			]
		},{
			"name":"중앙동",
			"items" : [
				{"industry":"농업 임업 및 어업","total":17},
				{"industry":"광업","total":13},
				{"industry":"제조업","total":7816},
				{"industry":"전기 가스 증기 및 수도사업","total":45},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":147},
				{"industry":"건설업","total":4112},
				{"industry":"도매 및 소매업","total":29827},
				{"industry":"운수업","total":10128},
				{"industry":"숙박 및 음식점업","total":18048},
				{"industry":"출판 영상 방송통신 및 정보서비스업","total":818},
				{"industry":"금융 및 보험업","total":1454},

			]
		},{
			"name":"동부동",
			"items" : [
				{"industry":"농업 임업 및 어업","total":7},
				{"industry":"광업","total":5},
				{"industry":"제조업","total":7085},
				{"industry":"전기 가스 증기 및 수도사업","total":27},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":123},
				{"industry":"건설업","total":3452},
				{"industry":"도매 및 소매업","total":28732},

			]
		},{
			"name":"이동읍",
			"items" : [
				{"industry":"농업 임업 및 어업","total":21},
				{"industry":"광업","total":14},
				{"industry":"제조업","total":6096},
				{"industry":"전기 가스 증기 및 수도사업","total":28},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":179},
				{"industry":"건설업","total":2813},
				{"industry":"도매 및 소매업","total":19089},
				{"industry":"운수업","total":6850},

			]
		},{
			"name":"남사읍",
			"items" : [
				{"industry":"농업 임업 및 어업","total":120000},
				{"industry":"광업","total":7},
				{"industry":"제조업","total":761},
				{"industry":"전기 가스 증기 및 수도사업","total":7},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":26},
				{"industry":"건설업","total":375},
				{"industry":"도매 및 소매업","total":1613},
				{"industry":"운수업","total":564},
				{"industry":"숙박 및 음식점업","total":1664},

			]
		},{
			"name":"원삼면",
			"items" : [
				{"industry":"농업 임업 및 어업","total":237},
				{"industry":"광업","total":90},
				{"industry":"제조업","total":106817},
				{"industry":"전기 가스 증기 및 수도사업","total":215},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":1683},
				{"industry":"건설업","total":23442},
				{"industry":"도매 및 소매업","total":181230},

			]
		},{
			"name":"백암면",
			"items" : [
				{"industry":"농업 임업 및 어업","total":212},
				{"industry":"광업","total":140},
				{"industry":"제조업","total":6804},
				{"industry":"전기 가스 증기 및 수도사업","total":136},
				{"industry":"하수 · 폐기물 처리 원료재생 및 환경복원업","total":352},
				{"industry":"건설업","total":5444},
				{"industry":"도매 및 소매업","total":31607},
				{"industry":"운수업","total":10176},
				{"industry":"숙박 및 음식점업","total":35714},
				{"industry":"출판 영상 방송통신 및 정보서비스업","total":667},

			]
		}]
	}
];

// rMateChartH5.calls 함수를 이용하여 차트의 준비가 끝나면 실행할 함수를 등록합니다.
//
// argument 1 - rMateChartH5.create시 설정한 차트 객체 아이디 값
// argument 2 - 차트준비가 완료되면 실행할 함수 명(key)과 설정될 전달인자 값(value)
// 
// 아래 내용은 
// 1. 차트 준비가 완료되면 첫 전달인자 값을 가진 차트 객체에 접근하여
// 2. 두 번째 전달인자 값의 key 명으로 정의된 함수에 value값을 전달인자로 설정하여 실행합니다.
rMateChartH5.calls("chart1", {
	"setLayout" : layoutStr,
	"setData" : chartData
});

/**
 * rMateChartH5 3.0이후 버전에서 제공하고 있는 테마기능을 사용하시려면 아래 내용을 설정하여 주십시오.
 * 테마 기능을 사용하지 않으시려면 아래 내용은 삭제 혹은 주석처리 하셔도 됩니다.
 *
 * -- _rMateChartH5Theme에 등록되어있는 테마 목록 --
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * -------------------------------------------------
 *
 * _rMateChartH5Theme 변수는 theme.js에서 정의하고 있습니다.
 */
rMateChartH5.registerTheme(rMateChartH5.themes);

/**
 * 샘플 내의 테마 버튼 클릭 시 호출되는 함수입니다.
 * 접근하는 차트 객체의 테마를 변경합니다.
 * 파라메터로 넘어오는 값
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * - default
 *
 * default : 테마를 적용하기 전 기본 형태를 출력합니다.
 */
function rMateChartH5ChangeTheme(theme){
	document.getElementById("chart1").setTheme(theme);
}