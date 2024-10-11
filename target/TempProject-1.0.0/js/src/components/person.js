export default function Person({$detail, state}) {

	const $root = document.createElement("div");
	$root.className = 'gu-detail-totalPerson';
	
	this.state = {
		data: null,
		loading: true,
		error : null,
		label: state.label
	}
	
	this.setState = (newState) => {
        this.state = { ...this.state, ...newState };
        this.render();
	}
	
	
	
	this.componentDidMount = async () => {
		try {
			const response = await this.fetchData();
			this.setState({ data: response, loading: false });
		} catch (err) {
			this.setState({ error: err, loading: false });
			console.log("데이터 로딩 오류 : %o", err);
		}
		
	},
	
	this.fetchData = () => {
		return new Promise((resolve, reject) => {
			$.ajax({
		          url: contextURL + '/getPersonByLabel.do',
		          method: 'GET',
		          contentType: "application/json; charset=UTF-8",
		          dataType: 'json',
		          data: {
		        	  label :this.state.label,
		          },
		          success: function(response) {
		              resolve(response); // 성공적으로 데이터를 받아오면 resolve 호출
		          },
		          error: function(data, status, err) {
		              console.error(err);
		              reject(new Error(err)); // 오류 발생 시 reject 호출
		          }
			});
		});
	};
	
	this.render = () => {		
		const totalElement = document.getElementById("gu-detail-total");
		const manElement = document.getElementById("gu-detail-man");
		const womanElement = document.getElementById("gu-detail-woman");
        if (!totalElement) {
            // Re-initialize if totalElement is not present
            $root.innerHTML = `
                <div class="gu-detail-totalPerson-pane">
                    <div class="gu-detail-totalPerson-item" id="gu-detail-total">
	                    <div class="spinner-border" style="width: 3rem; height: 3rem;margin: auto;color: #4c4c4c8c;" role="status">
						  <span class="sr-only">Loading...</span>
						</div>
						<span class="loading-progress">Loading...</span>
                    </div>
                    <div class="gu-detail-totalPerson-item" id="gu-detail-man">
	                    <div class="spinner-border" style="width: 3rem; height: 3rem;margin: auto;color: #4c4c4c8c;" role="status">
						  <span class="sr-only">Loading...</span>
						</div>
						<span class="loading-progress">Loading...</span>
                    </div>
                    <div class="gu-detail-totalPerson-item" id="gu-detail-woman">
	                    <div class="spinner-border" style="width: 3rem; height: 3rem;margin: auto;color: #4c4c4c8c;" role="status">
						  <span class="sr-only">Loading...</span>
						</div>
						<span class="loading-progress">Loading...</span>
                    </div>
                    <div class="gu-detail-totalPerson-item" id="gu-detail-sub" style="width: 80px;">
	                    <div id="gu-detail-age-button">
	                    	<div>
								연령대별
							</div>
		                    <label class="switch">
							  <input type="checkbox" id="gu-detail-toggle-switch">
							  <span class="slider round"></span>
							</label>
                    	</div>
	                    <div style="margin-top: -50px;">다운로드</div>
                    </div>
                </div>
            `;
            $detail.appendChild($root);
            return;
        }
        else {
            totalElement.innerHTML = `
	            <div class="gu-detail-totalPerson-item-title">전체 인구 수</div>
	            <span id="counting-total" style="margin-top: 50px;">${this.state.data.tot}<span>
	        `;
            
            manElement.innerHTML = `
            	<div class="gu-detail-totalPerson-item-title">남자 인구 수</div>
	            <span id="counting-man" style="margin-top: 50px;">${this.state.data.m_tot}<span>
            `;
            
            womanElement.innerHTML = `
            	<div class="gu-detail-totalPerson-item-title">여자 인구 수</div>
	            <span id="counting-woman" style="margin-top: 50px;">${this.state.data.m_tot}<span>
            `;
            
            countingType("counting-total",this.state.data.tot);
            countingType("counting-man",this.state.data.m_tot);
            countingType("counting-woman",this.state.data.w_tot);
        }
        
        const switchAge = document.getElementById('gu-detail-toggle-switch');
        if(switchAge) {
        	switchAge.addEventListener('change', (e) => {
        		if(e.target.checked) {
        			countingType("counting-total",this.state.data.children);
                    countingType("counting-man",this.state.data.adult);
                    countingType("counting-woman",this.state.data.elder);
        		}
        	});
        }
	};
	
	this.render();
	setTimeout(() => {this.componentDidMount();},2000);
}

function countingType(elementId,num){
	  const element = document.getElementById(elementId)
	  /* 각자리로 나누어 올리기 위해 쪼개려는 것 */
	  let current = new Array(num.length).fill(0);
	  let arrayNum = String(num).split('').reverse();

	  /* 올라갈 때 걸리는 시간 균등하게 하기위해. 단, 최대 0.06초씩은 되도록 */
	  const total = arrayNum.reduce((pre, cur)=>Number(pre)+Number(cur));
	  const eachTime = Math.min(1100/total, 80);

	  let time = 0
	  for(let j=0; j<arrayNum.length; j++){
	    for(let i = 0; i<=arrayNum[j]; i++){
	      setTimeout(()=>{
	        current[arrayNum.length-j-1]=i;
	        element.innerHTML = current.join('').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	      }, eachTime*(time + i))
	    }
	    time += arrayNum[j]-1;
	  }
	}