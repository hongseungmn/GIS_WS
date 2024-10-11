import createUploadModal from './uploadModal.js';

export default function Board($cube, state, setCodeNLabelState, onClick) {


	const $root = document.createElement("div");
	$root.className = 'board-pane';
	const {code, label} = state;
	
	const $map = document.createElement("div");
	$map.id = "mapHolder2";
	
	const $board = document.createElement("table");
	$board.className='board-detail';
	$board.id = 'jimocTable';
	$board.className +='table table-hover cell-border compact';
	$board.innerHTML = `
	  <thead>
	    <tr>
	      <th>관리번호</th>
		  <th>주소</th>
	      <th>제목</th>
	      <th>일자</th>
	    </tr>
	  </thead>
	`;
	
	const $downloadFormButton = document.createElement("button");
	$downloadFormButton.className = 'btn btn-success';
	$downloadFormButton.id ="downloadFormButton";
	$downloadFormButton.innerHTML = '업로드 양식 다운로드';
	
	const $uploadButton = document.createElement("button");
	$uploadButton.className = 'btn btn-primary';
	$uploadButton.id = 'uploadButton';
	$uploadButton.innerHTML = '일괄 업로드';
	
	$map.appendChild($downloadFormButton);
	$map.appendChild($uploadButton);
	
	$root.appendChild($map);
	$root.appendChild($board);
	
	
	
	this.componentDidMount = () => {
		layout2.mapChart.setOpenCode(2233);
		layout2.mapChart.setMapChangeJsFunction("areaClickFunctionLayout2")
		$cube.appendChild($root);
	}
	
	this.render = async () => {
		await this.componentDidMount();
		var mapVars2 = "rMateOnLoadCallFunction=mapReadyHandler2";
		rMateMapChartH5.create("map2", "mapHolder2", mapVars2, "100%", "100%");
		$('#jimocTable').removeAttr('width').DataTable({
		    columns: [
		        { data: 'manage_code' },
		        { data: 'b_input_address' },
		        { data: 'title' },
		        { data: 'register_date' },
		    ],
		    rowCallback: function(row, data) {
		    	$(row).on('click', function(event) {
		    		console.log('data : %o', data);
		    	})
		    }
		});
		$('#downloadFormButton').on('click', function() {
			var folderName = encodeURIComponent("C:\\GIS_WS\\eGovFrameDev-3.8.0-64bit\\workspace\\TempProject\\src\\main\\resources\\static\\upload_template");
		    var url = "http://localhost:8080/getUploadFormZipFile.do?folderName=" + folderName;

		    // 페이지를 리다이렉션하여 URL로 이동
		    window.location.href = url;
		});
		$root.appendChild(createUploadModal()); //모달 붙이기
	}
	
	this.render();
	
	

	this.fetchData = () => {
		$.ajax({
			url: contextURL + "/getManageDocumentByArea.do",
			method: 'GET',
			contentType: 'application/json; charset=UTF-8',
			dataType: 'json',
			data: {
				area : '',
			},
			success: function(response) {
				console.log("response : %o", response);
				var list = response;
			    var tableInstance = $("#jimocTable").DataTable();
			    
			    tableInstance.clear();
			    tableInstance.rows.add(list).draw();
			},
			error : function(data, status, error) {
				console.error(error);
				reject(new Error(err));
			}
		});
	};
	this.fetchData();
}

