/**
 * Layout 설정 파일
 */

class Layout {
    constructor() {
        this.mapChart = new MapChart(); // MapChart 객체 포함
    }

    setMapChart(callback) {
        callback(this.mapChart);
        return this;
    }

    build() {
        this.mapChart = this.mapChart.build();
        return this;
    }

    //최종 xml을 만드는 함수
    createXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);
        const mapChartElement = this.mapChart.createXML(xmlDoc);
        const serializer = new XMLSerializer();
        return `<?xml version="1.0" encoding="utf-8"?>
                <rMateMapChart>
                    ${serializer.serializeToString(mapChartElement)}
                </rMateMapChart>
        `
        
    }
}


