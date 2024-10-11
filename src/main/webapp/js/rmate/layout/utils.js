function colorFunction(code, label, data) {
    // 코드가 유효하지 않거나 데이터가 없으면 기본 색상 반환
    if (!code || typeof code !== 'string' && typeof code !== 'number' || !data || typeof data.tot_tot !== 'number') {
        return "#ffffff";
    }

    // 코드가 숫자일 경우 문자열로 변환
    if (typeof code === 'number') {
        code = code.toString();
    }

    // 코드의 길이가 7인 경우에만 색상 결정
    if (code.length === 7) {
        // tot_tot 값에 따라 색상 반환
        if (data.tot_tot >= 40000) return "#c4281c";
        if (data.tot_tot >= 35000) return "#f53224";
        if (data.tot_tot >= 30000) return "#f64639";
        if (data.tot_tot >= 25000) return "#f75a4f";
        if (data.tot_tot >= 20000) return "#f86f65";
        if (data.tot_tot >= 15000) return "#f9847b";
        if (data.tot_tot >= 10000) return "#fa9891";
        if (data.tot_tot >= 5000)  return "#fbada7";
        return "#fcc1bd"; // 기본 색상 (tot_tot >= 0)
    }

    return "#ffffff"; // 기본 색상 (code 길이가 7이 아닌 경우)
}


let intervalId = []; //interval ID
let isMapCreated = false; //추가 지도 생성 추적 여부

function areaClickFunction(code, label, data) {
	if (intervalId) {
		console.log("함수 실행");
		intervalId.forEach(e => clearInterval(e));
		intervalId.length = 0;
    }
	if(code > 3000) {
		var area = document.getElementById("select_area");
		area.innerHTML = label+"이 선택되었습니다."; 
		area.style.color = '#049300';
		area.style.fontSize ='15px';
		intervalId.push(setInterval(moveAllRouteImages, 1000, code));
		layout2.mapChart.seriesList[0].setLabelJsFunction("labelFunction").setAreaCodeField("code").setAreaDataCode("destination_code");
		var sort = DASHIN.filter(element => element.code === code)[0].data.sort((a, b) => a.sales - b.sales);
		console.log("sort : %o", sort);
		sort.forEach((e, index) => e['grade'] = index);
		console.log("sort : %o", sort);
		document.getElementById("map2").setData(sort);
	} else {
		layout2.mapChart.setOpenCode(code);
		// 처음 호출될 때만 createNewMap() 실행
        if (!isMapCreated) {
        	console.log("새 지도 생성")
            createNewMap();
            isMapCreated = true;  // 플래그 업데이트
        }
	}
	document.getElementById("map2").setLayout(layout2.createXML());
}

function moveAllRouteImages(code) {
	
	DASHIN
		.filter(element => element.code === code)[0].data
		.forEach(e => {
			document.getElementById("map2").getRoot().getObjectById("route1").moveRouteImage(e.id);
		});
	document.getElementById("map2").setSelectedCode(code);
}


function createNewMap() {	

	//초기 지도 렌더링 후 콜백 함수 지정
	var mapVars2 = "rMateOnLoadCallFunction=mapReadyHandler2";
	//지도 삽입
	rMateMapChartH5.create("map2", "mapHolder2", mapVars2, "100%", "100%");
}

//지도 렌더링 완료 함수
function mapReadyHandler2(id) {
	document.getElementById(id).setLayout(layout2.createXML());
	document.getElementById(id).setData(DASHIN);
	document.getElementById(id).setMapDataBaseURLEx(mapDataBaseURL);
	document.getElementById(id).setSourceURLEx(sourceURL);
}


//유동인구에 따른 지역 라벨 정의 함수
function labelFunction(seriesId, code, label, data) {
	if(data === undefined) return "";
    if (data.grade == 0) {
        return {"text":"1위 "+label, "color":"#101010", "fontSize":"20", "fontWeight":"bold", "lineHeight":5}}
    else if (data.grade == 1) {
        return {"text":"2위 "+label, "color":"#101010", "fontSize":"13", "fontWeight":"bold", "lineHeight":5}}
    else if (data.grade == 2) {
        return {"text":"3위 "+label, "color":"#101010", "fontSize":"13", "fontWeight":"bold", "lineHeight":5}}
    else if (data.grade == 3) {
        return {"text":"4위 "+label , "color":"#101010", "fontSize":"11", "fontWeight":"bold", "lineHeight":5}}
    return "";
}