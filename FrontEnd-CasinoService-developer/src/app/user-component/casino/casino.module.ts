import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasinoRoutingModule } from './casino-routing.module';
import { VirtualTeenPositionComponent } from './virtual-teen-position/virtual-teen-position.component';
import { LiveTeenTwentyPositionComponent } from './live-teen-twenty-position/live-teen-twenty-position.component';
import { CasinoDetailsComponent } from './casino-details/casino-details.component';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CasinoPlusMinusReportComponent } from './casino-plus-minus-report/casino-plus-minus-report.component';
import { VirtualCasinoGameComponent } from './virtual-casino-game/virtual-casino-game.component';


@NgModule({
  declarations: [
    VirtualTeenPositionComponent,
    LiveTeenTwentyPositionComponent,
    CasinoDetailsComponent,
    CasinoPlusMinusReportComponent,
    VirtualCasinoGameComponent
  ],
  imports: [
    CommonModule,
    CasinoRoutingModule,
    NgbPaginationModule,
    FormsModule,
    NgbDropdownModule
  ]
})
export class CasinoModule { }
