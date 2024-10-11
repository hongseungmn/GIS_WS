export default function createUploadModal() {
    const $modal = document.createElement("div");
    $modal.className = 'fade';
    $modal.id = 'uploadModal';
    $modal.tabIndex = -1;
    $modal.style.display = 'none'
    $modal.role = 'dialog';
    $modal.innerHTML = `
      <div class="modal-dialog modal-dialog-uploadModal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <input type="file" id="fileUploadInput" />
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" id="confirmUpload">업로드</button>
          </div>
        </div>
      </div>
    `;

    // 이벤트 설정
    $('#uploadButton').on('click', function() {
        $('#uploadModal').modal('show');
    });
    
    $('#fileUploadInput').on('change', function() {
    	console.log("asdf");
    })

    $('#confirmUpload').on('click', function() {
//        const fileInput = document.getElementById('fileUploadInput');
//        const file = fileInput.files[0];
//
//        if (file) {
//            const formData = new FormData();
//            formData.append('file', file);
//
//            $.ajax({
//                url: contextURL + "/uploadFile", // 파일 업로드 URL
//                method: 'POST',
//                data: formData,
//                contentType: false,
//                processData: false,
//                success: function(response) {
//                    console.log("파일 업로드 성공: ", response);
//                    $('#uploadModal').modal('hide'); // 모달 닫기
//                },
//                error: function(err) {
//                    console.error("파일 업로드 실패: ", err);
//                }
//            });
//        } else {
//            alert("파일을 선택해 주세요.");
//        }
    });

    return $modal;
}