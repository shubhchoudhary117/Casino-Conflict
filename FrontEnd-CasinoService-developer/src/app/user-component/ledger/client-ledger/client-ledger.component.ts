import { Component, OnInit } from '@angular/core';
import {  Data, DummyData } from '../ledger.interface';

@Component({
  selector: 'app-client-ledger',
  templateUrl: './client-ledger.component.html',
  styleUrls: ['./client-ledger.component.scss']
})
export class ClientLedgerComponent implements OnInit {
  clientData:Data[]=[];
  openBal;
  currentBal;
  clsBal;
  constructor() { }

  ngOnInit(): void {
    this.clientData = DummyData;
    this.openBal = this.clientData.reduce((accumulator, ledger) => {
      return accumulator + ledger.OpenBal;
    }, 0);
    this.currentBal = this.clientData.reduce((accumulator, ledger) => {
      return accumulator + ledger.CurrBal;
    }, 0);
    this.clsBal = this.clientData.reduce((accumulator, ledger) => {
      return accumulator + ledger.ClsBal;
    }, 0);
  }

}
