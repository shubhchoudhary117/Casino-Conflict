export interface AllUserData {
  allUsers: User[];
  reportTypes:ReportTypesData[];
}
export interface ReportTypesData {
  reportTypes: string[];
}
export interface User {
  id: number;
  name: string;
}
export interface Master {
  user:number;
  reportType:string;
  dateFrom:Date;
  dateTo:Date;
  forReport:string
}
export interface Super {
  user:number;
  reportType:string;
  dateFrom:Date;
  dateTo:Date;
  forReport:string
}

// export class Master {
//   id: number;
//   master: string;
//   type: string;
//   old:string;
//   new:string;
//   user:string;
//   data:Date;
//   ip:string;
// }

// agent.model.ts
export class Agent {
  id: number;
  master: string;
  type: string;
  old:string;
  new:string;
  user:string;
  data:Date;
  ip:string;
}

// super.model.ts
// export class Super {
//   id: number;
//   master: string;
//   type: string;
//   old:string;
//   new:string;
//   user:string;
//   data:Date;
//   ip:string;
// }

// client.model.ts
export class Client {
  id: number;
  master: string;
  type: string;
  old:string;
  new:string;
  user:string;
  data:Date;
  ip:string;
}
export interface AllMSACReportData {
  adminId: null;
  agentId: null;
  clientId: null;
  code: string;
  collectionId: null;
  dateTime: string;
  groupId: number;
  id: number;
  ipAddress: string;
  masterId: number;
  name: string;
  newValue: string;
  oldValue: string;
  reportType: string;
  subId: number;
  superId: null;
}
export interface AllMSACReport{
  data: {
    content: AllMSACReportData[]; // You can replace 'any' with a more specific type if available
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
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
    size: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    totalElements: number;
    totalPages: number;
  }

}
