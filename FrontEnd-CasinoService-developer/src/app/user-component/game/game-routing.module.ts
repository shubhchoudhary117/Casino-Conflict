import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteGameComponent } from './complete-game/complete-game.component';
import { DisplayMatchSessionComponent } from './display-match-session/display-match-session.component';
import { InPlayGameComponent } from './in-play-game/in-play-game.component';
import { MatchPositionComponent } from './match-position/match-position.component';
import { SessionPlusMinusSelectComponent } from './session-plus-minus-select/session-plus-minus-select.component';
import { ViewMatchReportComponent } from './view-match-report/view-match-report.component';
import { ViewSessionReportComponent } from './view-session-report/view-session-report.component';

const routes: Routes = [
  {path:'inPlay',component:InPlayGameComponent},
  {path:'matchPosition/:id',component:MatchPositionComponent},
  {path:'sessionPlusMinus/:id',component:SessionPlusMinusSelectComponent},
  {path:'displayMatchSession/:id',component:DisplayMatchSessionComponent},
  {path:'viewMatchReports/:id',component:ViewMatchReportComponent},
  {path:'viewSessionReport/:id',component:ViewSessionReportComponent},
  {path:'completeGame',component:CompleteGameComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
