export interface SubAdminModel {
    _id: number;
    code: string;
    name: string;
    contactNo: string;
    reference: string;
    joiningDate: string;
    password: string;
    passwordHash: string;
    status: boolean;
    casinoCheck: boolean;
    icCheck: boolean;
    currentLimit: number;
    mc: number;
    sc: number;
    cc: number;
    share: number;
    mobileShare: number;
    icShare: number;
    reset: boolean;
    limitUpdate: boolean;
    domainId: number;
    adminId: number;
    cshare: number;
}
