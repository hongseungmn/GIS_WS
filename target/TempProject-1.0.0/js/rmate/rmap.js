var layoutStr = '\
<?xml version="1.0" encoding="utf-8"?>\
<rMateMapChart>\
    <MapChart id="mainMap" drillDownEnabled="true" showDataTips="true" showDataTipTargets="true" mapChangeJsFunction="clickFunction"  backToMapJsFunction="backFunction" itemClickJsFunction="itemClickFunction">\>\
        <series>\
            <MapSeries id="mapseries" selectionMarking="line" labelPosition="inside" displayName="지방" localFillJsFunction="colorFunction">\
				<showDataEffect>\
				    <SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
				<rollOverFill>\
				    <SolidColor color="#2e7dca"/>\
				</rollOverFill>\
				<localFill>\
				    <SolidColor color="#62bfea"/>\
				</localFill>\
				<stroke>\
				    <Stroke color="#CAD7E0" weight="0.8" alpha="1"/>\
				</stroke>\
            </MapSeries>\
        </series>\
    </MapChart>\
	<Box horizontalAlign="center" paddingTop="30" horizontalScrollPolicy="off" verticalScrollPolicy="off">\
	    <SubLegend useVisibleCheck="true" direction="horizontal" height="30" borderStyle="solid" defaultMouseOverAction="true" paddingTop="8" backgroundColor="#fefefe">\
		    <LegendItem label="90000이상">\
			    <fill>\
			        <SolidColor color="#c4281c"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="90000이하">\
			    <fill>\
			        <SolidColor color="#f53224"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="80000이하">\
			    <fill>\
			        <SolidColor color="#f64639"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="70000이하">\
			    <fill>\
			        <SolidColor color="#f75a4f"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="60000이하">\
			    <fill>\
			        <SolidColor color="#f86f65"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="50000이하">\
			    <fill>\
			        <SolidColor color="#f9847b"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="40000이하">\
			    <fill>\
			        <SolidColor color="#fa9891"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="30000이하">\
			    <fill>\
			        <SolidColor color="#fbada7"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="20000이하">\
			    <fill>\
			        <SolidColor color="#fcc1bd"/>\
			    </fill>\
			</LegendItem>\
	    </SubLegend>\
	</Box>\
</rMateMapChart>\
';

var layoutStr2 = '\
<?xml version="1.0" encoding="utf-8"?>\
<rMateMapChart>\
    <MapChart id="mainMap" drillDownEnabled="true" showDataTips="true" showDataTipTargets="true" mapChangeJsFunction="clickFunction" backToMapJsFunction="backFunction" itemClickJsFunction="itemClickFunction">\>\
        <series>\
            <MapSeries id="mapseries" selectionMarking="line" labelPosition="inside" displayName="지방" localFillJsFunction="colorFunction">\
				<showDataEffect>\
				    <SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
				<rollOverFill>\
				    <SolidColor color="#2e7dca"/>\
				</rollOverFill>\
				<localFill>\
				    <SolidColor color="#62bfea"/>\
				</localFill>\
				<stroke>\
				    <Stroke color="#CAD7E0" weight="0.8" alpha="1"/>\
				</stroke>\
            </MapSeries>\
        </series>\
    </MapChart>\
	<Box horizontalAlign="center" paddingTop="30" horizontalScrollPolicy="off" verticalScrollPolicy="off">\
	    <SubLegend useVisibleCheck="true" direction="horizontal" height="30" borderStyle="solid" defaultMouseOverAction="true" paddingTop="8" backgroundColor="#fefefe">\
		    <LegendItem label="90000이상">\
			    <fill>\
			        <SolidColor color="#c4281c"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="90000이하">\
			    <fill>\
			        <SolidColor color="#f53224"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="80000이하">\
			    <fill>\
			        <SolidColor color="#f64639"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="70000이하">\
			    <fill>\
			        <SolidColor color="#f75a4f"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="60000이하">\
			    <fill>\
			        <SolidColor color="#f86f65"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="50000이하">\
			    <fill>\
			        <SolidColor color="#f9847b"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="40000이하">\
			    <fill>\
			        <SolidColor color="#fa9891"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="30000이하">\
			    <fill>\
			        <SolidColor color="#fbada7"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="20000이하">\
			    <fill>\
			        <SolidColor color="#fcc1bd"/>\
			    </fill>\
			</LegendItem>\
	    </SubLegend>\
	</Box>\
</rMateMapChart>\
';

var layoutStr3 = '\
<?xml version="1.0" encoding="utf-8"?>\
<rMateMapChart>\
    <MapChart id="mainMap" drillDownEnabled="true" showDataTips="true" showDataTipTargets="true" mapChangeJsFunction="clickFunction" backToMapJsFunction="backFunction" itemClickJsFunction="itemClickFunction">\
        <series>\
            <MapSeries id="mapseries" selectionMarking="line" labelPosition="inside" displayName="지방" localFillJsFunction="colorFunction">\
				<showDataEffect>\
				    <SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
				<rollOverFill>\
				    <SolidColor color="#2e7dca"/>\
				</rollOverFill>\
				<localFill>\
				    <SolidColor color="#62bfea"/>\
				</localFill>\
				<stroke>\
				    <Stroke color="#CAD7E0" weight="0.8" alpha="1"/>\
				</stroke>\
            </MapSeries>\
		    <MapPlotSeries id="plot" labelField="dong_code" radius="4" adjustedRadius="6" displayName="지점" fill="#69bfe8">\
			    <showDataEffect>\
			        <SeriesZoom duration="1000"/>\
			    </showDataEffect>\
			</MapPlotSeries>\
        </series>\
    </MapChart>\
	<Box horizontalAlign="center" paddingTop="30" horizontalScrollPolicy="off" verticalScrollPolicy="off">\
	    <SubLegend useVisibleCheck="true" direction="horizontal" height="30" borderStyle="solid" defaultMouseOverAction="true" paddingTop="8" backgroundColor="#fefefe">\
	        <LegendItem label="9000이상">\
	            <fill>\
	                <SolidColor color="#0e4fbf"/>\
	            </fill>\
	        </LegendItem>\
	        <LegendItem label="9000이하">\
	            <fill>\
	                <SolidColor color="#2660c5"/>\
	            </fill>\
	        </LegendItem>\
	        <LegendItem label="8000이하">\
	            <fill>\
	                <SolidColor color="#3e72cb"/>\
	            </fill>\
	        </LegendItem>\
	        <LegendItem label="7000이하">\
	            <fill>\
	                <SolidColor color="#5683d2"/>\
	            </fill>\
	        </LegendItem>\
	        <LegendItem label="6000이하">\
	            <fill>\
	                <SolidColor color="#6e95d8"/>\
	            </fill>\
	        </LegendItem>\
		    <LegendItem label="5000이하">\
			    <fill>\
			        <SolidColor color="#86a7df"/>\
			    </fill>\
			</LegendItem>\
		    <LegendItem label="4000이하">\
			    <fill>\
			        <SolidColor color="#9eb8e5"/>\
			    </fill>\
			</LegendItem>\
		    <LegendItem label="3000이하">\
			    <fill>\
			        <SolidColor color="#b6caeb"/>\
			    </fill>\
			</LegendItem>\
			<LegendItem label="2000이하">\
			    <fill>\
			        <SolidColor color="#cedbf2"/>\
			    </fill>\
			</LegendItem>\
	    </SubLegend>\
	</Box>\
</rMateMapChart>\
';
	 
 

var mapVars = "rMateOnLoadCallFunction=mapReadyHandler";

var mapData = [];

function backFunction(code, label, data) {
	console.log("backFunction : ", code, label, data);
    if (String(code).length <=3) {
    	if(code % 100 == 0) {    	
    		document.getElementById('map1').setLayout(layoutStr);
    		document.getElementById('map1').getRoot().element.setOpenCode(0);
    		itemClickFunctionAddress.pop();
    	}else {
    		itemClickFunctionAddress.pop();
    		document.getElementById('map1').setLayout(layoutStr2);
    	}
    }
}

rMateMapChartH5.create("map1", "mapHolder", mapVars, "100%", "100%");

function mapReadyHandler(id) {
	document.getElementById(id).setLayout(layoutStr);
	document.getElementById(id).setMapDataBaseURLEx(mapDataBaseURL);
	document.getElementById(id).setSourceURLEx(sourceURL);
	//데이터 불러온 후 mapData 세팅
	$.ajax({
		url: contextURL + "/getPeopleData.do",
		method: 'GET',
		contentType : "application/json; charset:UTF-8",
		dataType: 'json',
		success: function(response) {
			mapData = response;
			$.ajax({
				url: contextURL + "/getPeopleDataSI.do",
				method: 'GET',
				contentType: "application/json; charset:UTF-8",
				dataType: 'json',
				success: function(response) {
					//console.log('data : %o', response);
					response.forEach(res => {
						mapData.push(res);
					});
					$.ajax({
						url: contextURL + "/getPeopleDataCity.do",
						method: 'GET',
						contentType: "application/json; charset:UTF-8",
						dataType: 'json',
						success: function(response) {
							console.log('getPeopleDataCityBySetting: %o', response);
							response.forEach(res => {
								mapData.push(res);
							});
							document.getElementById("map1").setData(mapData);
						}
					});
				}
			})
		},
		error: function(err) {
			console.log(err);
		},
	});
    
}

function clickFunction(code, label, data) {
    console.log("code:"+code+"\nlabel:"+label+"\ndata: %o",data);
    if(code != undefined) itemClickFunctionAddress.push(code);
    if (String(code).length <=3) {
    	if(code % 100 == 0) {    		
    		document.getElementById('map1').setLayout(layoutStr2);
    		document.getElementById('map1').getRoot().element.setOpenCode(code);
    	}else {
    		document.getElementById('map1').setLayout(layoutStr3);
    		document.getElementById('map1').getRoot().element.setOpenCode(code);
    	}
    }
}

function si_color(data) {
	if(!data || data["total"] === undefined) return "#ffffff";
    if(data["total"] > 100000) return'#dc2d20'
    else if(data["total"] > 95000) return'#c4281c';
    else if(data["total"] > 90000) return'#f53224';
    else if(data["total"] > 80000) return'#f64639';
    else if(data["total"] > 70000) return'#f75a4f';
    else if(data["total"] > 60000) return'#f86f65';
    else if(data["total"] > 50000) return'#f9847b';
    else if(data["total"] > 40000) return'#fa9891';
    else if(data["total"] > 30000) return'#fbada7';
    else if(data["total"] > 20000) return'#fcc1bd';
    else if(data["total"] > 1000) return'#fdd6d3';
    else if(data["total"] > 5000) return'#feeae9';
    else return '#ffffff';
}

function dong_color(data) {
	if(!data || data["total"] === undefined) return "#ffffff";
    if(data["total"] > 10000) return'#0c47ab';
    else if(data["total"] > 9000) return'#0e4fbf';
    else if(data["total"] > 8000) return'#2660c5';
    else if(data["total"] > 7000) return'#3e72cb';
    else if(data["total"] > 6000) return'#5683d2';
    else if(data["total"] > 5000) return'#6e95d8';
    else if(data["total"] > 4000) return'#86a7df';
    else if(data["total"] > 3000) return'#9eb8e5';
    else if(data["total"] > 2000) return'#b6caeb';
    else if(data["total"] > 1000) return'#cedbf2'  ;
    else if(data["total"] > 500) return'#e6edf8';
    else return '#ffffff';
}

function colorFunction(code, label, data) {
	if (String(code).length <=3) return si_color(data);
	else return dong_color(data);
}

$("#setting-select1, #setting-select2").on('change', function(e) {
	console.log(e.target.value);
	var sexValue = $("#setting-select1").val();  
    var ageValue = $("#setting-select2").val(); 
    mapData = [];
	$.ajax({
		url: contextURL + "/getPeopleDataBySetting.do",
		method: 'GET',
		data:{
			"sex" : sexValue,
			"age" : ageValue,
		},
		contentType : "application/json; charset:UTF-8",
		dataType: 'json',
		success: function(response) {
			console.log('data : %o',response);
			mapData = response;
			$.ajax({
				url: contextURL + "/getPeopleDataSIBySetting.do",
				method: 'GET',
				data:{
					"sex" : sexValue,
					"age" : ageValue,
				},
				contentType: "application/json; charset:UTF-8",
				dataType: 'json',
				success: function(response) {
					console.log('data : %o', response);
					response.forEach(res => {
						mapData.push(res);
					});
					$.ajax({
						url: contextURL + "/getPeopleDataCityBySetting.do",
						method: 'GET',
						data: {
							"sex" : sexValue,
							"age" : ageValue,
						},
						contentType: "application/json; charset:UTF-8",
						dataType: 'json',
						success: function(response) {
							console.log('getPeopleDataCityBySetting: %o', response);
							response.forEach(res => {
								mapData.push(res);
							});
							document.getElementById("map1").setData(mapData);
						}
					});
				}
			});
		},
		error: function(err) {
			console.log(err);
		},
	});
});

let itemClickFunctionAddress = [];

function itemClickFunction(seriesId, code, label, data) {
    const mapBase = document.getElementById('map1').getRoot()._mapDataBase;
    
    const arr = itemClickFunctionAddress;
    const symbols = mapBase.filter(e=>e.code == arr[0])[0].childrens.filter(e=>e.code == arr[1])[0].childrens.filter(e=>e.code == code)[0].symbol;
    const svgUrl = 'http://localhost:8080/TempProject/js/rmate/rMateMapChartH5/sample/SouthKoreaDrillDownUMD_GIS.svg';
    var svgVariable; 
    const parser = new DOMParser();
    var svgDoc;
    // Fetch를 사용하여 SVG 파일 가져오기
    fetch(svgUrl)
        .then(response => response.text()) // 응답을 텍스트로 변환
        .then(svgText => {
        	// DOMParser로 SVG 문자열을 파싱
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            
            // 'path' 태그를 찾기 (첫 번째 path 태그를 찾음)
            const targetPath = svgDoc.getElementsByTagName('path')[symbols];
            targetPath.setAttribute('fill',colorFunction(code, label, data));
            // path 태그를 문자열로 변환
            const targetSvgText = new XMLSerializer().serializeToString(targetPath);
            
            // SVG 태그를 감싸기
            const fullSvgText = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlin width="100%" height="100%" viewBox="0 0 301 301" preserveAspectRatio="xMidYMid meet">${targetSvgText}</svg>`;
            
            /// container의 innerHTML을 통해 SVG 문자열을 삽입
            const container = document.getElementById('choose-area');
            container.innerHTML = fullSvgText; // SVG 문자열을 직접 삽입
        });
    
    $.ajax({
		url: contextURL + "/getPeopleDataByCode.do",
		method: 'GET',
		data: {
			"code" : code
		},
		contentType: "application/json; charset:UTF-8",
		dataType: 'json',
		success: function(response) {
			console.log(response);
			document.getElementById("area").innerHTML = response[0].si_code + response[0].dong_code;
			console.log(response[0].si_code + response[0].dong_code);
			document.getElementById("total_cnt").innerHTML = response[0].total;
			document.getElementById("total_m").innerHTML = response[0].tot_man;
			document.getElementById("total_w").innerHTML = response[0].tot_woman;
		}
	});
}


//
//function itemClickFunction(seriesId, code, label, data) {
//	
//    alert("code:"+code+"\nlabel:"+label+"\n총 개수:"+data.total);
//}
//
//function backFunction(code, label, data) {
//    //alert('맵 변경 이벤트');
//    console.log("code : %o", code);
//    console.log("label : %o", label);
//    console.log("data : %o", data);
//}
//
//function clickFunction(code, label, data){
//	//alert("맵 클릭 이벤트")
//    console.log("code : %o", code);
//    console.log("label : %o", label);
//    if (code == 2233) {
//        fetchFilteredWFSData('address', label);
//    } else {
//        fetchWFSData('dong', label);
//    } 
//}
//
//function dataTipFunction(seriesId, code, label, data) {
//    if (seriesId == "bubble_total") {
//        return label + " - 총 수:" + data.count;
//    } else
//        return label;
//}
//
//
//var mapData = [];
//let test2 = [];
//
//async function fetchFilteredWFSData(columnName, label) {
//    let filter = `${columnName} LIKE '%${label}%'`;
//    let url = requestGeo.buildURL(requestGeo.vectorURL,
//                        requestGeo.vectorParam('1.1.1', 'GetFeature', 'TestWorkspace:용인시처인구_WGS', 'application/json', 'EPSG:4326', filter));
//    try {
//        const response = await fetch(url);
//        if (!response.ok) {
//            throw new Error('Network response was not ok ' + response.statusText);
//        }
//        const data = await response.json();
//        const features = data.features;
//        var loc = {};
//
//        features.forEach(element => {
//            var area = element.properties['dong'];
//            if (loc[area]) {
//                loc[area].count++;
//            } else {
//                loc[area] = { count: 1 };
//            }
//        });
//        test2 = [];
//        mapRoot.getObjectById('mainMap').mdb[0].childrens.forEach(e => {
//            if(loc[e.label]) {
//                loc[e.label]['code'] = e.code;
//            }
//        });
//        Object.keys(loc).forEach(key => {
//            test2.push({ 
//                code: loc[key].code, 
//                'total': loc[key].count, 
//                'count': loc[key].count,
//                'name': key,
//            });
//        });
//        test2.sort((a, b) => a.total - b.total);
//        document.getElementById('chart1').setData(test2);
//        document.getElementById('chart1').setLayout(createChartXML("전체 지역별 순위"));
//        mapRoot.getObjectById('mainMap').dataProvider = test2;
//        //mapRoot.setOpenCode(123123123);
//        //document.getElementById('map1').setData(test2);
//        //console.log(3119111);
//        //document.getElementById('map1').setOpenCode(3119111);
//		
//        const featureCount = features.length;
//        console.log(`Total number of features: ${featureCount}`);
//    } catch (error) {
//        console.error('There was a problem with the fetch operation:', error);
//    }
//}

//async function fetchWFSData(columnName, label) {
//    let filter = `${columnName} LIKE '%${label}%'`;
//    let url = requestGeo.buildURL(requestGeo.vectorURL,
//                        requestGeo.vectorParam('1.1.1', 'GetFeature', 'TestWorkspace:용인시처인구_WGS', 'application/json', 'EPSG:4326', filter));
//    try {
//        const response = await fetch(url);
//        if (!response.ok) {
//            throw new Error('Network response was not ok ' + response.statusText);
//        }
//        const data = await response.json();
//        const features = data.features;
//        var loc = {};
//
//        features.forEach(element => {
//            var area = element.properties['jimoc'];
//            if (loc[area]) {
//                loc[area].count++;
//            } else {
//                loc[area] = { count: 1, name: area };
//            }
//        });
//
//        console.log(loc);
//        let test = [];
//        var code = mapRoot.getObjectById('mainMap').mdb[0].childrens.filter(e=> e.label===label)[0].code;
//        Object.keys(loc).forEach(key => {
//            test.push({ 
//                code: code,
//                'total': loc[key].count, 
//                'count': loc[key].count,
//                'name': loc[key].name,
//            });
//        });
//        console.log(test);
//        test.sort((a, b) => a.total - b.total);
//        document.getElementById('chart1').setData(test);
//        document.getElementById('chart1').setLayout(createChartXML(label+" 지목별 순위"));
//        const featureCount = features.length;
//        console.log(`Total number of features: ${featureCount}`);
//    } catch (error) {
//        console.error('There was a problem with the fetch operation:', error);
//    }
//}

