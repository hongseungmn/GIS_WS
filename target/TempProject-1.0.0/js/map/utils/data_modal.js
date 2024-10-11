window.app = {};
var app = window.app;

/**
 * 사용자 커스텀 컨트롤 버튼을 추가
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object=} opt_options Control options.
 */
app.RotateNorthControl = function(opt_options) {

  var options = opt_options || {};

  var button = document.querySelector('#modal-button');
  var button2 = document.querySelector('#modal-button2');
  var spliter = document.querySelector('#spliter');
//  button.innerHTML = 'Table';

  var this_ = this;
  var handleRotateNorth = function() {
    this_.getMap().getView().setRotation(0);
  };

  button.addEventListener('click',function() {
	 $('#ModalSlide').modal('show'); 
  });
  
  button2.addEventListener('click', function() {
	  document.getElementsByClassName("backdrop")[0].style.top = '0px';
	  //MAPDATA.setData();
  })
  
  var element = document.querySelector('.buttonNav-groups');
  element.appendChild(button);
  element.appendChild(spliter);
  element.appendChild(button2);

  ol.control.Control.call(this, {
    element: element,
    target: options.target
  });

};
ol.inherits(app.RotateNorthControl, ol.control.Control);

/**
 * DataTable 영역 div 요소
 */
$('#dataTable').DataTable(
	{
	    columns: [
	        { data: '연번' },
	        { data: '용도지역' },
	        { data: '주소' },
	    ],
	    rowCallback: function(row, data) {
	    	$(row).on('click', function(event) {
	    		showOverlayRowData(data);
	    	});
	    }
});


/**
 * showOverlayRowData 에서 사용할 선택된 데이터를 담고 있는 레이어 객체
 */
let selectVectorLayer = new ol.layer.Vector({
    style: polygonStyle,
});

/**
 * 테이블에서 특정 데이터 선택시 오버레이 생성
 * 
 * @param data
 * @returns
 */
function showOverlayRowData(data) {
	
	map.removeLayer(selectVectorLayer);
	
    let lon = parseFloat(data['경도']);
    let lat = parseFloat(data['위도']);
    let address = data['주소'];
    let num = data['연번'];
    let area = data['용도지역'];
    let jimoc = data['지목'];
    let tot_area = data['건폐율'];
    let dong = data['행정동명'];
    let coordinate = ol.proj.fromLonLat([lon, lat]);
    console.log('data: %o', data);
    
    if (overLay) {
        overLay.setPosition(coordinate);
    } else {
        console.error('overLay is not defined');
    }
    
    var content = document.getElementById('popup-content');
    content.innerHTML = `
    	<div class='overlay-title'>${address}</div>
    	<div class='overlay-content'>
    		<div class='overlay-address'>
    			<div class='overlay-content-title'><div>주소 : </div><input class='overlay-input' type='text' value='${address}' focus></div>
    		</div>
    		<div class='overlay-area'>
    			<div class='overlay-content-title'><div>용도지역 : </div><input  class='overlay-input' type='text' value='${area}'></div>
    		</div>
    	</div>
    	<div class='overlay-details-button'>
	    	<details>
		    	<summary style='text-decoration-line: underline;'>상세보기</summary>
		    	<div class='overlay-details'>
		    		<div class='row d-flex'>
		    			<div class='col-6'>
		    				<div class='overlay-content-title'>위도 : <input class='overlay-input' type='text' value='${lat}'></div>
		    				<div class='overlay-content-title'>용도지역 : <input class='overlay-input' type='text' value='${area}'></div>
		    				<div class='overlay-content-title'>지목 : <input class='overlay-input' type='text' value='${jimoc}'></div>
		    				<div class='overlay-content-title'>주소 : <input class='overlay-input' type='text' value='${address}'></div>
		    			</div>
			    		<div class='col-6'>
				    		<div class='overlay-content-title'>경도 : <input class='overlay-input' type='text' value='${lon}'></div>
				    		<div class='overlay-content-title'>건폐율 : <input class='overlay-input' type='text' value='${tot_area}'></div>
				    		<div class='overlay-content-title'>행정동명 : <input class='overlay-input' type='text' value='${dong}'></div>
				    		<div class='overlay-content-title'>연번 : <input class='overlay-input' type='text' value='${num}' readonly></div>
			    		</div>
		    		</div>
		    		<div class='d-flex'>
			    		<button class='btn-danger m-1' style="flex: 1;">삭제</button>
			    		<button class='btn-info m-1' style="flex: 1;">수정</button>
		    		</div>
		    	</div>
			</details>
		</div>
    `;
    
    document.querySelectorAll('.overlay-input').forEach(element => {
    	element.addEventListener('click', function(event) {
    		console.log('input 요소 클릭됨');
    		console.log('event: %o', event);
    		$('#ModalSlide').modal('hide');
    		element.focus();
    	});
    });
    
    var close = document.getElementById('popup-close');
    close.addEventListener('click', function() {
    	overLay.setPosition(undefined);
    	close.blur();
    	map.removeLayer(selectVectorLayer);
    	return false;
    });
    // 동적으로 CQL_FILTER 설정
    var filter = `INTERSECTS(geom, POINT(${lon} ${lat}))`;
    var vectorSource = new ol.source.Vector({
    	url : requestGeo.buildURL(requestGeo.vectorURL,
    			requestGeo.vectorParam('1.0.0', 'GetFeature', 'TestWorkspace:polygon', 'application/json', 'EPSG:4326', filter)),
		format: new ol.format.GeoJSON()
    });
    console.log(vectorSource);
    
    // 벡터 레이어를 지도에 추가
    selectVectorLayer.setSource(vectorSource);
    
    
    changeMapCenter(lon+0.002, lat);
    changeMapZoom(18);
    
    map.addLayer(selectVectorLayer);
}

/**
 * features를 통해 테이블에 데이터를 그려주는 함수
 * 
 * @param features - 데이터
 */
function drawPointTable(features) {
    var list = features.map(item => ({
        '연번': item.get('연번'),
        '용도지역': item.get('용도지역'),
        '주소': item.get('address'),
        '경도': item.get('x'),
        '위도': item.get('y'),
        '지목': item.get('jimoc'),
        '건폐율': item.get('건폐율(%)'),
        '행정동명': item.get('dong'),
    }));
    
    var tableInstance = $(`#dataTable`).DataTable();
    
    tableInstance.clear();
    tableInstance.rows.add(list).draw();
}


createCheckBox();
/**
 * 26개 - 현재 mockData를 ckeckBox로 만드는 함수
 */
function createCheckBox() {
  const container = document.querySelector('.setting-area');
  let html = '<div class="list-group d-flex">';
  let count = 0;

  for (const [key, value] of Object.entries(checkBox)) {
    if (count % 9 === 0) {
      if (count > 0) html += '</div>';
      html += '<div class="col-4">';
    }
    html += `
      <label class="list-group-item">
        <input class="form-check-input jimok-checkBox" type="checkbox" value="${key}">
        ${value}
      </label>
    `;
    count++;
  }
  html += '</div></div>'; // close the last row
  container.innerHTML = html;
  checkBoxAddEvent();
}

let checkedVectorLayers = [];
/**
 * 체크박스에 이벤트를 등록하는 함수
 */
function checkBoxAddEvent() {
	const checkBoxes = document.querySelectorAll('.jimok-checkBox');
	let checkedSet = new Set();
	checkBoxes.forEach(checkBox => {
		checkBox.addEventListener('change', (event) => {
			let isChecked = event.target.checked;
			let value = event.target.value;
			
			isChecked ? checkedSet.add(value) : checkedSet.delete(value);
			
			removeAllCheckedVectorLayers();
			checkedSet.forEach((index,value) => {
				console.log(value);
				// 동적으로 CQL_FILTER 설정
				var filter = `jimoc='${value}'`;
			    var vectorSource = new ol.source.Vector({
			    	url : requestGeo.buildURL(requestGeo.vectorURL,
			    			requestGeo.vectorParam('1.1.1', 'GetFeature', 'TestWorkspace:polygon', 'application/json', 'EPSG:4326', filter)),
					format: new ol.format.GeoJSON()
			    });
			    console.log(vectorSource);
			    
			    var vectorLayer = new ol.layer.Vector({
			    	source: vectorSource,
			        style: checkBoxPolygonStyle('rgba(255, 0, 0, 0.1)', 'rgba(255, 0, 0, 0.9)'),
			    });
			    
			    map.addLayer(vectorLayer);
			    checkedVectorLayers.push(vectorLayer);
			});
		});
	});
}

function removeAllCheckedVectorLayers() {
	checkedVectorLayers.forEach(layer => {
		map.removeLayer(layer)
	});
}