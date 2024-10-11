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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/map/statistic_modal.css'/>"/>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/map/sample.css'/>"/>
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/2.1.3/css/dataTables.dataTables.min.css"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
	<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossorigin="anonymous"></script>
	<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/2.1.3/js/dataTables.min.js"></script>
    <script type="text/javaScript" src="<c:url value='/js/ol/ol.js'/>"></script>
   	<script type="text/javascript">
	
		//map 속성 인자 경로 설정
		var mapDataBaseURL = '<c:url value="/js/rmate/rMateMapChartH5/sample/SouthKoreaDrillDownUMD_GIS.xml"/>';
		var sourceURL = '<c:url value="/js/rmate/rMateMapChartH5/sample/SouthKoreaDrillDownUMD_GIS.svg"/>';
		const contextURL = 'http://localhost:8080' + '<c:url value=""/>';
		let test;
	</script>
    <script type="text/javaScript" src="<c:url value='/js/load_resource2.js'/>"></script>
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

    #mapHolder,#mapHolder2,  #chartHolder, #choose-area, #chartHolder2 {
        /* 원하는 크기로 설정 */
        width: 50%; /* 예시로 50%로 설정 */
        height: 90%; /* 예시로 높이 설정 */
        border-radius: 20px;
    }
    
    #mapHolder2 {
    	width: 30%;
    	height: 70%;
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
<div class="buttonNav-groups">
	<div id="modal-button" class="buttonNav-button btn btn-primary"  data-toggle="modal" data-target="#ModalSlide">주소 검색</div>
	<div id="spliter"></div>
	<div id="modal-button2" class="buttonNav-button btn btn-primary">통계 확인</div>
</div>
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
<div class="backdrop">
	<div id="app"></div>
	<script type="module" src="<c:url value='/js/index.js' />"></script>
</div>
</body>
</html>
