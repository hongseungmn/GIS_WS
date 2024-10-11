/**
 * MapChart 설정 파일
 */

class MapChart {
    constructor() {
        this.optionalAttributes = {
            id: null,
            drillDownEnabled: null,             //클릭시 하위맵(시, 도) 표시 가능 여부, 맵데이터베이스에서 하위 맵이 설정되어 있을 경우 하위맵으로 이동합니다.
            dataTipJsFunction: null,            //데이터팁(툴팁)을 사용자 정의 함수로 설정
            dataTipType: null,                  //데이터팁 타입을 지정합니다.
            divDataTipJsFunction: null,         //Div 데이터팁(툴팁)을 사용자 정의할 함수를 지정합니다.
            followDataTip: null,                //데이터팁이 마우스를 따라 움직일지 설정합니다. - 기본값 : false
            itemClickJsFunction: null,          //시리즈의 아이템을 클릭시 불려질 함수를 지정
            mapChangeJsFunction: null,          //지역을 클릭시 불려질 함수를 지정
            openCode: null,                     //현재 사용자가 보고 있는 지역의 코드 - 기본값 : ""
            panZoom: null,                      //마우스 휠로 확대/축소 드래그로 지도 이동 - 기본값 : false
            rootCode: null,                     //맨 처음 로딩시 보여줄 지역의 코드값으로 표시되지 않으면 최상위 지역이 표시됩니다.
            showDataTips: null,                 //지역 이미지 마우스 오버시 데이터팁을 보여줄지 여부 - 기본값 : false
            dataTipAlpha: null,                 //데이터 팁 배경 투명도
            dataTipBorderColor: null,           //데이터팁 선색
            dataTipColor: null,                 //데이터팁 폰트 색
            dataTipFill: null,                  //데이터팁 배경색
            fontFamily: null,                   //폰트
            fontSize: null,
            fontStyle: null,
            fontWeight: null,
            backToMapJsFunction: null           //하위맵 상태에서 상위맵 버튼, 지도 외부 클릭시 불려지는 함수 설정
        };
        this.mapSeries = new Series(); // Series 객체 포함
        this.seriesList = [];
    }

    //MapChart id 설정
    setId(id="mainMap") {
        this.optionalAttributes.id = id;
        return this;
    }

    setDrillDownEnabled(value) {
        this.optionalAttributes.drillDownEnabled = value;
        return this;
    }

    setDataTipJsFunction(value) {
        this.optionalAttributes.dataTipJsFunction = value;
        return this;
    }

    setDataTipType(value) {
        this.optionalAttributes.dataTipType = value;
        return this;
    }

    setDivDataTipJsFunction(value) {
        this.optionalAttributes.divDataTipJsFunction = value;
        return this;
    }

    setFollowDataTip(value) {
        this.optionalAttributes.followDataTip = value;
        return this;
    }
    
    //아이템 클릭시 사용자 정의 함수 설정
    setItemClickJsFunction(funcName = "itemClickFunction") {
        this.optionalAttributes.itemClickJsFunction = funcName;
        return this;
    }

    //하위 맵으로 변경시 사용자 정의 함수 설정
    setMapChangeJsFunction(funcName = "clickFunction") {
        this.optionalAttributes.mapChangeJsFunction = funcName;
        return this;
    }

    setOpenCode(value) {
        this.optionalAttributes.openCode = value;
        return this;
    }

    setPanZoom(value) {
        this.optionalAttributes.panZoom = value;
        return this;
    }
    
    setRootCode(value) {
        this.optionalAttributes.rootCode = value;
        return this;
    }
    
    //데이터팁 보여줄지 여부 설정
    setShowDataTips(flag = true) {
        this.optionalAttributes.showDataTips = flag;
        return this;
    }
    
    //MapChart dataTipAlpha 설정
    setDataTipAlpha(value=1) {
        this.optionalAttributes.dataTipAlpha = value;
        return this;
    }

    setDataTipBorderColor(value) {
        this.optionalAttributes.dataTipBorderColor = value;
        return this;
    }

    setDataTipColor(value) {
        this.optionalAttributes.dataTipColor = value;
        return this;
    }

    setDataTipFill(value) {
        this.optionalAttributes.dataTipFill = value;
        return this;
    }

    setFontFamily(value) {
        this.optionalAttributes.fontFamily = value;
        return this;
    }

    setFontSize(value) {
        this.optionalAttributes.fontSize = value;
        return this;
    }

    setFontStyle(value) {
        this.optionalAttributes.fontStyle = value;
        return this;
    }

    setFontWeight(value) {
        this.optionalAttributes.fontWeight = value;
        return this;
    }

    setBackToMapJsFunction(value) {
        this.optionalAttributes.backToMapJsFunction = value;
        return this;
    }

    //MapSeries 설정
    setMapSeries(callback) {
        callback(this.mapSeries);
        return this;
    }

    //Series 추가
    addSeries(callback, seriesType, id) {
        const series = new Series(seriesType, id);
        callback(series);
        this.seriesList.push(series);
        return this;
    }

    //Series 삭제
    removeSeries(seriesType) {
        this.seriesList = this.seriesList.filter(series => series.seriesType !== seriesType);
    }

    //Series 검색
    searchSeries(seriesType) {
        return this.seriesList.find(series => series.seriesType === seriesType);
    }

    build() {
        // this.mapSeries = this.mapSeries.build();
        this.seriesList = this.seriesList.map(series => series.build());
        return this;
    }

    //최종 xml을 만드는 함수
    createXML(xmlDoc) {
        const mapChartElement = xmlDoc.createElement("MapChart");
        const basicSeriesElement = xmlDoc.createElement("series");
        Object.entries(this.optionalAttributes).forEach(([attributeName, attributeValue]) => {
            if (attributeValue !== null && attributeValue !== undefined) {
                mapChartElement.setAttribute(attributeName, attributeValue);
            }
        });

        // Series XML 추가
        this.seriesList.forEach(series=> {
            const seriesXML = series.createXML(xmlDoc);
            basicSeriesElement.appendChild(seriesXML);
        });

        mapChartElement.appendChild(basicSeriesElement);
        return mapChartElement;
    }
}

