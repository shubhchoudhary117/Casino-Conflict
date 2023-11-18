export interface ProviderData {
  code:any;
  name: string; // Field with Length and Pattern annotations
  reference: string; // Field with Length and Pattern annotations
  password: string; // Field with Length annotation
  contactNo: string; // Field with Length and Pattern annotations
  currentLimit: number; // Field with Min annotation
  share: string; // Field with Min and Max annotations
  cShare: string; // Field with Min and Max annotations
  mobileShare: number; // Field with Min and Max annotations
  mc: number; // Field with Min and Max annotations
  sc: number; // Field with Min and Max annotations
  cc: number; // Field with Min and Max annotations
  casinoCheck: boolean;
  icShare:number;
  errors:any;
}

export interface MasterAgentDetails {
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
  content: MasterAgentDetails[];
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

export interface ProviderPannelApiDataResponse {
  name: string;
  code: string;
  data: Data;
}
export interface SingleApiRes {
  id:string,
  status:boolean,
  data:ProviderData
}
export interface LimitMasterAgent{
  _id: number;
  code: string;
  name: string;
  currentLimit: number;
  subId: number;
}

export interface MasterLimit{
  data: {
    content: LimitMasterAgent[];
    pageable: {
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    totalElements:number;
    // Other properties
  };
}
