<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%
  /**
  * @Class Name : egovSampleList.jsp
  * @Description : Sample List 화면
  * @Modification Information
  *
  *   수정일         수정자                   수정내용
  *  -------    --------    ---------------------------
  *  2009.02.01            최초 생성
  *
  * author 실행환경 개발팀
  * since 2009.02.01
  *
  * Copyright (C) 2009 by MOPAS  All right reserved.
  */
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title><spring:message code="title.sample" /></title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>
	<!-- Popper JS -->
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
	<!-- Latest compiled JavaScript -->
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/ol/ol.css'/>"/>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/map/load-map.css'/>"/>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/map/sample.css'/>"/>
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/2.1.3/css/dataTables.dataTables.min.css"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="https://cdn.datatables.net/2.1.3/js/dataTables.min.js"></script>
    <script type="text/javaScript" src="<c:url value='/js/ol/ol.js'/>"></script>
    <script defer type="text/javascript" src="<c:url value='/js/load_resource.js' />"></script>
    <!-- rMateMapChartH5 에서 사용하는 스타일 -->
	<link rel="stylesheet" type="text/css" href="<c:url value='/js/rmate/rMateMapChartH5/Assets/rMateMapChartH5.css'/>"/>
	
	<!-- rMateMapChartH5 라이센스 -->
	<script language="javascript" type="text/javascript" src="<c:url value='/js/rmate/LicenseKey/rMateMapChartH5License.js'/>"></script>
	
	<!-- 실제적인 rMateMapChartH5 라이브러리 -->
	<script language="javascript" type="text/javascript" src="<c:url value='/js/rmate/rMateMapChartH5/JS/rMateMapChartH5.js'/>" charset="utf-8"></script>
	
	<!-- rMateChartH5 에서 사용하는 스타일 -->
	<link rel="stylesheet" type="text/css" href="<c:url value='/js/rmate/rMateChartH5/Assets/Css/rMateChartH5.css'/>"/>
	
	<!-- rMateChartH5 라이센스 -->
	<script language="javascript" type="text/javascript" src="<c:url value='/js/rmate/LicenseKey/rMateChartH5License.js'/>"></script>
	
	<!-- 실제적인 rMateChartH5 라이브러리 -->
	<script type="text/javascript" src="<c:url value='/js/rmate/rMateChartH5/JS/rMateChartH5.js'/>"></script>
	
	<!-- rMateChartH5 테마 js -->
	<script type="text/javascript" src="<c:url value='/js/rmate/rMateChartH5/Assets/Theme/theme.js'/>"></script>
	<script type="text/javascript">
	
	//map 속성 인자 경로 설정
	var mapDataBaseURL = '<c:url value="/js/rmate/rMateMapChartH5/sample/SouthKoreaDrillDownUMD_GIS.xml"/>';
	var mapDataBaseURL2 = '<c:url value="/js/rmate/rMateMapChartH5/sample/SouthKoreaDrillDownUMD_GIS.xml"/>';
	var sourceURL = '<c:url value="/js/rmate/rMateMapChartH5/sample/SouthKoreaDrillDownUMD_GIS.svg"/>';
	const contextURL = '<c:url value="/"/>'
	
	// -----------------------차트 설정 시작-----------------------
	let chart;

	//rMateChartH5.create("chart1", "chartHolder","", "100%", "100%"); 

	// 스트링 형식으로 레이아웃 정의.
	var layoutStr2 =
					'<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
						+'<Options>'
							+'<Caption text="지목 순위" />'
							+'<SubCaption text="( 개 )" textAlign="right" />'
						+'</Options>'
						+'<Bar3DChart showDataTips="true">'
						/*
						Bar3D차트 생성시엔 Bar3DChart를 정의합니다
						showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다.
						*/
							+'<horizontalAxis>'
								+'<LinearAxis minimum="0" interval="5"/>'
							+'</horizontalAxis>'
							+'<verticalAxis>'
							/* Bar3D차트는 y축에서 데이터 시리즈가 나오는 형태이어서 verticalAxis축을 참고합니다 */
								+'<CategoryAxis categoryField="name"/>'
							+'</verticalAxis>'
							+'<series>'
								+'<Bar3DSeries labelPosition="inside" labelPostion="true" xField="count" displayName="count" color="#ffffff" insideLabelYOffset="-2" insideLabelXOffset="-4" labelAlign="right">'
								/* Bar3DChart 정의 후 Bar3DSeries를 정의합니다  */
									+'<showDataEffect>'
									/* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
										+'<SeriesInterpolate/>'
										/*
										SeriesInterpolate는 시리즈 데이터가 새로운 시리즈 데이터로 표시될 때 이동하는 효과를 적용합니다
										- 공통속성 -
										elementOffset : effect를 지연시키는 시간을 지정합니다 default:20
										minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0
													 이 값보다 짧은 시간에 effect가 실행되지 않습니다
										offset : effect개시의 지연시간을 설정합니다 default:0
										perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다
										*/
									+'</showDataEffect>'
								+'</Bar3DSeries>'
							+'</series>'
						+'</Bar3DChart>'
					+'</rMateChart>';

	rMateChartH5.calls("chart1", {
		"setLayout" : layoutStr2,
		"setData" : [],
	});

	function createChartXML(captionText) {
	    return `
	        <rMateChart backgroundColor="#FFFFFF" borderStyle="none">
	            <Options>
	                <Caption text="${captionText}" />
	                <SubCaption text="( 개 )" textAlign="right" />
	            </Options>
	            <Bar3DChart showDataTips="true">
	                <horizontalAxis>
	                    <LinearAxis minimum="0" interval="5"/>
	                </horizontalAxis>
	                <verticalAxis>
	                    <CategoryAxis categoryField="name"/>
	                </verticalAxis>
	                <series>
	                    <Bar3DSeries labelPosition="inside" labelPostion="true" xField="count" displayName="count" color="#ffffff" insideLabelYOffset="-2" insideLabelXOffset="-4" labelAlign="right">
	                        <showDataEffect>
	                            <SeriesInterpolate/>
	                        </showDataEffect>
	                    </Bar3DSeries>
	                </series>
	            </Bar3DChart>
	        </rMateChart>
	    `;
	}

	/**
	 * rMateChartH5 3.0이후 버전에서 제공하고 있는 테마기능을 사용하시려면 아래 내용을 설정하여 주십시오.
	 * 테마 기능을 사용하지 않으시려면 아래 내용은 삭제 혹은 주석처리 하셔도 됩니다.
	 *
	 * -- rMateChartH5.themes에 등록되어있는 테마 목록 --
	 * - simple
	 * - cyber
	 * - modern
	 * - lovely
	 * - pastel
	 * -------------------------------------------------
	 *
	 * rMateChartH5.themes 변수는 theme.js에서 정의하고 있습니다.
	 */
	rMateChartH5.registerTheme(rMateChartH5.themes);
	</script>
</head>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<link rel="stylesheet" type="text/css" href="<c:url value='/js/rmate/samples/Web/sample.css'/>"/>
<style>
    .container {
        padding: 30px;
    }

    .wrapper {
        width: 1000px;
        height: 500px;
        min-width: 100%;
        margin-left: auto;
    }

    .chart-area {
        display: flex;
    }

    #mapHolder,#mapHolder2,  #chartHolder, #choose-area {
        /* 원하는 크기로 설정 */
        width: 100%; /* 예시로 50%로 설정 */
        height: 100%; /* 예시로 높이 설정 */
        border: 15px solid #dcdcdc; /* 시각적 확인을 위한 테두리 설정 */
        border-radius: 20px;
    }

    .content {
        margin:20px;
        display:flex;
    }
    body {
	  font-family: "Do Hyeon", sans-serif;
	  font-style: normal;
	}
</style>
<body style="text-align:center; margin:0 auto; display:inline; padding-top:100px;">
<div id="map" class="map">
	<!-- 실제 지도가 표출 될 영역 -->
	<div id="popup" class="ol-popup">
		<a href="#" id="popup-close" class="ol-popup-closer"></a>
		<div id="popup-content"></div>
	</div>
</div>
<div id="modal-button" class="btn btn-primary"  data-toggle="modal" data-target="#ModalSlide"></div>
<div class="modal fade" id="ModalSlide" tabindex="-1" role="dialog"  data-backdrop='static' data-keyboard='false' aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog modal-dialog-slideout" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title align-right" id="exampleModalLabel">Address List</h5>

      </div>
      <div class="modal-body">
      	<div class="data-table-area">
	        <table id="dataTable" class="table table-hover cell-border compact">
			  <thead>
			    <tr>
			      <th>연번</th>
			      <th>용도지역</th>
			      <th>주소</th>
			    </tr>
			  </thead>
			  <tbody></tbody>
			</table>
		</div>
		<div class="setting-area">	
		</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div class="headerTitle" style="padding:30px;text-align:center">지역별 인구 통계</div>	
<div class="wrapper">
	<div class="chart-area" style="padding:30px;">
		<div class="content">
	        <!-- 차트가 삽입될 DIV -->
	        <div id="mapHolder" style="width:60%;height:500px;"></div>
	        <div class ="m-3" id="setting" style="width:40%;height:500px;text-align:left;">
	        	<div class="form-group form-check-inline">
				    <label for="setting-select1">성별</label>
				    <select class="form-control" id="setting-select1">
				      <option value="tot">모두 선택</option>
				      <option value="m">남성</option>
				      <option value="w">여성</option>
				    </select>
			    </div>
			    <div class="form-group form-check-inline">
				    <label for="setting-select2">연령</label>
				    <select class="form-control" id="setting-select2">
				      <option value="tot">모두 선택</option>
				      <option value="children">청소년 및 아동</option>
				      <option value="adult">성인</option>
				      <option value="elder">노인</option>
				    </select>
			    </div>
			    <div id="choose-area" style="width:40%;height:200px;"></div>
			    <div style="width:100%;height:200px;">
			    	<ul>
			    		<li>지역 : <span id="area"></span></li>
			    		<li>총 인구 수 : <span id="total_cnt"></span></li>
			    		<li>남자 인구 수 : <span id="total_m"></span></li>
			    		<li>여자 인구 수 : <span id="total_w"></span></li>
			    	</ul>
			    </div>
	        </div>
	    </div>
<!-- 	    <div class="content"> -->
<!-- 	    	<div id="mapHolder2" style="width:100%;height:500px;"></div> -->
<!-- 	    </div> -->
    </div>
</div>
<!-- <div id="chartHolder" style="width:700px;height:500px;left: 0px;"></div> -->
</body>
<script>
	$.ajax({
		url: '<c:url value="/getMapData.do"/>',
		method: 'GET',
		contentType : "application/json; charset:UTF-8",
		dataType: 'json',
		success: function(response) {
			console.log('data : %o',response);
		},
		error: function(data, status, err) {
			console.log(err);
		},
		complete: function() {
			console.log("complete 완");
		}
	})
</script>
</html>
