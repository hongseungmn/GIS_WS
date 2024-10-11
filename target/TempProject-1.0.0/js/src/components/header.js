export default function Header({$target}) {

	const $header = document.createElement('div');
	$header.innerHTML = `
	<div id="backdrop-header">
		<div style="width:100%;"></div>
		<div id="close-backdrop">
			<img src="rMateMapChartH5/Assets/close.png"/>
		</div>
	</div>
	`;
	
	$target.appendChild($header);
	
	
	const $closeBackdrop = document.getElementById("close-backdrop");
	
	$closeBackdrop.addEventListener('click', (e) => {
		document.getElementsByClassName("backdrop")[0].style.top = '-9999px';
	});
}