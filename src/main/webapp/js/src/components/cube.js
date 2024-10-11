import Area from './area.js';




import Gu from './gu.js';
import Gu2 from './gu.js';
import Board from './board.js';

export default function Cube({$target, index, onClick, setCodeNLabelState}) {


	const $cube = document.createElement('div');
	$cube.className = 'cube'+index;
	
	this.state = {
		code: 0,
		label : '',
	}
	
	this.setCodeNLabelState = (nextState) => {
		this.state = {...this.state, ...nextState };
	}
	
	this.render = () => {
		$cube.innerHTML = '';
		if(index === 0) {
			const $title = document.createElement('h1');
			$title.innerHTML = '지역 선택';
			$cube.appendChild($title);
			
			const $areaContainer = document.createElement('div');
			$areaContainer.className = 'area-container';
			
			new Area({$target:$areaContainer, index:0, onClick:onClick, setCodeNLabelState: setCodeNLabelState});
			new Area({$target:$areaContainer, index:1, onClick:onClick, setCodeNLabelState: setCodeNLabelState});
			new Area({$target:$areaContainer, index:2, onClick:onClick, setCodeNLabelState: setCodeNLabelState});
			
			$cube.appendChild($areaContainer);
			
		} else if (index === 1) {
			const $title = document.createElement('h1');
			const $backButton = document.createElement('div');
			$backButton.className = 'area-backButton';
			$title.innerHTML = this.state.label;
			$cube.appendChild($title);
			$cube.appendChild($backButton);
			$backButton.addEventListener('click', () => {
				onClick(0);
			});
			new Gu($cube , this.state, setCodeNLabelState, onClick);
			
		} else if(index === 2) {
			const $title = document.createElement('h1');
			const $backButton = document.createElement('div');
			$backButton.className = 'area-backButton';
			$title.innerHTML = this.state.label;
			$cube.appendChild($title);
			$cube.appendChild($backButton);
			$backButton.addEventListener('click', () => {
				onClick(0);
			});

			new Board($cube, this.state, setCodeNLabelState, onClick);
		}
		$target.appendChild($cube);
	}
	
}