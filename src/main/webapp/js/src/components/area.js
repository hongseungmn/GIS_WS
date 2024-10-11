export default function Area({$target, index, onClick, setCodeNLabelState}) {


	const $button = document.createElement('div');
	$button.className = 'area-button';
	
	let data = [
		{code: 2233, label:"처인구"},
		{code: 2232, label:"기흥구"},
		{code: 2231, label:"수지구"},
	];
	
	$button.innerHTML = data[index].label;
	
	$button.addEventListener('click', () => {
		setCodeNLabelState(1,data[index]);
		onClick(1);
	});
	$target.appendChild($button);
}
