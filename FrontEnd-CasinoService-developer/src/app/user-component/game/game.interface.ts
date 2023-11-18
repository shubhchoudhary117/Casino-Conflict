// Define the interface for sportDetails
export interface SportDetails {
  id: number;
  SINo: string;
  code: string;
  name: string;
  dateTime: string; // Assuming dateTime is in string format
  matchType: string;
}
export interface Team{
  Team:string;
  Khai:number;
  Lagai:number;
  plusMinus:number;
}
export interface Session{
  Session:string;
  Not:number;
  Yes:number;
}
export interface MatchPosition{
  id:string;
  Rate:string
  Amount:number;
  Mode:string;
  Team:string;
  Client:string;
  TeamA:string;
  TeamB:string;

}
// Create a sample JSON data for sportDetails
export const sportDetailsData: SportDetails[] = [
  {
    id: 1,
    SINo: "SIN001",
    code: "CRK1",
    name: "Cricket",
    dateTime: "2023-09-07T14:30:00",
    matchType: "T20",
  },
  {
    id: 2,
    SINo: "SIN002",
    code: "FBL1",
    name: "Football",
    dateTime: "2023-09-08T16:00:00",
    matchType: "Friendly",
  },
  // Add more sportDetails as needed
];
export const teamDetailsData: Team[] = [
  {
    Team: "ENGLAND",
    Khai: 0,
    Lagai: 0,
    plusMinus: 0,
  },
  {
    Team: "NewZeland",
    Khai: 0,
    Lagai: 0,
    plusMinus: 0,
  }
  // Add more sportDetails as needed
];
export const  SessionDetailsData:Session[]=[
  {
    Session: "abc",
    Yes: 0,
    Not: 0,
  },
  {
    Session: "def",
    Yes: 0,
    Not: 0,
  }
]
export interface CompleteGame {
  id: number;
  SNo: number;
  code: string;
  name: string;
  dateTime: string;
  matchType: string;
  declare: string;
  wonBy: string;
  plusMinus: string;
}
export const completeGameData = [
  {
    "id": 1,
    "SNo": 101,
    "code": "MATCH001",
    "name": "BANGLADESH vs SRI LANKA",
    "dateTime": "2023-09-15T14:30:00Z",
    "matchType": "Cricket",
    "declare": "Complete",
    "wonBy": "BANGLADESH",
    "plusMinus": "+50"
  },
  {
    "id": 2,
    "SNo": 102,
    "code": "MATCH002",
    "name": "INDIA vs AUSTRALIA",
    "dateTime": "2023-09-16T15:00:00Z",
    "matchType": "Cricket",
    "declare": "Complete",
    "wonBy": "INDIA",
    "plusMinus": "+45"
  },
  {
    "id": 3,
    "SNo": 103,
    "code": "MATCH003",
    "name": "ENGLAND vs NEW ZEALAND",
    "dateTime": "2023-09-17T14:45:00Z",
    "matchType": "Cricket",
    "declare": "Complete",
    "wonBy": "ENGLAND",
    "plusMinus": "+55"
  },
  // Add more entries here...
  {
    "id": 20,
    "SNo": 120,
    "code": "MATCH020",
    "name": "PAKISTAN vs WEST INDIES",
    "dateTime": "2023-09-30T13:30:00Z",
    "matchType": "Cricket",
    "declare": "Complete",
    "wonBy": "PAKISTAN",
    "plusMinus": "+60"
  }
]


// You can now use the sportDetailsData array as your JSON data.
