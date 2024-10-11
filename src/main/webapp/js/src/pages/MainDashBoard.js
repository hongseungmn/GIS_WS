import Header from '../components/header.js';
import Cube from '../components/cube.js';

export default function MainDashBoard({ $target }) {



	//헤더 생성
	new Header({ $target });
	
	//큐브 컨테이너 생성
	const $cubeContainer = document.createElement('div');
	$cubeContainer.className = 'cube';
	
	//상태
	this.state = {
        rotateX: 0,
        rotateY: 0,
        activeCubeIndex: null, // 현재 활성화된 큐브의 인덱스
        cubes: [] //큐브 인스턴스 저장 배열
    };

	
    // 큐브 회전 함수
    this.rotateCube = (index) => {
    	//큐브 회전 업데이트
        this.setState({
        	rotateY: index === 1 ? this.state.rotateY + 90 : this.state.rotateY - 90,
        	activeCubeIndex: index,
        });
        if(document.querySelector('.cube2')) {        	
        	if(this.state.rotateY == 0) {
        		document.querySelector('.cube2').style.visibility = 'hidden';
        		document.querySelector('.cube0').style.visibility = 'visible';
        	} else if(this.state.rotateY == 90) {
        		document.querySelector('.cube1').style.visibility = 'visible';
        	} else if(this.state.rotateY == 180) {
        		document.querySelector('.cube0').style.visibility = 'hidden';
        		document.querySelector('.cube2').style.visibility = 'visible';
        	}
        }
        
         
        $cubeContainer.style.transform = `rotateX(${this.state.rotateX}deg) rotateY(${this.state.rotateY}deg)`;
    };
	

    // 상태 업데이트 함수
    this.setState = (nextState) => {
        this.state = { ...this.state, ...nextState };
    };
    
    this.setCodeNLabelState = (index, state) => {
    	this.state.cubes[index].setCodeNLabelState(state);
    	this.state.cubes[index].render();
    } //포곡읍
    
    //큐브 클릭 이벤트 처리
    this.handleCubeClick = (index) => {
    	this.rotateCube(index);
    }

    // 렌더링 함수
    this.render = () => {
        $target.appendChild($cubeContainer);
        console.log("렌더링 함수 ");
        //큐브 생성
        for(let i=0; i<4; i++) {
        	const cube = new Cube({
        		$target: $cubeContainer,
        		index: i,
        		onClick: (loc) => this.handleCubeClick(loc),
        		setCodeNLabelState: this.setCodeNLabelState
        	});
        	this.state.cubes.push(cube);
        }
        this.state.cubes[0].render();
        console.log("this.state.cubes : %o", this.state.cubes);
    };
}
