import Person from './person.js';
import Dash from './dash.js';
import Jimoc from './jimoc.js';
import Detail from './detail.js';
import DashBoard from './dashboard.js';

export default function Gu($cube, state, setCodeNLabelState, onClick) {



	layout.mapChart.setDivDataTipJsFunction("divDataTipFunction");
	const {code, label} = state;
	const $root = document.createElement("div");
	$root.className = 'gu-pane';
	
	const $map = document.createElement("div");
	const $detail = document.createElement("div");
	$detail.className = 'gu-detail';
	
	const $detail2 = document.createElement("div");
	$detail2.className = 'gu-detail2';
	
	new Person({$detail, state}).render();
	
	$detail.appendChild($detail2);
	new Dash({$detail2, state});
	new Detail({$detail2, state}, onClick, setCodeNLabelState);
	new DashBoard({$detail2, state});
	
	new Jimoc({$detail, state}, setCodeNLabelState);
	
	$map.id = "mapHolder";
	
	$root.appendChild($map);
	$root.appendChild($detail);
	$cube.appendChild($root);

	this.componentDidMount = (callback) => {
		layout = basicLayout();
		layout.mapChart.setOpenCode(code);
		intervalId.forEach(e => clearInterval(e));
		intervalId.length = 0;
		callback();
	};
	
	
	this.componentDidMount(()=> {
		rMateMapChartH5.create("map1", "mapHolder", mapVars, "100%", "100%");
	});
	
}