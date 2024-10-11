/**
 * Series 설정 파일
 */

class Series {
    constructor(seriesType, id) {
        this.seriesType = seriesType;
        this.optionalAttributes = {
            id: id,
            type: null,
            dataField: null,
            alpha: null,                        //(MapSeries)투명도 값을 결정 - 기본값 : 1
            areaCodeField: null,                //(MapSeries)맵 데이터에서 적용할 지역코드 필드명 - 기본값 : code
            areaDataCode: null,                 //(MapSeries)맵 데이터에서 개별로 적용할 지역코드 필드명 - 기본값 : code
            enabledField: null,                 //(MapSeries)지역 이미지 사용자 선택가능 여부를 지정하는 data provider의 필드명
            goUpButtonOnly: null,               //(MapSeries)DrillDown 하위 맵에서 버튼으로만 상위맵으로 이동할 수 있도록 지정 여부 - 기본값 : false
            hideOverSizeLabel: null,            //(MapSeries)라벨의 크기가 지역이미지보타 큰 경우 라벨을 숨길지 여부 - 기본값 : true
            interactive: null,                  //(MapSeries)사용자 마우스 롤오버, 클릭에 반응할지 여부 - 기본값 : true
            labelCallOut: null,                 //(MapSeries)label callOut 사용 유무 - 기본값 : false
            labelCallOutColor: null,            //(MapSeries)label callOut 라벨 색상 - 기본값 : #000000
            labelCallOutCurveGap: null,         //(MapSeries)callOut 라벨이 꺾이는 거리 - 기본값 : 5
            labelCallOutLineColor: null,        //(MapSeries)label callOut 라인 색상 - 기본값 : #000000
            labelCallOutLineWidth: null,        //(MapSeries)label call 라인 굵기 - 기본값 : 1,
            labelCallOutPolicy: null,           //(MapSeries)callOut 정렬 정책 - 기본값 : "middle"
            labelColorField: null,              //(MapSeries)라벨의 색상을 표현하는 데이터 필드값
            labelField: null,                   //(MapSeries)지역 이미지의 라벨을 지정하는 data provider의 필드명
            labelJsFunction: null,              //(MapSeries)라벨(지역명)을 사용자 정의할 함수를 지정합니다.
            localFillByRange: null,             //(MapSeries)최대 최소 값에 맞춰진 색상 범위 값 설정
            localFillJsFunction: null,          //(MapSeries)지역 색의 사용자 정의 함수 설정
            mapColorField: null,                //(MapSeries)맵의 색상을 표현하는 데이터 필드값
            pattern: null,                      //(MapSeries)지역에 표시할 패턴을 지정, localFill을 사용할 경우 localFill 색상으로 덮어집니다.
            rangeLegendDataField: null,         //(MapSeries)localFillByRange의 기준 값이 되는 데이터 필드값
            rollOverFilter: null,               //(MapSeries)롤 오버시 필터 적용 유무 - 기본값 : false
            rollOverJsFunction: null,           //(MapSeries)롤 오버시 사용자 정의 함수 설정
            rollOverLineCallOutColor: null,     //(MapSeries)콜 아웃 롤 오버시 라인 색상 - 기본값 : #000000
            selectionMarking: null,             //(MapSeries)이미지를 클릭할 경우 해당 이미지에 표시하는 방식 지정 - 기본값 : "line-빗금", "blink-깜빡임" ,"color-스타일의 selectionFill 속성의 컬러를 표시", "none-아무표시없음"
            showLabelField: null,               //(MapSeries)라벨 유무를 표현하는 데이터 필드값(데이터는 true/false로 구분)
            strokeJsFunction: null,             //(MapSeries)지역외곽선 색을 사용자 정의 함수 설정
            styleName: null,                    //(MapSeries)스타일 이름으로 스타일 지정
            useGis: null,                       //(MapSeries)GIS 데이터 사용 유무 - 기본값 : false
            useHandCursor: null,                //(MapSeries)마우스 오버시 손모양 커서 표시 여부 - 기본값 : false
            visible: null,                      //(MapSeries)가시화 할지 여부를 나타냅니다. - 기본값 : false
            radiusField: null,
            selectionMarkLineColor: null,
            maxRadius: null,
            minRadius: null,
            color: null,
            hideOverSizeLabel: null,
            fontSize: null,
            fontWeight: null,
            rangeLegendDataField: null,
            itemRenderer: null,
            labelPosition: null,
            displayName: null,
            dataTipFill: null,
            dataTipBorderColor: null,
            dataTipColor: null,
            dataTipAlpha: null,
            verticalCenterGapField: null,
            horizontalCenterGapField: null,
            sparkWidth: null,
            sparkHeight: null,
            showDataTips: null,
            startAngle: null,
            selectionMarkLineGap: null,
            fromCodeField: null,
            toCodeField: null,
            weight: null,
            dashed: null,
            curveField: null,
            stopsCodeFiled : null,
            imgMovingSpeed: null,
            showLabel: null,
            imageUrlField: null,
            lineColor: null,
            marker: null,
            rewindRouteImg : null,
            rotateField: null,
            localFill: null,
            adjustedRadius: null,
            fill: null,
            labelPostion: null,
            labelPositionField: null,
            fontWeight: null,
        };
        this.optionalChildNode = {
            filters: {},                      //(MapSeries)시리즈에 적용할 필터를 설정, DropShadowFilter, GlowFilter가 가능하며 여러 개를 동시에 적용할 수 있습니다.
            labelFilters: {},                 //(MapSeries)시리즈의 라벨에 적용할 필터를 설정합니다. DropShadowFilder, GlowFilter가 가능하며 여러 개를 동시에 적용할 수 있습니다.
            showDataEffect: {},               //(MapSeries)지역 이미지가 표시될 때 적용할 이펙트
            fill: {},
            stroke : {},
            rollOverStroke: {},
            rollOverFill: {},
            localFill: {},
            selectionFill: {},
        }
    }
    
    setType(value) {
    	this.optionalAttributes.type = value;
    	return this;
    }
    
    setDataField(value) {
    	this.optionalAttributes.dataField = value;
    	return this;
    }

    setAlpha(value) {
        this.optionalAttributes.alpha = value;
        return this;
    }

    setAreaCodeField(value) {
        this.optionalAttributes.areaCodeField = value;
        return this;
    }

    setAreaDataCode(value) {
        this.optionalAttributes.areaDataCode = value;
        return this;
    }

    setEnabledField(value) {
        this.optionalAttributes.enabledField = value;
        return this;
    }

    setGoUpButtonOnly(value) {
        this.optionalAttributes.goUpButtonOnly = value;
        return this;
    }
    
    setHideOverSizeLabel(value) {
        this.optionalAttributes.hideOverSizeLabel = value;
        return this;
    }
    
    setInteractive(flag = true) {
        this.optionalAttributes.interactive = flag;
        return this;
    }
    
    setLabelCallOut(value) {
        this.optionalAttributes.labelCallOut = value;
        return this;
    }
    
    setLabelCallOutColor(value) {
        this.optionalAttributes.labelCallOutColor = value;
        return this;
    }

    setLabelCallOutCurveGap(value) {
        this.optionalAttributes.labelCallOutCurveGap = value;
        return this;
    }

    setLabelCallOutLineColor(value) {
        this.optionalAttributes.labelCallOutLineColor = value;
        return this;
    }

    setLabelCallOutLineWidth(value) {
        this.optionalAttributes.labelCallOutLineWidth = value;
        return this;
    }

    setLabelCallOutPolicy(value) {
        this.optionalAttributes.labelCallOutPolicy = value;
        return this;
    }

    setLabelColorField(value) {
        this.optionalAttributes.labelColorField = value;
        return this;
    }
    
    setLabelField(value) {
        this.optionalAttributes.labelField = value;
        return this;
    }

    setLabelJsFunction(value) {
        this.optionalAttributes.labelJsFunction = value;
        return this;
    }

    setLocalFillByRange(value) {
        this.optionalAttributes.localFillByRange = value;
        return this;
    }

    setLocalFillJsFunction(value) {
        this.optionalAttributes.localFillJsFunction = value;
        return this;
    }


    setMapColorField(value) {
        this.optionalAttributes.mapColorField = value;
        return this;
    }

    setPattern(value) {
        this.optionalAttributes.pattern = value;
        return this;
    }

    setRangeLegendDataField(value) {
        this.optionalAttributes.rangeLegendDataField = value;
        return this;
    }

    setRollOverFilter(value) {
        this.optionalAttributes.rollOverFilter = value;
        return this;
    }

    setRollOverJsFunction(value) {
        this.optionalAttributes.rollOverJsFunction = value;
        return this;
    }

    setRollOverLineCallOutColor(value) {
        this.optionalAttributes.rollOverLineCallOutColor = value;
        return this;
    }

    setSelectionMarking(value) {
        this.optionalAttributes.selectionMarking = value;
        return this;
    }

    setShowLabelField(value) {
        this.optionalAttributes.showLabelField = value;
        return this;
    }

    setStrokeJsFunction(value) {
        this.optionalAttributes.strokeJsFunction = value;
        return this;
    }

    setStyleName(value) {
        this.optionalAttributes.styleName = value;
        return this;
    }

    setUseGis(value) {
        this.optionalAttributes.useGis = value;
        return this;
    }

    setUseHandCursor(value) {
        this.optionalAttributes.useHandCursor = value;
        return this;
    }

    setVisible(value) {
        this.optionalAttributes.visible = value;
        return this;
    }

    setRadiusField(value) {
        this.optionalAttributes.radiusField = value;
        return this;
    }

    setMaxRadius(value) {
        this.optionalAttributes.maxRadius = value;
        return this;
    }

    setMinRadius(value) {
        this.optionalAttributes.minRadius = value;
        return this;
    }

    setVerticalCenterGapField(value) {
        this.optionalAttributes.verticalCenterGapField = value;
        return this;
    }

    setHorizontalCenterGapField(value) {
        this.optionalAttributes.horizontalCenterGapField = value;
        return this;
    }

    setColor(color = "#777777") {
        this.optionalAttributes.color = color;
        return this;
    }

    setLabelPosition(position) {
        this.optionalAttributes.labelPosition = position;
        return this;
    }

    setDisplayName(name = "Map Series") {
        this.optionalAttributes.displayName = name;
        return this;
    }

    setUseGis(flag = "true") {
        this.optionalAttributes.useGis = flag;
        return this;
    }

    setDataTipFill(color = "#ff007e") {
        this.optionalAttributes.dataTipFill = color;
        return this;
    }

    setDataTipBorderColor(color = "#ff00ee") {
        this.optionalAttributes.dataTipBorderColor = color;
        return this;
    }

    setDataTipColor(color = "#ffffff") {
        this.optionalAttributes.dataTipColor = color;
        return this;
    }

    setDataTipAlpha(value = "1") {
        this.optionalAttributes.dataTipAlpha = value;
        return this;
    }

    setHideOverSizeLabel(flag = "false") {
        this.optionalAttributes.hideOverSizeLabel = flag;
        return this;
    }

    setItemRenderer(value) {
        this.optionalAttributes.itemRenderer = value;
        return this;
    }
    
    setHideOverSizeLabel(value) {
    	this.optionalAttributes.hideOverSizeLabel = value;
    	return this;
    }
    
    setSparkWidth(value) {
    	this.optionalAttributes.sparkWidth = value;
    	return this;
    }
    
    setSparkHeight(value) {
    	this.optionalAttributes.sparkHeight = value;
    	return this;
    }
    
    setShowDataTips(value) {
    	this.optionalAttributes.showDataTips = value;
    	return this;
    }
    
    setStartAngle(value) {
    	this.optionalAttributes.startAngle = value;
    	return this;
    }
    
    setSelectionMarkLineGap(value) {
    	this.optionalAttributes.selectionMarkLineGap = value;
    	return this;
    }
    
    setFromCodeField(value) {
    	this.optionalAttributes.fromCodeField = value;
    	return this;
    }
    
    setToCodeField(value) {
    	this.optionalAttributes.toCodeField = value;
    	return this;
    }
    
    setWeight(value) {
    	this.optionalAttributes.weight = value;
    	return this;
    }
    
    setDashed(value) {
    	this.optionalAttributes.dashed = value;
    	return this;
    }
    
    setCurveField(value) {
    	this.optionalAttributes.curveField = value;
    	return this;
    }
    
    setStopsCodeFiled(value) {
    	this.optionalAttributes.stopsCodeFiled = value;
    	return this;
    }
    
    setImgMovingSpeed(value) {
    	this.optionalAttributes.imgMovingSpeed = value;
    	return this;
    }
    
    setShowLabel(value) {
    	this.optionalAttributes.showLabel = value;
    	return this;
    }
    
    setImageUrlField(value) {
    	this.optionalAttributes.imageUrlField = value;
    	return this;
    }
    
    setLineColor(value) {
    	this.optionalAttributes.lineColor = value;
    	return this;
    }
    
    setMarker(value) {
    	this.optionalAttributes.marker = value;
    	return this;
    }
    
    setRewindRouteImg(value) {
    	this.optionalAttributes.rewindRouteImg = value;
    	return this;
    }
    
    setRotateField(value) {
    	this.optionalAttributes.rotateField = value;
    	return this;
    }
    
    setSelectionMarkLineColor(value) {
    	this.optionalAttributes.selectionMarkLineColor = value;
    	return this;
    }
    
    setLocalFillAttributes(value) {
    	this.optionalAttributes.localFill = value;
    	return this;
    }
    
    setAdjustedRadius(value) {
    	this.optionalAttributes.adjustedRadius = value;
    	return this;
    }
    
    setFill(value) {
    	this.optionalAttributes.fill = value;
    	return this;
    }
    
    setLabelPostion(value) {
    	this.optionalAttributes.labelPostion = value;
    	return this;
    }
    
    setLabelPositionField(value) {
    	this.optionalAttributes.labelPositionField = value;
    	return this;
    }
    
    setFontWeight(value) {
    	this.optionalAttributes.fontWeight = value;
    	return this;
    }
    
    
    

    /* optionalChildNode 설정 */
    
    setFilter({kind = "DropShadowFilter", distance="5", angle="90", color="#888888", blur="0"} = {}) {
    	if (!this.optionalChildNode.filters[kind]) {
            this.optionalChildNode.filters[kind] = {};
        }
    	this.optionalChildNode.filters[kind] = {
    			distance,
    			angle,
    			color,
    			blur
    	}
    	return this;
    }

    setStroke({ kind = "Stroke", color = "#CAD7E0", weight = "0.5", alpha = "1" } = {}) {
        if (!this.optionalChildNode.stroke[kind]) {
            this.optionalChildNode.stroke[kind] = {};
        }
        
    
        // 기존 값이 있으면 유지하고, 새 값이 들어오면 덮어씀
        this.optionalChildNode.stroke[kind] = {
            color: color !== "#CAD7E0" ? color : this.optionalChildNode.stroke[kind].color || "#CAD7E0",
            weight: weight !== "0.5" ? weight : this.optionalChildNode.stroke[kind].weight || "0.5",
            alpha: alpha !== "1" ? alpha : this.optionalChildNode.stroke[kind].alpha || "1"
        };
        return this;
    }

    setShowDataEffect({kind = "SeriesInterpolate", duration="1000"} = {}) {
        this.optionalChildNode.showDataEffect[kind] = {
            duration
        }
        return this;
    }

    setRollOverStroke({ kind = "Stroke", color = "#CAD7E0", weight = "0.5", alpha = "1" } = {}) {
        if (!this.optionalChildNode.rollOverStroke[kind]) {
            this.optionalChildNode.rollOverStroke[kind] = {};
        }

        this.optionalChildNode.rollOverStroke[kind] = {
            color: color !== "#CAD7E0" ? color : this.optionalChildNode.rollOverStroke[kind].color || "#CAD7E0",
            weight: weight !== "0.5" ? weight : this.optionalChildNode.rollOverStroke[kind].weight || "0.5",
            alpha: alpha !== "1" ? alpha : this.optionalChildNode.rollOverStroke[kind].alpha || "1"
        };
        
        return this;
    }

    setRollOverFill({ kind = "SolidColor", color = "#CAD7E0", weight = "0.5", alpha = "1" } = {}) {
        this.optionalChildNode.rollOverFill[kind] = {
            color,
        }
        return this;
    }

    setLocalFill({ kind = "SolidColor", color = "#ff00ff"} = {}) {
        this.optionalChildNode.localFill[kind] = {
            color
        }
        return this;
    }

    setFillChild({ kind = "Stroke", color = "#CAD7E0"} = {}) {
        this.optionalChildNode.fill[kind] = {
            color
        }
        return this;
    }
    
    setSelectionFill({ kind = "SolidColor", color = "#ff00ff"} = {}) {
    	this.optionalChildNode.selectionFill[kind] = {
                color
            }
        return this;
    }

    build() {
        return this;
    }

    //최종 xml을 만드는 함수
    createXML(xmlDoc) {
        const mapSeriesElement = xmlDoc.createElement(this.seriesType);

        //Series 속성 설정
        Object.entries(this.optionalAttributes).forEach(([attributeName, attributeValue]) => {
            if (attributeValue !== null && attributeValue !== undefined) {
                mapSeriesElement.setAttribute(attributeName, attributeValue);
            }
        });

        //Series 자식 노드 설정
        Object.entries(this.optionalChildNode).forEach(([childName, childValue]) => {
            if(childValue !== null && childValue !== undefined) {
                Object.entries(this.optionalChildNode[childName]).forEach(([name, value]) => {
                    if(value !== null && value !== undefined) {
                        const node = xmlDoc.createElement(childName);
                        const childNode = xmlDoc.createElement(name);
                        Object.entries(value).forEach(([n, v]) => {childNode.setAttribute(n,v)});
                        node.appendChild(childNode);
                        mapSeriesElement.appendChild(node);
                    }
                });
            }
        });


        return mapSeriesElement;
    }
}