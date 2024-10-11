export default function DashBoard({$detail2, state}) {''

	const $root = document.createElement('div');
	$root.className = "gu-detail-goDashBoard-pane";
	
	$root.innerHTML = `
	<div class="gu-detail-goDashBoard-title">
		대시보드 확인 >>
	</div>
	`;
	$detail2.appendChild($root);
}