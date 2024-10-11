let map;
let view;
let overLay;

$( document ).ready(function() {
	
	/**
	 * OpenLayers View 객체
	 * 
	 * @center : 지도에서 보여줄 중심좌표 
	 * @zoom : 지도의 줌 레벨
	 */
	view = new ol.View({ 
	      center: ol.proj.fromLonLat([127.2793023, 37.1538475]),
	      zoom: 13
    });
	
	/**
	 * OpenLayers Overlay 객체
	 */
	var container = document.getElementById('popup');
	overLay = new ol.Overlay({
		element: container,
		autoPan: true,
		autoPanAnimation: {
			duration: 250
		}
	});
	
	/**
     * OpenLayers map 객체
     * 
     * @target : OpenLayer의 맵 객체 생성해 연결하기 위한 target <div>의 id값
     * @layers : 지도에서 사용할 레이어의 목록을 정의
     * @view : 지도에서 사용할 view를 정의
     * @controls: 지도에서 사용할 추가 도구 정의
     * @overLay : 테이블에서 행 클릭시 띄울 오버레이 정의
     */
	 map = new ol.Map({ 
	    target: 'map', 
	    layers: [ 
	      new ol.layer.Tile({
	        source: new ol.source.OSM({
	          url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png' // vworld의 지도를 가져온다.
	        })
	      })
	    ],
	    view: view,
	    controls: ol.control.defaults({
	    	attributeOptions: ({
	    		collapsible: false
	    	})
	    }).extend([
	    	new ol.control.ScaleLine(),
	    	new app.RotateNorthControl()
	    ]),
	    overlays: [overLay],
	});
	
    
	/**
	 * Geoserver에서 발행한 "용인시처인구_WGS" Layer 객체
	 * 
	 * @source : url, param을 통해 추가 설정
	 */
	var yongInPointLayer = new ol.layer.Tile({
		source : new ol.source.TileWMS({
			url : requestGeo.layerURL,
			params : requestGeo.layerParam(
						'1.1.1',
						'TestWorkspace:용인시처인구_WGS',
						[127.11123657226562, 37.0874137878418, 127.4195785522461, 37.358245849609375],
						'EPSG:4326',
						'image/png'
					),
			serverType : 'geoserver',
		})
	});
	
	
	/**
	 * Geoserver에서 발행한 "polygon" Layer 객체
	 * 
	 * @source : url, param을 통해 추가 설정
	 * @opacity : 투명도
	 */
	var yongInPolygonLayer = new ol.layer.Tile({
		source : new ol.source.TileWMS({
			url : requestGeo.layerURL,
			params : requestGeo.layerParam(
						'1.1.1',
						'TestWorkspace:polygon',
						[127.1087417602539, 37.083648681640625, 127.427734375, 38.209774017333984],
						'EPSG:4326',
						'image/png'
					),
			serverType : 'geoserver',
		}),
		opacity: 0.8
	});
		
	
	/**
	 * Geoserver에서 발행한 "용인시처인구_WGS" Layer의 모든 Point 객체
	 */
	var yongInAllPointVector = new ol.source.Vector({
		url: requestGeo.buildURL(requestGeo.vectorURL, 
									requestGeo.vectorParam(
										'1.1.0', 
										'GetFeature', 
										'TestWorkspace:용인시처인구_WGS', 
										'application/json', 
										'EPSG:4326'
									)
								),
		format: new ol.format.GeoJSON()
	});
	

	
	/**
	 *  타일 로드 완료시 전체 데이터 테이블에 그리기
	 */
	yongInAllPointVector.on('change', function() {
	    if (yongInAllPointVector.getState() === 'ready') {
	        drawPointTable(yongInAllPointVector.getFeatures());
	        console.log('Data loaded');
	    }
	});
	

	/**
	 * yongInAllPointVector을 화면에 렌더링하기 위한 Layer 객체
	 */
	var yongInAllPointLayer = new ol.layer.Vector({
		source: yongInAllPointVector,
	});
	
	/**
	 * 생성한 모든 레이어 map에 추가
	 */
	map.addLayer(yongInPolygonLayer);  
	map.addLayer(yongInPointLayer);
	map.addLayer(yongInAllPointLayer);
	
//========================================================================================== 초기 화면 세팅 완료

	/**
	 * Drag 상호작용을 관리하는 클래스
	 * 
	 * @param {ol.Map} map - OpenLayers 지도 객체
	 * @param {ol.source.Vector} yongInAllPointVector - 모든 포인트를 포함하는 벡터 소스
	 */
	class DragInteractionManager {
	    /**
	     * @constructor
	     * @param {ol.Map} map - OpenLayers 지도 객체
	     * @param {ol.source.Vector} yongInAllPointVector - 모든 포인트를 포함하는 벡터 소스
	     */
	    constructor(map, yongInAllPointVector) {
	        this.map = map;
	        this.yongInAllPointVector = yongInAllPointVector;
	        
	        // 선택된 포인트 및 벡터 소스 초기화
	        this.selectedPoints = [];
	        this.selectedVectors = new ol.source.Vector();
	        
	        // 드래그 줌 및 레이어 초기화
	        this.dragZoom = new ol.interaction.DragZoom({
	            condition: ol.events.condition.platformModifierKeyOnly
	        });
	        
	        this.yongInSelectedPointLayer = new ol.layer.Vector({
	            source: this.selectedVectors,
	            style: pointStyleFunction
	        });

	        // 이벤트 바인딩
	        this.bindEvents();
	        
	        // 지도에 인터랙션 및 레이어 추가
	        this.map.addInteraction(this.dragZoom);
	        this.map.addLayer(this.yongInSelectedPointLayer);
	    }

	    /**
	     * 드래그 상호작용 및 지도 클릭 이벤트를 바인딩하는 메서드
	     */
	    bindEvents() {
	        this.dragZoom.on('boxend', this.onBoxEnd.bind(this));
	        this.dragZoom.on('boxstart', this.onBoxStart.bind(this));
	        this.map.on('click', this.onMapClick.bind(this));
	    }

	    /**
	     * 드래그 상호작용의 끝 부분에서 호출되는 이벤트 핸들러
	     * 선택된 영역에 포함된 포인트를 업데이트하고, 벡터 소스를 갱신합니다.
	     */
	    onBoxEnd() {
	        const extent = this.dragZoom.getGeometry().getExtent();
	        this.selectedPoints = [];
	        
	        this.yongInAllPointVector.forEachFeatureIntersectingExtent(extent, (feature) => {
	            this.selectedPoints.push(feature);
	        });
	        drawPointTable(this.selectedPoints);
	        this.selectedVectors.clear();  // 기존 벡터 지우기
	        this.selectedVectors.addFeatures(this.selectedPoints);  // 새로운 포인트 추가
	    }

	    /**
	     * 드래그 상호작용이 시작될 때 호출되는 이벤트 핸들러
	     * @param {ol.events.Event} event - 드래그 시작 이벤트 객체
	     */
	    onBoxStart(event) {
	        console.log('Drag started at:', event.coordinate);
	    }

	    /**
	     * 지도 클릭 시 호출되는 이벤트 핸들러
	     * 선택된 포인트와 벡터 소스를 초기화합니다.
	     */
	    onMapClick() {
	    	drawPointTable(yongInAllPointVector.getFeatures());
	        this.selectedPoints = [];
	        this.selectedVectors.clear();
	    }
	}

	
	/**
	 * drag 관리하는 manager 클래스 생성
	 */
	const dragInteractionManager = new DragInteractionManager(map, yongInAllPointVector);
	
	
	
//	
//	/**
//	 * dragZoom 객체 이벤트 결과 포인트 정보를 담을 vector객체
//	 */
//	var vectorPoints = new ol.layer.Vector({
//		style: pointStyleFunction
//	});
//	
//	
//	/**
//	 * 드래그 관련 이벤트 상호작용을 할 객체
//	 */
//	let dragZoom = new ol.interaction.DragZoom({
//		condition: ol.events.condition.platformModifierKeyOnly
//	});
//	
//	dragZoom.on('boxend', function() {
//		var extent = dragZoom.getGeometry().getExtent();
//		let selectedFeatures = [];
//		yongInAllPointVector.forEachFeatureIntersectingExtent(extent, function(feature) {
//          selectedFeatures.push(feature);
//        });
//		var vectorSource = new ol.source.Vector({
//			features: selectedFeatures,
//		});
//		vectorPoints.setSource(vectorSource);
//	});
//	
//	dragZoom.on('boxstart', function(event) {
//	    let coordinate = event.coordinate;
//	    console.log('Drag started at:', coordinate);
//	});
//	
//	dragInteractionManager.init(yongInAllPointVector);
//	
//	map.on('click', function() {
//		
//		var emptySource = new ol.source.Vector({
//			features: []
//		});
//		
//		dragInteractionManager.vectorPoints.setSource(emptySource);
//	})
//	
//	
//	
//	map.addInteraction(dragInteractionManager.dragZoom);	
//	map.addLayer(dragInteractionManager.vectorPoints);

});

