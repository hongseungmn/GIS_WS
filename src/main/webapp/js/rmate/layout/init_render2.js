/**
 * 초기 설정 파일
*/


/*
	- 레이아웃은 크게 맵차트 UI 요소와 맵차트, Style 세 부분으로 구분된다
	- 맵 차트는 외형을 담당한다. 배경, 사이즈 등등이 포함된다. 가장 중요한 역할로 시리즈를 포함하게 되며 사용자 액션에 반응하게 된다(MapChart)
	- 시리즈는 실질적인 데이터를 표현한다. 맵 차트는 반드시 1개의 MapSeries를 가지고 있어야 하며, 그 외에 필요에 따라 다른 시리즈를 추가할 수 있다.(MapSeries, MapBubbleSeries, MapImageSeries, MapPanelSeries, MapPlotSeries)
*/

/* 레이아웃 초기 선언 */
var layout = new Layout()
.setMapChart(mapChart => {
	mapChart
	.setId("mainMap")
	.setShowDataTips(true)
	.setOpenCode(2233)
	.setDivDataTipJsFunction("divDataTipFunction")
	.setMapChangeJsFunction("areaClickFunction")
	.addSeries(series => {
		series
		.setInteractive(true)
		.setSelectionMarking("color")
		.setSelectionMarkLineColor("#758d99")
		.setLocalFillAttributes("#ebf0f4")
		.setRollOverFilter(true)
		.setUseGis(true)
		.setFilter({kind : "DropShadowFilter", distance:"5", angle:"90", color:"#888888", blur:"0"})
		.setShowDataEffect({kind : "SeriesInterpolate", duration:"1000"})
		.setSelectionFill({ kind : "SolidColor", color : "#f6b149"})
		.setRollOverFill({ kind : "SolidColor", color : "#f6b149"})
		.setRollOverStroke({ kind : "Stroke", color : "#f6b149", weight : "0.25", alpha : "0.25"})
		.setStroke({ kind : "Stroke", color : "#CAD7E0", weight : "0.8", alpha : "1" })
		.setStroke({weight:1})
		.setLabelPosition("inside")
		.setShowDataEffect()
		.setLocalFillJsFunction("colorFunction")
    },"MapSeries", "mapSeries") //기본 MapSeries 1개는 반드시 필요
}).build();

var layout2 = new Layout()
.setMapChart(mapChart => {
	mapChart
	.setId("mainMap2")
	.setShowDataTips(true)
	.setOpenCode(2233)
	.addSeries(series => {
		series
		.setInteractive(true)
		.setSelectionMarking("color")
		.setSelectionMarkLineColor("#758d99")
		.setLocalFillAttributes("#ebf0f4")
		.setUseGis(true)
		.setFilter({kind : "DropShadowFilter", distance:"5", angle:"90", color:"#888888", blur:"0"})
		.setShowDataEffect({kind : "SeriesInterpolate", duration:"1000"})
		.setSelectionFill({ kind : "SolidColor", color : "#f6b149"})
		.setRollOverFill({ kind : "SolidColor", color : "#f6b149"})
		.setRollOverStroke({ kind : "Stroke", color : "#f6b149", weight : "0.25", alpha : "0.25"})
		.setStroke({ kind : "Stroke", color : "#CAD7E0", weight : "0.8", alpha : "1" })
		.setStroke({weight:1})
		.setLabelPosition("inside")
		.setShowDataEffect()
    },"MapSeries", "mapSeries2") //기본 MapSeries 1개는 반드시 필요
}).build();

function basicLayout() {
	return new Layout()
	.setMapChart(mapChart => {
		mapChart
		.setId("mainMap")
		.setShowDataTips(true)
		.setOpenCode(2233)
		.setDivDataTipJsFunction("divDataTipFunction")
		.setMapChangeJsFunction("areaClickFunction")
		.addSeries(series => {
			series
			.setInteractive(true)
			.setSelectionMarking("color")
			.setSelectionMarkLineColor("#758d99")
			.setLocalFillAttributes("#ebf0f4")
			.setRollOverFilter(true)
			.setUseGis(true)
			.setFilter({kind : "DropShadowFilter", distance:"5", angle:"90", color:"#888888", blur:"0"})
			.setShowDataEffect({kind : "SeriesInterpolate", duration:"1000"})
			.setSelectionFill({ kind : "SolidColor", color : "#f6b149"})
			.setRollOverFill({ kind : "SolidColor", color : "#f6b149"})
			.setRollOverStroke({ kind : "Stroke", color : "#f6b149", weight : "0.25", alpha : "0.25"})
			.setStroke({ kind : "Stroke", color : "#CAD7E0", weight : "0.8", alpha : "1" })
			.setStroke({weight:1})
			.setLabelPosition("inside")
			.setShowDataEffect()
			.setLocalFillJsFunction("colorFunction")
	    },"MapSeries", "mapSeries") //기본 MapSeries 1개는 반드시 필요
	}).build();
}

		
//초기 지도 렌더링 후 콜백 함수 지정
var mapVars = "rMateOnLoadCallFunction=mapReadyHandler";
var mapVars2 = "rMateOnLoadCallFunction=mapReadyHandler2";

//지도 렌더링 완료 함수
function mapReadyHandler(id) {
	document.getElementById(id).setLayout(layout.createXML());
	document.getElementById(id).setData(MAPDATA.mapData);
	document.getElementById(id).setMapDataBaseURLEx(mapDataBaseURL);
	document.getElementById(id).setSourceURLEx(sourceURL);
}

function mapReadyHandler2(id) {
	document.getElementById(id).setLayout(layout2.createXML());
	document.getElementById(id).setData(MAPDATA);
	document.getElementById(id).setMapDataBaseURLEx(mapDataBaseURL);
	document.getElementById(id).setSourceURLEx(sourceURL);
}


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

let dataTipInstance = {
    state: {
        loading: false,
        data: null,
        error: null,
        label: '',
        code: null,
        weather: null,
    },
    setState(newState) {
        this.state = { ...this.state, ...newState };
    },
    render() {
    	const container = document.getElementById('DivDataTip');
    	this.setState({loading:false});
    	if (container) {
    		if (this.state.loading) {
    			container.innerHTML = 'wdf...';
    		} else if (this.state.error) {
    			container.innerHTML = `Error: ${this.state.error.message}`;
    		} else if (this.state.weather) {
    			container.innerHTML = `
    			<table margin=0 padding=0 width=196 height=150 style='text-align:left;color:#888888;letter-spacing:-1px;'>
					<tr>
						<td style='padding:0 0 0 15px;margin-top:-10px;font-size:20px; font-weight:bold;color:#000000'>
    						${this.state.label} 날씨
    					</td>
					</tr>
    				<tr>
    					<td align=center>
    						<img src='/images/${this.state.weather.response.body.items.item[6].fcstValue}.gif'/>
						<td>
					</tr>
					<tr>
						<td style='padding:0 0 0 15px;margin-top:-10px;font-size:15px;'>
    						기온 : ${this.state.weather.response.body.items.item[0].fcstValue}C
    						강수확률 : ${this.state.weather.response.body.items.item[7].fcstValue}%
    					</td>
					</tr>
				</table>
    			`;
    		}
    	}
	},
    
    async fetchData() {
    	
    	if (this.state.loading) return; // 이미 로딩 중이면 요청을 하지 않음

    	this.setState({ loading: true });
    	try {
    		const response = await this.getWeather(this.state.label);
	      	this.setState({weather: response});
	      	this.render();
    	} catch (error) {
    		this.setState({ error, loading: false });
    	}
	},
	
	async getWeather(label) {
		return new Promise((resolve, reject) => {
			$.ajax({
		          url: contextURL + '/getWeatherByLabel.do',
		          method: 'GET',
		          contentType: "application/json; charset=UTF-8",
		          dataType: 'json',
		          data: {
		        	  label,
		          },
		          success: function(response) {
		              resolve(response); // 성공적으로 데이터를 받아오면 resolve 호출
		          },
		          error: function(data, status, err) {
		              console.error(err);
		              reject(new Error(err)); // 오류 발생 시 reject 호출
		          }
		      });
		}).then(response => {
			return response;
		});
	},
	
	
};

function createDataTip(code, label, data) {
	
    if (dataTipInstance.state.label !== label) { //라벨이 다를 경우 실행
    	dataTipInstance.setState({loading:false, data, label, code});
    	dataTipInstance.fetchData();
        return;
    } //라벨이 같다면 기존 인스턴스 사용
    else { 
        setTimeout(() => {
            dataTipInstance.render();
        }, 500); // 500 밀리초(0.5초) 후에 실행
    	return;
    }
}

function divDataTipFunction(seriesId, code, label, data) {
	createDataTip(code, label, data);
    return 'Loading...';
}

function dataTipFunction(seriesId, code, label, data) {
    if (seriesId == "plot1") {
        return data.b_address.split("경기도 용인시 처인구")[1];
    }
    if (seriesId == "plot2") {
        return data.factoryName + " -- " + data.address;
    } else
        return label;
}

let intervalId = [];
function areaClickFunction(code, label, data) {
	const selectArea = document.querySelector('#selected-area');
	selectArea.innerHTML = label;
	selectArea.setAttribute('data-code', code);
	document.getElementById('gu-detail-toggle-switch2').checked = false;
	
}

function moveAllRouteImages(code) {
	
	DASHIN
		.filter(element => element.code === code)[0].data
		.forEach(e => {
			document.getElementById("map1").getRoot().getObjectById("route1").moveRouteImage(e.id);
		});
	document.getElementById("map1").setSelectedCode(code);
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

var beforeCode = '';
function areaClickFunctionLayout2(code, label, data) {
	var area = '';
	if(code === beforeCode) {
		document.getElementById('map2').getRoot().clearSelection(); 
		area = '';
	}
	else {
		area = label;
	}
	console.log('area : %o', area);
	$.ajax({
		url: contextURL + "/getManageDocumentByArea.do",
		method: 'GET',
		contentType: 'application/json; charset=UTF-8',
		dataType: 'json',
		data: {
			area : area,
		},
		success: function(response) {
			console.log("response : %o", response);
			var list = response;
		    var tableInstance = $("#jimocTable").DataTable();
		    
		    tableInstance.clear();
		    tableInstance.rows.add(list).draw();
		},
		error: function(data, status, error) {
			console.error(error);
			reject(new Error(error));
		}
	});
	beforeCode = code;
}
