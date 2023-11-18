export interface Agent {
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
  cc: number;
  ccSuper: number;
  mobileShare: number;
  cshare: number;
  cshareSuper: number;
  currentLimit: number;
  icCheck: boolean;
  icShare: number;
  icShareSuper: number;
  mc: number;
  mcSuper: number;
  sc: number;
  scSuper: number;
  share: number;
  shareStatus: boolean;
  shareSuper: number;
  reset: boolean;
  subId: number;
  superId: number;
}
export interface AgentResponseData{
  data:{
    content: Agent[];
    length: number;
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
    pageable: {
      sort: any; // You can define a more specific type for 'sort' if needed
      offset: number;
      pageNumber: number;
      pageSize: number;
      unpaged: boolean;
    };
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
  }
}
export interface LimitData {
  name:string;
  code:string;
  data: AgentResponseData;
}

export interface AgentSuper{
  id:string;
  data:Agent
}




