import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPanelCreateComponent } from './client-panel-create/client-panel-create.component';
import { ClientPanelDetailsComponent } from './client-panel-details/client-panel-details.component';
import { ClientPanelModifyComponent } from './client-panel-modify/client-panel-modify.component';
import { LimitClientMasterComponent } from './limit-client-master/limit-client-master.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'client-panel',
    pathMatch: 'full'
  },
  {path:'',component:ClientPanelDetailsComponent},
  {path:'add-client-panel/:id',component:ClientPanelCreateComponent},
  {path:'add-client-panel',component:ClientPanelCreateComponent},
  {path:'client-panel/add-client-panel',component:ClientPanelCreateComponent},
  {path:'modify-client-panel/:id',component:ClientPanelModifyComponent},
  {path:'limit-client-panel/:id',component:LimitClientMasterComponent},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientMasterRoutingModule { }
