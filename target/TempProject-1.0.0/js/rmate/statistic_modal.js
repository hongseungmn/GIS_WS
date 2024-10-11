DOMReady(function() {
	document.getElementById('close-backdrop').addEventListener("click", closeStatisticModal, false);	
});


function closeStatisticModal(e) {
	
	document.getElementsByClassName("backdrop")[0].style.top = '-9999px';
	document.getElementById('map1').setLayout(layout.createXML());
}