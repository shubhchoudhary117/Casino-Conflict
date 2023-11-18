import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { InPlayGameComponent } from './in-play-game/in-play-game.component';
import { MatchPositionComponent } from './match-position/match-position.component';
import { SessionPlusMinusSelectComponent } from './session-plus-minus-select/session-plus-minus-select.component';
import { DisplayMatchSessionComponent } from './display-match-session/display-match-session.component';
import { ViewMatchReportComponent } from './view-match-report/view-match-report.component';
import { ViewSessionReportComponent } from './view-session-report/view-session-report.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CompleteGameComponent } from './complete-game/complete-game.component';


@NgModule({
  declarations: [
    InPlayGameComponent,
    MatchPositionComponent,
    SessionPlusMinusSelectComponent,
    DisplayMatchSessionComponent,
    ViewMatchReportComponent,
    ViewSessionReportComponent,
    CompleteGameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    NgbDropdownModule
  ]
})
export class GameModule { }
