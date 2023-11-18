import { Component, OnInit } from '@angular/core';
import { Ledger, ledgerDummyData } from '../../ledger/ledger.interface';

@Component({
  selector: 'app-old-ledger',
  templateUrl: './old-ledger.component.html',
  styleUrls: ['./old-ledger.component.scss']
})
export class OldLedgerComponent implements OnInit {
  isBodyLoading =false;
  data:Ledger[] = [];
  totalDebit;
  totalCredit;
  totalBalance;
  constructor() { }

  ngOnInit(): void {
    this.data = ledgerDummyData;
    this.totalDebit = this.data.reduce((accumulator, ledger) => {
      return accumulator + ledger.Debit;
    }, 0);

    // Calculate the total credit amount
    this.totalCredit = this.data.reduce((accumulator, ledger) => {
      return accumulator + ledger.Credit;
    }, 0);

    // Calculate the total balance amount
    this.totalBalance = this.data.reduce((accumulator, ledger) => {
      return accumulator + ledger.Balance;
    }, 0);

  }
}
