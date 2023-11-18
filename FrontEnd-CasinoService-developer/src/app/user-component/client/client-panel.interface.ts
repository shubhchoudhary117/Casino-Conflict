export interface ClientAgentMaster {
  name: string; // Field with Length and Pattern annotations
  reference: string; // Field with Length and Pattern annotations
  password: string; // Field with Length annotation
  contactNo: string; // Field with Length and Pattern annotations
  currentLimit: number; // Field with Min annotation
  share: number; // Field with Min and Max annotations
  cShare: number; // Field with Min and Max annotations
  mobileShare: number; // Field with Min and Max annotations
  mc: number; // Field with Min and Max annotations
  sc: number; // Field with Min and Max annotations
  cc: number; // Field with Min and Max annotations
  casinoCheck: boolean;
}

export interface Pageable {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}
export interface Data {
  content: clientDetails[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface clientDetails {
  _id: number;
  code: string;
  name: string;
  reference: string;
  contactNo: string;
  password: string;
  passwordHash: string;
  joiningDate: Date;
  status: boolean;
  casinoCheck: boolean;
  mc: number;
  sc: number;
  cc: number;
  share: number;
  mobileShare: number;
  icShare: number;
  currentLimit: number;
  subId: number;
  mcSub: number;
  scSub: number;
  ccSub: number;
  shareSub: number;
  msSub: number;
  icShareSub: number;
  reset: boolean;
  cshare: number;
  cshareSub: number;
}
export interface ClientApiDataResponse {
  name: string;
  code: string;
  data: Data;
  message:string
}
export interface SingleApiRes{
  id:number
  data:Provider
}





export interface Client {
  id: number;
  code: string;
  name: string;
  reference: string;
  contactNo: string;
  password: string;
  passwordHash: string;
  joiningDate: string;
  status: boolean;
  casinoCheck: boolean;
  icCheck: boolean;
  mc: number;
  sc: number;
  cc: number;
  currentLimit: number;
  usedLimit: number;
  mobAppCharge: number;
  rateDifference: number;
  agentId: number;
  mcAgent: number;
  scAgent: number;
  ccAgent: number;
  shareAgent: number;
  icShare: number;
  superId: number;
  masterId: number;
  subId: number;
  reset: boolean;
  minusCoin: number,
  providerId:string;
  cshareAgent: number;
}

export interface Provider {
  data:{

    id: number;
    code: string;
    name: string;
    reference: string;
    contactNo: string;
    password: string;
    passwordHash: string;
    joiningDate: string;
    status: boolean;
    shareStatus: boolean;
    casinoCheck: boolean;
    icCheck: boolean;
    mc: number;
    sc: number;
    cc: number;
    share: number;
    mobileShare: number;
    icShare: number;
    currentLimit: number;
    superId: number;
    mcSuper: number;
    scSuper: number;
    ccSuper: number;
    shareSuper: number;
    msSuper: number;
    icShareSuper: number;
    masterId: number;
    subId: number;
    reset: boolean;
    cshareSuper: number;
    cshare: number;
  }
}

export interface clientAndProviderData {
  client: Client;
  provider:Provider
}
