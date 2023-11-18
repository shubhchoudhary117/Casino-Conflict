export interface SuperAgent {
  code:string;
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
  shareMaster:number;
  msMaster:number;
  cShareMaster:number;
  casinoCheck: boolean;
  shareStatus:boolean;
}

export interface SuperAgentDetails {
  id: number;
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
export interface Data {
  content: SuperAgentDetails[];
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

export interface SuperApiDataResponse {
  name: string;
  code: string;
  data: Data;
}
export interface SingleApiRes{
  id:any
  data:MasterSuper
}
export interface MasterSuper {

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
  masterId:number;

}

