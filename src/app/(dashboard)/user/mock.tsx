
enum UserRole {
    ADMIN = "管理员",
    USER = "用户",
    PILOT = "飞行员",
    ENTERPRISE = "企业",
}

enum UserStatus {
    ACTIVE = "活跃",
    SUSPENDED = "暂停",
}

interface CreateUserDto {
    username: string;
    phone: string;
    birthDay?: string;
    password: string;
    role: UserRole;
    status?: UserStatus;
    isVerifiedPilot?: boolean;
    realName?: string | null;
}


// ============ 模拟假数据，完全适配 DTO 类型 ============
export const mockUserList: CreateUserDto[] = [
    {
        username: "张三",
        phone: "13800138000",
        birthDay: "2000-01-01",
        password: "Abc123",
        role: UserRole.ADMIN,
        status: UserStatus.ACTIVE,
        isVerifiedPilot: true,
        realName: "张三",
    },
    {
        username: "李四",
        phone: "13900139000",
        birthDay: "1995-05-20",
        password: "Def456",
        role: UserRole.PILOT,
        status: UserStatus.ACTIVE,
        isVerifiedPilot: true,
        realName: "李四",
    },
    {
        username: "约翰",
        phone: "13700137000",
        birthDay: undefined,
        password: "Ghi789",
        role: UserRole.ENTERPRISE,
        status: UserStatus.SUSPENDED,
        isVerifiedPilot: false,
        realName: null,
    },
    {
        username: "王五",
        phone: "13600136000",
        birthDay: "2002-11-11",
        password: "Jkl000",
        role: UserRole.USER,
        status: UserStatus.ACTIVE,
        isVerifiedPilot: false,
        realName: "王五",
    },
    {
        username: "陈雨桐",
        phone: "13600136001",
        birthDay: "1998-05-20",
        password: "Abc123",
        role: UserRole.USER,
        status: UserStatus.ACTIVE,
        isVerifiedPilot: true,
        realName: "陈雨桐",
    },
    {
        username: "林浩宇",
        phone: "13600136002",
        birthDay: "2000-08-15",
        password: "Def456",
        role: UserRole.PILOT,
        status: UserStatus.ACTIVE,
        isVerifiedPilot: true,
        realName: "林浩宇",
    },
    {
        username: "苏晓静",
        phone: "13600136003",
        birthDay: "2003-02-28",
        password: "Ghi789",
        role: UserRole.USER,
        status: UserStatus.SUSPENDED,
        isVerifiedPilot: false,
        realName: "苏晓静",
    },
    {
        username: "马泽远",
        phone: "13600136004",
        birthDay: "1999-12-03",
        password: "Jkl111",
        role: UserRole.ENTERPRISE,
        status: UserStatus.ACTIVE,
        isVerifiedPilot: false,
        realName: "马泽远",
    }

];