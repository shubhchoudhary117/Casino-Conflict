import { Component, OnInit } from '@angular/core';
import { Data, DummyData } from '../ledger.interface';

@Component({
  selector: 'app-provider-ledger',
  templateUrl: './provider-ledger.component.html',
  styleUrls: ['./provider-ledger.component.scss']
})
export class ProviderLedgerComponent implements OnInit {
  providerData:Data[]=[];
  openBal;
  currentBal;
  clsBal;
  constructor() { }

  ngOnInit(): void {
    this.providerData = DummyData;
    this.openBal = this.providerData.reduce((accumulator, ledger) => {
      return accumulator + ledger.OpenBal;
    }, 0);
    this.currentBal = this.providerData.reduce((accumulator, ledger) => {
      return accumulator + ledger.CurrBal;
    }, 0);
    this.clsBal = this.providerData.reduce((accumulator, ledger) => {
      return accumulator + ledger.ClsBal;
    }, 0);
  }

}
