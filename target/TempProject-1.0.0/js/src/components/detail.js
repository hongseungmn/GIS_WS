export default function Detail({$detail2, state}, onClick, setCodeNLabelState) {


	const $root = document.createElement('div');
	$root.className = "gu-detail-goDetail-pane";
	
	$root.innerHTML = `
	<div class="gu-detail-goDetail-title">
		지역 관리대장 확인 >>
	</div>
	<div class="gu-detail-goDetail-conetent" id ="goDetail">
	
	</div>
	`;
	$detail2.appendChild($root);
    // 상위 요소에 이벤트 위임
    $detail2.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'goDetail') {
            if (onClick) {
                onClick(1);
            }
            if (setCodeNLabelState) {
                setCodeNLabelState(2, {label: '관리대장', code: 3119111});
            }
        }
    });
}