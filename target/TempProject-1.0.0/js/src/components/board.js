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

