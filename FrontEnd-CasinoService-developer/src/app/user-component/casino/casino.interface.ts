export interface Position {
  id: number;
  client: string;
  eventId: number;
  player: string;
  rate: number;
  amount: number;
  date: string;
}
export interface Ledger {
  id: number;
  SNo: number;
  dateTime: string;
  gameType: string;
  plusMinus: string;
}
export const ledgerData:Ledger[]=
[
  {
    "id": 1,
    "SNo": 101,
    "dateTime": "2023-09-15T14:30:00Z",
    "gameType": "Chess",
    "plusMinus": "+5"
  },
  {
    "id": 2,
    "SNo": 102,
    "dateTime": "2023-09-16T15:00:00Z",
    "gameType": "Football",
    "plusMinus": "-3"
  },
  {
    "id": 3,
    "SNo": 103,
    "dateTime": "2023-09-17T14:45:00Z",
    "gameType": "Basketball",
    "plusMinus": "+8"
  },
  // Add more entries here...
  {
    "id": 20,
    "SNo": 120,
    "dateTime": "2023-09-30T13:30:00Z",
    "gameType": "Tennis",
    "plusMinus": "-2"
  }
]

