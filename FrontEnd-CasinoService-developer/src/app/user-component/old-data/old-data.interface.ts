export interface OldSportGame {
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
export const oldSportGameData = [
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
