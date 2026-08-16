

interface PilotDeviceDto {
    deviceBrand: string;
    snCode:string;
    maxPayload?: number;
    maxWindResistance?: number

}


export const mockPilotDeviceList: PilotDeviceDto[] = [
    {
        deviceBrand: "大疆",
        snCode: "DJI20260721001",
        maxPayload: 5.2,
        maxWindResistance: 12
    },
    {
        deviceBrand: "极飞",
        snCode: "XAG20260512007",
        maxPayload: 22.5,
        maxWindResistance: 10
    },
    {
        deviceBrand: "道通",
        snCode: "AUT20260308013",
        maxPayload: 3.8,
        maxWindResistance: 14
    },
    {
        deviceBrand: "大疆",
        snCode: "DJI20260615022",
        maxPayload: 8.0,
        maxWindResistance: 13
    },
    {
        deviceBrand: "极飞",
        snCode: "XAG20260422031",
        maxPayload: 18.2,
        maxWindResistance: 9
    },
    {
        deviceBrand: "道通",
        snCode: "AUT20260217044",
        maxPayload: 4.5,
        maxWindResistance: 11
    },
    {
        deviceBrand: "飞米",
        snCode: "FIM20260801056",
        maxPayload: 2.1,
        maxWindResistance: 8
    },
    {
        deviceBrand: "大疆",
        snCode: "DJI20260129068",
        maxPayload: 10.6,
        maxWindResistance: 15
    }
];