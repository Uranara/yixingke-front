

// 无人机执照类型枚举（民航规范）

export enum LicenseTypeEnum {
    VLOS = 'VLOS',
    BVLOS = 'BVLOS',
    INSTRUCTOR = 'INSTRUCTOR',
}

// 单独建立展示映射（给Swagger/前端展示）
export const LicenseTypeLabel: Record<LicenseTypeEnum, string> = {
    [LicenseTypeEnum.VLOS]: '视距内驾驶员',
    [LicenseTypeEnum.BVLOS]: '超视距驾驶员',
    [LicenseTypeEnum.INSTRUCTOR]: '教员',
};


interface PilotProfileDto {
    realName: string;
    idCard: string;
    caacLicenseNo?: string;
    licenseType?: LicenseTypeEnum;
    licenseExpiryDate?: string;
}

export const mockPilotProfileList: PilotProfileDto[] = [
    {
        realName: "陈雨桐",
        idCard: "330106199504122436",
        caacLicenseNo: "2024‑05‑87651",
        licenseType: LicenseTypeEnum.BVLOS,
        licenseExpiryDate: "2030‑05‑20"
    },
    {
        realName: "林浩宇",
        idCard: "310101199808153712",
        caacLicenseNo: "2023‑11‑45123",
        licenseType: LicenseTypeEnum.INSTRUCTOR,
        licenseExpiryDate: "2029‑11‑08"
    },
    {
        realName: "苏晓静",
        idCard: "440104200002281527",
        caacLicenseNo: "2025‑02‑78945",
        licenseType: LicenseTypeEnum.VLOS,
        licenseExpiryDate: "2031‑02‑15"
    },
    {
        realName: "马泽远",
        idCard: "510107199912034689",
        caacLicenseNo: "2022‑08‑13579",
        licenseType: LicenseTypeEnum.BVLOS,
        licenseExpiryDate: "2028‑08‑22"
    },
    {
        realName: "黄思琪",
        idCard: "320102200106172341",
        caacLicenseNo: undefined,
        licenseType: LicenseTypeEnum.BVLOS,
        licenseExpiryDate: undefined
    },
    {
        realName: "周俊峰",
        idCard: "330205199709256734",
        caacLicenseNo: "2024‑03‑24680",
        licenseType: LicenseTypeEnum.VLOS,
        licenseExpiryDate: "2030‑03‑10"
    },
    {
        realName: "吴曼妮",
        idCard: "430102199607081246",
        caacLicenseNo: "2023‑06‑97531",
        licenseType: LicenseTypeEnum.INSTRUCTOR,
        licenseExpiryDate: "2029‑06‑30"
    },
    {
        realName: "郑子昂",
        idCard: "350104200211115428",
        caacLicenseNo: undefined,
        licenseType:LicenseTypeEnum.VLOS,
        licenseExpiryDate: undefined
    }
];