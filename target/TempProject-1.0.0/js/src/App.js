import MainDashBoard from './pages/MainDashBoard.js';
import { init } from './router.js';

export default function App({ $target }) {

	this.route = () => {
		const { pathname } = location;
		
		$target.innerHTML = '';
		if(pathname === '/') {
			new MainDashBoard({ $target }).render();
		} else {
			console.error("해당 페이지가 없습니다.");
		}
	}
	//ROUTE_CHANGE 이벤트 발생 시마다 App의 this.route 함수가 호출되게 하는 효과
	init(this.route);
	this.route();
	
	// 뒤로가기, 앞으로가기 발생 시 popstate 이벤트가 발생합니다.
	window.addEventListener('popstate', this.route)
}