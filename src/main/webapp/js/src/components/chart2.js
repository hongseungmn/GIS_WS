export default function Chart2({$chartDiv, state}) {
	
	this.render = () => {
		rMateChartH5.create("chart2", "chartHolder2", "", "100%", "100%");
		rMateChartH5.calls("chart2", {
			 "setLayout" : layoutStr2,
			 "setData" : chartData2
		});
	}
	
	this.render();
}


//스트링 형식으로 레이아웃 정의.
//스트링 형식으로 레이아웃 정의.
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
			+'<CategoryAxis id="hAxis" categoryField="name" padding="0.5"/>'
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
        +'<verticalAxisRenderers>'
	        +'<Axis2DRenderer axis="{hAxis}" labelRotation="-25" fontSize="8" showLine="true"/>'
	    +'</verticalAxisRenderers>'
	+'</Bar3DChart>'
+'</rMateChart>';

//차트 데이터
var chartData2 = [
    {
        "total": 1,
        "count": 1,
        "name": "null"
    },
    {
        "total": 11,
        "count": 11,
        "name": "삼가동"
    },
    {
        "code": 3119154,
        "total": 30,
        "count": 30,
        "name": "동부동"
    },
    {
        "code": 3119151,
        "total": 34,
        "count": 34,
        "name": "중앙동"
    },
    {
        "total": 40,
        "count": 40,
        "name": "역북동"
    },
    {
        "code": 3119153,
        "total": 52,
        "count": 52,
        "name": "유림동"
    },
    {
        "code": 3119135,
        "total": 64,
        "count": 64,
        "name": "백암면"
    },
    {
        "code": 3119136,
        "total": 106,
        "count": 106,
        "name": "양지면"
    },
    {
        "code": 3119132,
        "total": 121,
        "count": 121,
        "name": "남사읍"
    },
    {
        "code": 3119113,
        "total": 126,
        "count": 126,
        "name": "이동읍"
    },
    {
        "code": 3119111,
        "total": 140,
        "count": 140,
        "name": "포곡읍"
    },
    {
        "code": 3119112,
        "total": 165,
        "count": 165,
        "name": "모현읍"
    },
    {
        "code": 3119134,
        "total": 169,
        "count": 169,
        "name": "원삼면"
    }
];

function leftLabelJsFunction(seriesId, index, data, values){
 return '<span style="color:#01dbab; font-size:25px; font-weight:800;">' + Math.round((values[0] / data.total) * 100) + '%</span>';
};

function rightLabelJsFunction(seriesId, index, data, values){
 return '<span style="color:#1e90f2; font-size:25px; font-weight:800;">' + Math.round((values[0] / data.total) * 100) + '%</span>';
};

//rMateChartH5.calls 함수를 이용하여 차트의 준비가 끝나면 실행할 함수를 등록합니다.
//
//argument 1 - rMateChartH5.create시 설정한 차트 객체 아이디 값
//argument 2 - 차트준비가 완료되면 실행할 함수 명(key)과 설정될 전달인자 값(value)
//
//아래 내용은 
//1. 차트 준비가 완료되면 첫 전달인자 값을 가진 차트 객체에 접근하여
//2. 두 번째 전달인자 값의 key 명으로 정의된 함수에 value값을 전달인자로 설정하여 실행합니다.

