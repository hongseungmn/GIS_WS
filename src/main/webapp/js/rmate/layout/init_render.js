/**
 * 초기 설정 파일
*/


/*
	- 레이아웃은 크게 맵차트 UI 요소와 맵차트, Style 세 부분으로 구분된다
	- 맵 차트는 외형을 담당한다. 배경, 사이즈 등등이 포함된다. 가장 중요한 역할로 시리즈를 포함하게 되며 사용자 액션에 반응하게 된다(MapChart)
	- 시리즈는 실질적인 데이터를 표현한다. 맵 차트는 반드시 1개의 MapSeries를 가지고 있어야 하며, 그 외에 필요에 따라 다른 시리즈를 추가할 수 있다.(MapSeries, MapBubbleSeries, MapImageSeries, MapPanelSeries, MapPlotSeries)
*/

/* 레이아웃 초기 선언 */
const layout = new Layout()
.setMapChart(mapChart => {
	mapChart
	.setId("mainMap")
	.setShowDataTips(true)
	.setOpenCode(223)
	.setMapChangeJsFunction("areaClickFunction")
	.addSeries(series => {
		series
		.setInteractive(true)
		.setSelectionMarking("line")
		.setSelectionMarkLineGap(3)
		.setLocalFill({color:'#ffffff'})
		.setShowDataEffect()
		.setLocalFillJsFunction("colorFunction")
    },"MapSeries", "mapSeries") //기본 MapSeries 1개는 반드시 필요
    .addSeries(
		series => {
			series
			.setType("column")
			.setDataField("[tot_tot]")
			.setLabelPosition("inside")
			.setSparkWidth("40")
			.setStartAngle(-90)
			.setSparkHeight("40")
			.setShowDataTips(true)
	}, "MapSparkSeries", "spark1")
}).build();

const layout2 = new Layout()
.setMapChart(mapChart => {
	mapChart
	.setId("mainMap2")
	.setShowDataTips(true)
	.addSeries(series => {
		series
		.setInteractive(false)
		.setSelectionMarking("color")
		.setSelectionMarkLineColor("#758d99")
		.setLocalFillAttributes("#ebf0f4")
		.setRollOverFilter(true)
		.setFilter({kind : "DropShadowFilter", distance:"5", angle:"90", color:"#888888", blur:"0"})
		.setShowDataEffect({kind : "SeriesInterpolate", duration:"1000"})
		.setSelectionFill({ kind : "SolidColor", color : "#f6b149"})
		.setRollOverFill({ kind : "SolidColor", color : "#f6b149"})
		.setRollOverStroke({ kind : "Stroke", color : "#f6b149", weight : "0.25", alpha : "0.25"})
		.setStroke({ kind : "Stroke", color : "#CAD7E0", weight : "0.8", alpha : "1" })
		.setLabelPosition("inside")
		.setStroke({weight:1})
		.setShowDataEffect()
    },"MapSeries", "mapSeries") //기본 MapSeries 1개는 반드시 필요
    .addSeries(series => {
    	series
    	.setFromCodeField("destination_code")
    	.setToCodeField("start_code")
    	.setWeight(1)
    	.setDashed(true)
    	.setShowLabel(false)
    	.setCurveField("curve")
    	.setImgMovingSpeed(5)
    	.setLineColor("#e15749")
    	.setImageUrlField("imgUrl")
    	.setMarker("end")
    	.setLabelField("label")
    	.setRewindRouteImg(false)
    }, "MapRouteSeries", "route1")
}).build();
		
		
//초기 지도 렌더링 후 콜백 함수 지정
var mapVars = "rMateOnLoadCallFunction=mapReadyHandler";

//지도 렌더링 완료 함수
function mapReadyHandler(id) {
	document.getElementById(id).setLayout(layout.createXML());
	document.getElementById(id).setData(MAPDATA.mapData);
	document.getElementById(id).setMapDataBaseURLEx(mapDataBaseURL);
	document.getElementById(id).setSourceURLEx(sourceURL);
}

//지도 삽입
rMateMapChartH5.create("map1", "mapHolder", mapVars, "100%", "100%");


