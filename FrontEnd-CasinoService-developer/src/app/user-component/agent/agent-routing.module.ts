import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { LimitAgentMasterComponent } from './limit-agent-master/limit-agent-master.component';
import { ModifyAgentMasterComponent } from './modify-agent-master/modify-agent-master.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'agent',
    pathMatch: 'full'
  },
  {path:'',component:AgentDetailsComponent},
  {path:'add-agent',component:AddAgentComponent},
  {path:'add-agent/:id',component:AddAgentComponent},
  {path:'limit-agent/:id',component:LimitAgentMasterComponent},
  {path:'limit-agent',component:LimitAgentMasterComponent},
  {path:'modify-agent/:id',component:ModifyAgentMasterComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
