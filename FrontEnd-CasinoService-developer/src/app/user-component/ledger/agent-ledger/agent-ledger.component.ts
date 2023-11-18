import { Component, OnInit } from '@angular/core';
import { Data, DummyData } from '../ledger.interface';

@Component({
  selector: 'app-agent-ledger',
  templateUrl: './agent-ledger.component.html',
  styleUrls: ['./agent-ledger.component.scss']
})
export class AgentLedgerComponent implements OnInit {
  agentData:Data[]=[];
  openBal;
  currentBal;
  clsBal;
  constructor() { }

  ngOnInit(): void {
    this.agentData = DummyData;
    this.openBal = this.agentData.reduce((accumulator, ledger) => {
      return accumulator + ledger.OpenBal;
    }, 0);
    this.currentBal = this.agentData.reduce((accumulator, ledger) => {
      return accumulator + ledger.CurrBal;
    }, 0);
    this.clsBal = this.agentData.reduce((accumulator, ledger) => {
      return accumulator + ledger.ClsBal;
    }, 0);
  }
  }

