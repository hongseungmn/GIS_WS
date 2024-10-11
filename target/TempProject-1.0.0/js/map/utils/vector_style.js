/**
 * 기본 텍스트 스타일 속성을 저장한 객체
 * 
 * @points - 포인트에 대한 기본 스타일 속성 저장 
 */
var defaultTextStyle = {
	points : {
		text: "normal",
		align: "left",
		baseline: "top",
		rotation: "0",
		font: "Arial",
		weight: "normal",
		size: "12px",
		offsetX: "0",
		offsetY: "0",
		color: "#aa3300",
		outline: "#ffffff",
		outlineWidth: "3",
		maxreso: "100",
	}
}

//polygon 스타일 정의
var polygonStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 0, 0.6)' // 노란색, 60% 불투명도
    }),
    stroke: new ol.style.Stroke({
        color: '#FFFF00', // 노란색 경계선
        width: 5 // 경계선 두께
    })
});

/**
 * feature에서 텍스트 추출하는 함수
 * 
 * @param feature - 변환할 텍스트가 들어있는 객체
 * @param resolution - style
 * @param defaultTextStyle - 기본 스타일 속성 객체 
 * @returns 추출한 text 리턴
 */
function getText(feature, resolution, defaultTextStyle) {
	var type = defaultTextStyle.text.value;
	var maxResolution = defaultTextStyle.maxreso.value;
	var text = feature.get('address');
	return text;
}

/**
 * 텍스트에 스타일 입혀 반환하는 함수
 * 
 * @param feature - 변환할 텍스트가 들어있는 객체
 * @param resolution - style
 * @param defaultTextStyle - 기본 스타일 속성 객체 
 * @returns 스타일 적용한 텍스트 리턴
 */
function createTextStyle(feature, resolution, defaultTextStyle) {
	var align = defaultTextStyle.align; //텍스트 위치
	var baseline = defaultTextStyle.baseline; // 텍스트 베이스라인
	var size = defaultTextStyle.size; //텍스트 크기
	var offsetX = parseInt(defaultTextStyle.offsetX, 10); //X 방향 떨어짐 정도
	var offsetY = parseInt(defaultTextStyle.offsetY, 10); //Y 방향 떨어짐 정도
	var weight = defaultTextStyle.weight; //두께
	var rotation = parseFloat(defaultTextStyle.rotation);//회전
	var font = weight + ' ' + size + ' ' + defaultTextStyle.font;
	var fillcolor = defaultTextStyle.color;//텍스트 색상
	var outlineColor = defaultTextStyle.outline; //테투리 색상
	var outlineWidth = parseInt(defaultTextStyle.outlineWidth, 10); //테두리 굴기
	
	return new ol.style.Text({
      textAlign: align,
      textBaseline: baseline,
      font: font,
      text: getText(feature, resolution, defaultTextStyle),
      fill: new ol.style.Fill({color: fillcolor}),
      stroke: new ol.style.Stroke({color: outlineColor, width: outlineWidth}),
      offsetX: offsetX,
      offsetY: offsetY,
      rotation: rotation
    });
}

/**
 * point 스타일 적용하는 함수로 포인트 스타일, 텍스트 스타일 지정
 * 
 * @param feature - 포인트 객체
 * @param resolution - 지도 해상도
 * @returns 생성한 포인트객체
 */
function pointStyleFunction(feature, resolution) {
	return new ol.style.Style({
		image: new ol.style.Circle({
			radius: 100,
			fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 0.1)'}),
			stroke: new ol.style.Stroke({color: 'red', width: 1})
		}),
		text: createTextStyle(feature, resolution, defaultTextStyle.points)
	});
}

/**
 * 체크박스에 의해 만들어지는 polygon 스타일 생성 함수
 * 
 * @param fillColor
 * @param strokeColor
 * @returns
 */
function checkBoxPolygonStyle(fillColor, strokeColor) {
	return new ol.style.Style({
	    fill: new ol.style.Fill({
	        color: fillColor
	    }),
	    stroke: new ol.style.Stroke({
	        color: strokeColor,
	        width: 1 // 경계선 두께
	    })
	});
}