export interface Ledger{
    Date: string; // Assuming the date is in string format
    CollectionName: string;
    Debit: number;
    Credit: number;
    Balance: number;
    Type: string;
    Description: string;
}

export const ledgerDummyData: Ledger[] = [
  {
    Date: '2023-09-02 00:33:19.0',
    CollectionName: 'CA1 CASH',
    Debit: 51.00,
    Credit: 0.00,
    Balance: 7812.58,
    Type: 'SOUTH AFRICA V AUSTRALIA',
    Description: 'SOUTH AFRICA V AUSTRALIA',
  },
  {
    Date: '2023-09-01 14:20:10.0',
    CollectionName: 'CA2 CASH',
    Debit: 20.50,
    Credit: 0.00,
    Balance: 7792.08,
    Type: 'Online Purchase',
    Description: 'Online shopping at XYZ Store',
  },
  {
    Date: '2023-08-31 09:45:33.0',
    CollectionName: 'CA1 CASH',
    Debit: 100.00,
    Credit: 0.00,
    Balance: 7692.08,
    Type: 'Withdrawal',
    Description: 'ATM withdrawal',
  },
  {
    Date: '2023-08-30 17:55:22.0',
    CollectionName: 'CA3 CASH',
    Debit: 0.00,
    Credit: 75.25,
    Balance: 7767.33,
    Type: 'Deposit',
    Description: 'Salary deposit',
  },
  {
    Date: '2023-08-29 08:10:15.0',
    CollectionName: 'CA1 CASH',
    Debit: 45.75,
    Credit: 0.00,
    Balance: 7721.58,
    Type: 'Grocery Shopping',
    Description: 'Purchase at ABC Mart',
  },
  {
    Date: '2023-08-28 16:30:45.0',
    CollectionName: 'CA2 CASH',
    Debit: 75.00,
    Credit: 0.00,
    Balance: 7646.58,
    Type: 'Restaurant Bill',
    Description: 'Dinner at XYZ Restaurant',
  },
]


export interface ClientPlusMinus {
  id: number;
  name: string;
}

export const clientPlusMinusDummyData: ClientPlusMinus[] = [
  {
    id: 1,
    name: 'Event 1',
  },
  {
    id: 2,
    name: 'Event 2',
  },
  {
    id: 3,
    name: 'Event 3',
  },
  {
    id: 4,
    name: 'Event 4',
  },
  {
    id: 5,
    name: 'Event 5',
  },
  {
    id: 6,
    name: 'Event 6',
  },
  {
    id: 7,
    name: 'Event 7',
  },
  {
    id: 8,
    name: 'Event 8',
  }]


 export  interface Data {
    name: string;
    Contact: string;
    OpenBal: number;
    CurrBal: number;
    ClsBal: number;
  }

  export const DummyData: Data[] = [
    {
      name: 'C19440 BBC India',
      Contact: 'BBC India Contact Info',
      OpenBal: 0,
     CurrBal: 7466.0,
      ClsBal: 7466.0,
    },
    {
      name: 'C12345 XYZ Corp',
      Contact: 'XYZ Corp Contact Info',
      OpenBal: 1000,
     CurrBal: 500,
      ClsBal: 1500,
    },
    {
      name: 'C67890 ABC Ltd',
      Contact: 'ABC Ltd Contact Info',
      OpenBal: 20000,
     CurrBal: 18000,
      ClsBal: 38000,
    },
    {
      name: 'C54321 Acme Inc',
      Contact: 'Acme Inc Contact Info',
      OpenBal: 5000,
     CurrBal: 7000,
      ClsBal: 12000,
    },
    {
      name: 'C98765 Test Company',
      Contact: 'Test Company Contact Info',
      OpenBal: 1500,
     CurrBal: 2000,
      ClsBal: 3500,
    },
    {
      name: 'C11111 Example Co.',
      Contact: 'Example Co. Contact Info',
      OpenBal: 3000,
     CurrBal: 4000,
      ClsBal: 7000,
    },
    {
      name: 'C22222 Sample Corp',
      Contact: 'Sample Corp Contact Info',
      OpenBal: 7500,
     CurrBal: 6000,
      ClsBal: 13500,
    },
    {
      name: 'C33333 Demo Ltd',
      Contact: 'Demo Ltd Contact Info',
      OpenBal: 12000,
     CurrBal: 11000,
      ClsBal: 23000,
    },
    {
      name: 'C44444 NewCo Inc',
      Contact: 'NewCo Inc Contact Info',
      OpenBal: 8000,
     CurrBal: 9500,
      ClsBal: 17500,
    },
    {
      name: 'C55555 MegaCorp',
      Contact: 'MegaCorp Contact Info',
      OpenBal: 25000,
     CurrBal: 22000,
      ClsBal: 47000,
    },
  ];

