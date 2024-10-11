// -----------------------차트 설정 시작-----------------------
 
// rMateChart 를 생성합니다.
// 파라메터 (순서대로)
//  1. 차트의 id ( 임의로 지정하십시오. )
//  2. 차트가 위치할 div 의 id (즉, 차트의 부모 div 의 id 입니다.)
//  3. 차트 생성 시 필요한 환경 변수들의 묶음인 chartVars
//  4. 차트의 가로 사이즈 (생략 가능, 생략 시 100%)
//  5. 차트의 세로 사이즈 (생략 가능, 생략 시 100%)
rMateChartH5.create("chart2", "chartHolder2", "", "100%", "100%");
 
// 스트링 형식으로 레이아웃 정의.
var layoutStr2 =
    '<rMateChart paddingTop="38" backgroundColor="#ffffff">'
        +'<Options>'
            +'<Caption text="처인구 인구 통계" fontSize="21" fontWeight="800" paddingBottom="10"/>'
            +'<Legend defaultMouseOverAction="true" useVisibleCheck="true" position="top" borderStyle="none" markerHeight="18" fontSize="13" />'
        +'</Options>'
        +'<CurrencyFormatter id="curfmt" currencySymbol="명" alignSymbol="right"/>'
        +'<PictorialChart seriesMouseOverAction="series" showDataTips="true" itemHorizontalGap="50" perIconValue="151720"  paddingTop="20" paddingBottom="100" paddingLeft="50" paddingRight="50" dataTipFormatter="{curfmt}">'
                +'<series>'
                    +'<PictorialSeries labelPosition="left" url="../rMateChartH5/Assets/Images/picto_children.svg" itemRenderer="PictorialHFillItemRenderer" backgroundFill="#e7eef8" fontSize="20" valueField="woman" displayName="여성" labelPadding="130" labelJsFunction="leftLabelJsFunction">'
                        +'<fill>'
                            +'<SolidColor color="#01dbab"/>'
                        +'</fill>'
                        +'<showDataEffect>'
                            +'<SeriesInterpolate/>'
                        +'</showDataEffect>'
                    +'</PictorialSeries>'
                    +'<PictorialSeries labelPosition="right" url="../rMateChartH5/Assets/Images/picto_man.svg" itemRenderer="PictorialHFillItemRenderer" backgroundFill="#e7eef8" fontSize="20" valueField="man" displayName="남성" labelPadding="130" labelJsFunction="rightLabelJsFunction">'
                        +'<fill>'
                            +'<SolidColor color="#1e90f2"/>'
                        +'</fill>'
                        +'<showDataEffect>'
                            +'<SeriesInterpolate/>'
                        +'</showDataEffect>'
                    +'</PictorialSeries>'
                +'</series>'
        +'</PictorialChart>'
    +'</rMateChart>';
 
// 차트 데이터
var chartData2 = [
    {"name":"전국 초등학교 교사 성별 비율", "man":54932, "woman":96788, "total":151720}
];
 
function leftLabelJsFunction(seriesId, index, data, values){
    return '<span style="color:#01dbab; font-size:25px; font-weight:800;">' + Math.round((values[0] / data.total) * 100) + '%</span>';
};
 
function rightLabelJsFunction(seriesId, index, data, values){
    return '<span style="color:#1e90f2; font-size:25px; font-weight:800;">' + Math.round((values[0] / data.total) * 100) + '%</span>';
};
 
// rMateChartH5.calls 함수를 이용하여 차트의 준비가 끝나면 실행할 함수를 등록합니다.
//
// argument 1 - rMateChartH5.create시 설정한 차트 객체 아이디 값
// argument 2 - 차트준비가 완료되면 실행할 함수 명(key)과 설정될 전달인자 값(value)
// 
// 아래 내용은 
// 1. 차트 준비가 완료되면 첫 전달인자 값을 가진 차트 객체에 접근하여
// 2. 두 번째 전달인자 값의 key 명으로 정의된 함수에 value값을 전달인자로 설정하여 실행합니다.
rMateChartH5.calls("chart2", {
    "setLayout" : layoutStr2,
    "setData" : chartData2
});
 
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
 
/**
 * 샘플 내의 테마 버튼 클릭 시 호출되는 함수입니다.
 * 접근하는 차트 객체의 테마를 변경합니다.
 * 파라메터로 넘어오는 값
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * - default
 *
 * default : 테마를 적용하기 전 기본 형태를 출력합니다.
 */
function rMateChartH5ChangeTheme(theme){
    document.getElementById("chart2").setTheme(theme);
}