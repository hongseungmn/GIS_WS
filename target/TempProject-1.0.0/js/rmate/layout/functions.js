//정의된 헬프 함수를 이용한 코드
DOMReady(function () {	
	let setChartSex = document.querySelectorAll("#select-sex > li");
	setChartSex.forEach(element => {
	    element.addEventListener("click", function(e) {
	    	setChartSex.forEach(e => e.classList.remove("choose-option-selected")); //기존 클래스 제거
	        element.classList.toggle("choose-option-selected");
	        setShowSexChart(e.target.getAttribute("data-v"), document.querySelector("#select-age > .choose-option-selected").getAttribute("data-v"));
	    });
	});
	
	let setChartAge = document.querySelectorAll("#select-age > li");
	setChartAge.forEach(element => {
		element.addEventListener("click", function(e) {
			setChartAge.forEach(e => e.classList.remove("choose-option-selected"));
			element.classList.toggle("choose-option-selected");
			setShowAgeChart(e.target.getAttribute("data-v"),document.querySelector("#select-sex > .choose-option-selected").getAttribute("data-v"));
		});
	});
	
	let setInOut = document.querySelectorAll("#select-inout > li");
	setInOut.forEach(element => {
		element.addEventListener("click", function(e) {
			setInOut.forEach(e => e.classList.remove("choose-option-selected"));
			element.classList.toggle("choose-option-selected");
			setInOutChart(e.target.getAttribute("data-v"));
		}) 
	});
});



function setShowSexChart(e,s) {
	var value = '';
	if( s === 'tot') {
		value = `[${e}children,${e}adult,${e}elder]`;
		layout.mapChart.searchSeries("MapSeries").setLabelPosition("none");
		layout.mapChart.searchSeries("MapSparkSeries").setType("column").setDataField(value);
	} else if(e === 'tot_' && s !== 'tot') {
		value = `[${e}tot]`;
		layout.mapChart.searchSeries("MapSparkSeries").setType("column").setDataField(value);
	} else {
		value = `[${e}${s}]`;
		layout.mapChart.searchSeries("MapSparkSeries").setType("column").setDataField(value);
	}
	console.log(value);
	console.log("Sex Selected Before setShowSexChart:", document.querySelector("#select-sex > .choose-option-selected").getAttribute("data-v"));
    console.log("Age Selected Before setShowSexChart:", document.querySelector("#select-age > .choose-option-selected").getAttribute("data-v"));
	document.getElementById('map1').setData(MAPDATA.mapData);
	document.getElementById("map1").setLayout(layout.createXML());
}

function setShowAgeChart(e,s) {
	var value = '';
	console.log("Sex Selected Before setShowSexChart:", document.querySelector("#select-sex > .choose-option-selected").getAttribute("data-v"));
    console.log("Age Selected Before setShowSexChart:", document.querySelector("#select-age > .choose-option-selected").getAttribute("data-v"));
	if(s === 'tot_' && e !== 'tot') {
		value = `[m_${e},w_${e}]`;
		layout.mapChart.searchSeries("MapSparkSeries").setType("pie").setDataField(value);
	} else if(e === 'tot') {
		value = `[tot_${e}]`;
		layout.mapChart.searchSeries("MapSparkSeries").setType("column").setDataField(value);
	} else {
		value = `[${s}${e}]`;
		layout.mapChart.searchSeries("MapSparkSeries").setType("column").setDataField(value);
	}
	console.log(value);
	document.getElementById('map1').setData(MAPDATA.mapData);
	document.getElementById("map1").setLayout(layout.createXML());
}

function setInOutChart(e) {
	if(e === 'dash_in') {
		intervalId.forEach(e => clearInterval(e));
		intervalId.length = 0;
		layout2.mapChart.searchSeries("MapRouteSeries")
			.setFromCodeField("destination_code")
			.setToCodeField("start_code")
			.setLineColor("#007bff")
			.setImageUrlField("imgUrl2")
			.setLabelField("label2");
			
	} else if(e === 'dash_out') {
		intervalId.forEach(e => clearInterval(e));
		intervalId.length = 0;
		layout2.mapChart.searchSeries("MapRouteSeries")
			.setFromCodeField("start_code")
			.setToCodeField("destination_code")
			.setLineColor("#e15749")
			.setImageUrlField("imgUrl")
			.setLabelField("label");
	}
	console.log("layout 변경 ");
	document.getElementById("map2").setLayout(layout2.createXML());
}
