export default function Dash({$detail2, state}) {

	const $root = document.createElement('div');
	$root.className = "gu-detail-dashPerson-pane";
	
	$root.innerHTML = `
	<div class="gu-detail-dashPerson-title">
		유동인구 확인 : <span id='selected-area'>지역 선택</span>
	</div>
	<div class="gu-detail-dashPerson-content">
		<div class="gu-detail-dashPerson-choose">
			<div class="gu-detail-dashPerson-choice select" id='dash-in'>유입인구</div>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<div class="gu-detail-dashPerson-choice" id='dash-out'>유출인구</div>
		</div>
		<div class="gu-detail-dashPerson-switch">
			<div style="display:flex;justify-content: center;">
				<div id="hidden-icon"></div>
				/
				<div id="show-icon"></div>
			</div>
			<label class="switch">
				<input type="checkbox" id="gu-detail-toggle-switch2">
				<span class="slider round"></span>
			</label>
		</div>
	    
	</div>
	`;
	$detail2.appendChild($root);
	$detail2.addEventListener('click', (event) => { //이벤트 전파 방식
		if(event.target && event.target.id === 'dash-in') {
			event.target.classList.add('select');
			document.getElementById('dash-out').classList.remove('select');
			document.getElementById('gu-detail-toggle-switch2').checked = false;
		}
		else if(event.target && event.target.id === 'dash-out') {
			event.target.classList.add('select');
			document.getElementById('dash-in').classList.remove('select');
			document.getElementById('gu-detail-toggle-switch2').checked = false;
		}
		
	});
	$detail2.addEventListener('change', (event) => {
		if(event.target && event.target.id === 'gu-detail-toggle-switch2') {
			intervalId.forEach(e => clearInterval(e));
			intervalId.length = 0;
			if(event.target.checked) {
				const selectArea = document.getElementById('selected-area').innerHTML;
				const code = document.getElementById('selected-area').getAttribute('data-code');
				if(selectArea === '지역 선택') {
					alert("지역을 선택해주세요");
					event.target.checked = false;
					return;
				} else {
					const dash = document.querySelector('.gu-detail-dashPerson-choice.select').id;
					if(!layout.mapChart.searchSeries('MapRouteSeries')) {
						layout.mapChart.addSeries(series => {
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
					}
					if(dash === 'dash-in') {
						console.log("dash-in");
						layout.mapChart.searchSeries('MapRouteSeries')
							.setFromCodeField("destination_code")
							.setToCodeField("start_code")
							.setLineColor("#007bff")
							.setImageUrlField("imgUrl2")
							.setLabelField("label2");
						
					} else {
						console.log('dash-out');
						layout.mapChart.searchSeries('MapRouteSeries')
							.setFromCodeField("start_code")
							.setToCodeField("destination_code")
							.setLineColor("#e15749")
							.setImageUrlField("imgUrl")
							.setLabelField("label");
					}
					layout.mapChart.seriesList[0].setLabelJsFunction("labelFunction").setAreaCodeField("code").setAreaDataCode("destination_code");
					console.log("DASHIN.filter(element => element.code === code)[0] : %o", DASHIN);
					console.log("code : %o", code);
					var sort = DASHIN.filter(element => element.code === parseInt(code))[0].data.sort((a, b) => a.sales - b.sales);
					sort.forEach((e, index) => e['grade'] = index);
					document.getElementById("map1").setData(sort);
					intervalId.push(setInterval(moveAllRouteImages, 1000, parseInt(code)));
				}


			} else {
				if(layout.mapChart.searchSeries('MapRouteSeries')) {
					layout.mapChart.removeSeries('MapRouteSeries');
					layout.mapChart.seriesList[0].setLabelJsFunction(null);
				}
				document.getElementById("map1").setData(MAPDATA.mapDATA);
			}
			document.getElementById("map1").setLayout(layout.createXML());
		}
	})
}