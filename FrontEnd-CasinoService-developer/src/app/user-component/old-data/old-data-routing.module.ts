import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMatchReportComponent } from '../game/view-match-report/view-match-report.component';
import { CashTransactionComponent } from './cash-transaction/cash-transaction.component';
import { DisplayMatchSessionComponent } from './display-match-session/display-match-session.component';
import { DisplaySessionBitComponent } from './display-session-bit/display-session-bit.component';
import { OldLedgerComponent } from './old-ledger/old-ledger.component';
import { SessionPlusMinusComponent } from './session-plus-minus/session-plus-minus.component';
import { SportGameComponent } from './sport-game/sport-game.component';

const routes: Routes = [
  {path:'game/completeGame',component:SportGameComponent},
  {path:'game/oldGame/plusMinusSelect/:id',component:SessionPlusMinusComponent},
  {path:'game/oldGame/displayMatchSession/:id',component:DisplayMatchSessionComponent},
  {path:'game/oldGame/viewMatchReport/:id',component:ViewMatchReportComponent},
  {path:'game/oldGame/viewSessionReport/:id',component:DisplaySessionBitComponent},
  {path:'ledger',component:OldLedgerComponent},

  // {  path:'oldmaster',component:CashTransactionComponent},
  // {  path:'oldsuper',component:CashTransactionComponent},
  {  path:'oldprovider',component:CashTransactionComponent},
  {  path:'oldclient',component:CashTransactionComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OldDataRoutingModule { }
