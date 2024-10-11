/**
 * 지도 중심좌표 변경 함수
 * 
 * @param lon - 경도
 * @param lat - 위도
 */
function changeMapCenter(lon, lat) {
    var view = map.getView();
    var newCenter = ol.proj.fromLonLat([lon, lat]);
    view.setCenter(newCenter);
}

/**
 * 지도 줌 레벨 변경 함수
 * 
 * @param zoomLevel - 줌 레벨
 */
function changeMapZoom(zoomLevel) {
	var view = map.getView();
	view.setZoom(zoomLevel);
}