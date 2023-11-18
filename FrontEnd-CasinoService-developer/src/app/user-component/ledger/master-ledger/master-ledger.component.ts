import { Component, OnInit } from '@angular/core';
import { Data, DummyData } from '../ledger.interface';

@Component({
  selector: 'app-master-ledger',
  templateUrl: './master-ledger.component.html',
  styleUrls: ['./master-ledger.component.scss']
})
export class MasterLedgerComponent implements OnInit {
  superData:Data[]=[];
  openBal;
  currentBal;
  clsBal;
  constructor() { }

  ngOnInit(): void {
    this.superData = DummyData
    this.openBal = this.superData.reduce((accumulator, ledger) => {
      return accumulator + ledger.OpenBal;
    }, 0);
    this.currentBal = this.superData.reduce((accumulator, ledger) => {
      return accumulator + ledger.CurrBal;
    }, 0);
    this.clsBal = this.superData.reduce((accumulator, ledger) => {
      return accumulator + ledger.ClsBal;
    }, 0);
  }

  }
