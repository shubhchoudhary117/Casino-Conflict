import { Component, OnInit } from '@angular/core';
import { Ledger, ledgerDummyData } from '../ledger.interface';

@Component({
  selector: 'app-my-ledger',
  templateUrl: './my-ledger.component.html',
  styleUrls: ['./my-ledger.component.scss']
})
export class MyLedgerComponent implements OnInit {
  isBodyLoading =false;
  data:Ledger[] = [];
  totalDebit;
  totalCredit;
  totalBalance;
  constructor() { }

  ngOnInit(): void {
    this.data =ledgerDummyData;
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
