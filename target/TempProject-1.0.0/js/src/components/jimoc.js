import Chart from './chart.js';
import Chart2 from './chart2.js';

export default function Jimoc({$detail, state}, setCodeNLabelState) {


	const $root = document.createElement('div');
	$root.className = 'gu-detail-totaljimoc';
	
	
	this.state = {
		data: null,
		loading: true,
		error : null,
		label : state.label
	}
	
	this.setState = (newState) => {
		this.state = {...this.state, ...newState}
		this.render();
	}
	
	
	
	this.componentDidMount = async () => {
		try {
			const response = await this.fetchData();
		} catch (err) {
			this.setState({error : err, loading: false});
			console.log("데이터 로딩 오류 : %o", err);
		}
	},
	
	this.fetchData = () => {
		return new Promise((resolve, reject) => {
			$.ajax({
				url : contextURL + '/getJimocByLabel.do',
				method: 'GET',
				contentType : 'application/json; charset=UTF-8',
				dataType: 'json',
				data: {
					label : this.state.label,
				},
				success: function(response) {
					resolve(response); //성공적으로 데이터를 받아오면 resolve
				},
				error :function(data, status, err) {
					console.error(err);
					reject(new Error(err)); //오류 발생시 reject 호출
				}
			});
		}).then((response) => {
			this.setState({loading:false, data: response});
			test = response;
		})
	}
	
	this.render = () => {
		$root.innerHTML = `
		<div class='gu-detail-totaljimoc-select-pane'>
			<div class='gu-detail-totaljimoc-select-area'>
				<div class='gu-detail-select-box area'>
					<div id="gu-detail-select-box-value-area">지역 선택</div>
					<div id="select-check-icon" style="width:20px;height:20px;"></div>
				</div>
				<div class='gu-detail-select-items area select-hide'>
					<div>모현읍</div>
					<div>포곡읍</div>
					<div>유림동</div>
					<div>양지면</div>
					<div>동부동</div>
					<div>중앙동</div>
					<div>이동읍</div>
					<div>원삼면</div>
					<div>백암면</div>
					<div>남사읍</div>
				</div>
			</div>
			<div class='gu-detail-totaljimoc-select-area'>
				<div class='gu-detail-select-box jimoc'>
					<div id="gu-detail-select-box-value-jimoc">지목 선택</div>
					<div id="select-check-icon" style="width:20px;height:20px;"></div>
				</div>
				<div class='gu-detail-select-items jimoc select-hide'>
					<div>전체</div>
					<div>공장용지</div>
					<div>체육용지</div>
					<div>종교용지</div>
					<div>전</div>
					<div>답</div>
					<div>도로</div>
					<div>유원지</div>
					<div>과수원</div>
					<div>유지</div>
					<div>대</div>
					<div>묘지</div>
					<div>목장용지</div>
					<div>하천</div>
					<div>창고용지</div>
					<div>주유소용지</div>
					<div>임야</div>
					<div>철도용지</div>
				</div>
			</div>
		</div>
		<div id="chartDiv"><div id="chartHolder"></div><div id="chartHolder2"></div></div>
		`;
		$detail.appendChild($root);
		
		const select_area = document.querySelector('.gu-detail-select-box.area');
		if(select_area) {
			select_area.addEventListener('click', () => {
				const selectBox = document.querySelector('.gu-detail-select-items.area');
				selectBox.classList.toggle('select-hide');
			});
			
			const selectItem = document.querySelectorAll('.gu-detail-select-items.area > div');
			selectItem.forEach(e => e.addEventListener('click', this.setSelectAreaEvent.bind(this)));
		}
		const select_jimoc = document.querySelector('.gu-detail-select-box.jimoc');
		if(select_jimoc) {
			select_jimoc.addEventListener('click', () => {
				const selectBox = document.querySelector('.gu-detail-select-items.jimoc');
				selectBox.classList.toggle('select-hide');
			});
			
			const selectItem = document.querySelectorAll('.gu-detail-select-items.jimoc > div');
			selectItem.forEach(e => e.addEventListener('click', this.setSelectJimocEvent.bind(this)))
		}
		
		const $chartDiv = document.querySelector('#chartDiv');
		if($chartDiv) {
			new Chart({$chartDiv, state: this.state.data});
			new Chart2({$chartDiv, state: this.state.data});
		}
	}
	this.render();
	setTimeout(() => {this.componentDidMount();},1000);
	
	this.setDataJimocByLabel = (label, jimoc) => {
		if(jimoc == '전체') jimoc = '';
		console.log(label);
		console.log(jimoc);
		layout
		.mapChart
			.setDivDataTipJsFunction("dataTipFunction")
			.addSeries(series=> {
				series
				.setAreaCodeField("code")
				.setLabelField("b_num")
				.setUseGis(true)
				.setAdjustedRadius(10)
				.setLabelPositionField("lapos")
				.setColor("#3ab8b1")
				.setFontWeight("bold")
				.setLabelPostion("bottom")
				.setFill("#3ab8b1")
				.setStroke({ kind : "Stroke", color : "#3ab8b1", weight : "0.8", alpha : "1" })
			},"MapPlotSeries", "plot1")
		let filterData = this.state.data.filter(e => e.b_address.includes(label) && e.b_jimoc.includes(jimoc));
		filterData.forEach(e => {
			e['code'] = 2233;
		    e['lng'] = e['b_x'];
		    e['lat'] = e['b_y'];
		});
		document.getElementById('map1').setLayout(layout.createXML());
		document.getElementById("map1").setData(filterData);
	}
	
	this.setSelectAreaEvent = (e) => {
		document.getElementById('gu-detail-select-box-value-area').innerHTML = e.target.innerHTML;
		document.querySelector('.gu-detail-select-items.area').classList.toggle('select-hide');
		this.setDataJimocByLabel(e.target.innerHTML, document.getElementById('gu-detail-select-box-value-jimoc').innerHTML);
	}
	
	this.setSelectJimocEvent = (e) => {
		document.getElementById('gu-detail-select-box-value-jimoc').innerHTML = e.target.innerHTML;
		document.querySelector('.gu-detail-select-items.jimoc').classList.toggle('select-hide');
		this.setDataJimocByLabel(document.getElementById('gu-detail-select-box-value-area').innerHTML, e.target.innerHTML);
	}
}
