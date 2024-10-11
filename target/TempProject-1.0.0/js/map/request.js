/**
 * Geoserver로 요청을 관리하는 request 객체
 * 
 * @layerURL - layer를 요청하는 URL
 * @layerParam - 각 인자들을 넣어 layerURL이후의 쿼리를 작성
 * 
 * @vectorURL - vector를 요청하는 URL
 * @vectorParam - 각 인자들을 넣어 vectorURL이후의 쿼리를 작성
 * 
 * 
 * @createQueryString - Param을 쿼리 형태로 연결해주는 함수
 * 
 * @buildURL - URL과 createQueryString 함수로 만들어진 Param을 이어 최종 요청 URL을 만드는 함수
 */


let requestGeo = {
	layerURL : "http://127.0.0.1:8088/geoserver/TestWorkspace/wms?service=wms",
	layerParam: function(version, layers, bbox, srs, format) {
		return {
			'VERSION' : version, // 2. 버전
			'LAYERS' : layers, // 3. 작업공간:레이어 명
			'BBOX' : bbox, 
			'SRS' : srs, // SRID
			'FORMAT' : format // 포맷
		}
		
	},
	
	vectorURL: "http://127.0.0.1:8088/geoserver/TestWorkspace/wfs?service=WFS&",
	vectorParam: function(version, request, typename, outputFormat, srsname, filter) {
		
		var params = {
			'VERSION' : version,
			'REQUEST' : request,
			'TYPENAME' : typename,
			'OUTPUTFORMAT' : outputFormat,
			'SRSNAME' : srsname,
		};
		
	    // filter 인자가 제공된 경우에만 추가
        if (filter) {
            params['CQL_FILTER'] = filter;
        }
		
		return params
	},
	
	createQueryString: function(params) {
		return Object
				.keys(params)
				.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
				.join('&');
	},
	
	buildURL: function(baseURL, params) {
		return baseURL + this.createQueryString(params);
	}
}