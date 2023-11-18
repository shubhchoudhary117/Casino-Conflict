import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoDetailsComponent } from './casino-details/casino-details.component';
import { CasinoPlusMinusReportComponent } from './casino-plus-minus-report/casino-plus-minus-report.component';
import { VirtualCasinoGameComponent } from './virtual-casino-game/virtual-casino-game.component';
import { VirtualTeenPositionComponent } from './virtual-teen-position/virtual-teen-position.component';

const routes: Routes = [
  {path:'position',component:VirtualCasinoGameComponent},
  {path:'ledger',component:CasinoDetailsComponent},
  {path:'cdata/pl/:id',component:CasinoPlusMinusReportComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasinoRoutingModule { }
