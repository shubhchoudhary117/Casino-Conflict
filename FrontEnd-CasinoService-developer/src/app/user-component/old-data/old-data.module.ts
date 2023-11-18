import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldDataRoutingModule } from './old-data-routing.module';
import { SportGameComponent } from './sport-game/sport-game.component';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionPlusMinusComponent } from './session-plus-minus/session-plus-minus.component';
import { DisplayMatchSessionComponent } from './display-match-session/display-match-session.component';
import { ViewMatchReportsComponent } from './view-match-reports/view-match-reports.component';
import { DisplaySessionBitComponent } from './display-session-bit/display-session-bit.component';
import { OldLedgerComponent } from './old-ledger/old-ledger.component';
import { CashTransactionComponent } from './cash-transaction/cash-transaction.component';


@NgModule({
  declarations: [
    SportGameComponent,
    SessionPlusMinusComponent,
    DisplayMatchSessionComponent,
    ViewMatchReportsComponent,
    DisplaySessionBitComponent,
    OldLedgerComponent,
    CashTransactionComponent,

  ],
  imports: [
    CommonModule,
    OldDataRoutingModule,
    NgbDropdownModule,
    NgbPaginationModule
  ]
})
export class OldDataModule { }
