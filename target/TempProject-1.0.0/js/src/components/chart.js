export default function Chart({$chartDiv, state}) {
	
	this.render = () => {
		rMateChartH5.create("chart1", "chartHolder", "", "100%", "100%");
		rMateChartH5.calls("chart1", {
			"setLayout" : layoutStr,
			"setData" : chartData
		});
	}
	
	this.render();
}

//스트링 형식으로 레이아웃 정의.
var layoutStr = 
	'<rMateChart>'
		+'<Options>'
			+'<Caption text="용인시 지목구분" paddingBottom="10" styleName="captionStyle"/>'
		+'</Options>'
		+'<TreeMapChart showDataTips="true" buttonMode="true">'
			+'<series>'
				+'<TreeMapSeries weightField="total" groupHeaderFontWeight="bold" showGroupHeader="true" groupField="items" displayName="Industry" groupNameField="name" color="#ffffff" nameField="industry" labelPosition="inside" groupHeaderHeight="23" groupLabelYOffset="-2">'
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
		+'<Style>'
		+'.captionStyle{textDecoration:underline;fontWeight:bold;fontSize:20px;color:#050505;}'
		+'</Style>' 
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



