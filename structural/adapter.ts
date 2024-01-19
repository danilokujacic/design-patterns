

interface ClientInterface {
    displayDataAsXML();
    displayChartAsXML();
}

class Application implements ClientInterface {
    displayChartAsXML() {
        // XML CHART
    }
    displayDataAsXML() {
        // XML DATA
    }
}

class ThirdPartyService {
    displayChartAsJSON() {
        // JSON CHART
    }
    displayDataAsJSON() {
        // JSON DATA
    }
}

const convertXMLToJSON = () => {}

class ThirdPartyServiceAdapter implements ClientInterface {
    private  service: ThirdPartyService;

    constructor() {
        this.service = new ThirdPartyService();
    }

    displayChartAsXML() {
        const jsonData = convertXMLToJSON();
        this.service.displayChartAsJSON()
    }
    displayDataAsXML() {
        const jsonData = convertXMLToJSON();
        this.service.displayDataAsJSON()
    }
}

// kada dva servisa nemaju podudarajuc interfejs ili logika iz jednog servia ne moze da se implementira na drugi
// Adapter uvijek uzima abstrakciju ili interfejs od clienta (aplikacija) i konvertuje kod clienta da bude podudarajuc servisu