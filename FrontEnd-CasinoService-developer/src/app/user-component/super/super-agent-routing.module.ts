import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSuperAgentComponent } from './add-super-agent/add-super-agent.component';
import { LimitSuperAgentMasterComponent } from './limit-super-agent-master/limit-super-agent-master.component';
import { ModifySuperAgentComponent } from './modify-super-agent-master/modify-super-agent.component';
import { SuperAgentDetailsComponent } from './super-agent-details/super-agent-details.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'super-agent',
    pathMatch: 'full'
  },
      {path:'',component:SuperAgentDetailsComponent},
      {path:'add-super-agent',component:AddSuperAgentComponent},
      {path:'add-super-agent/:id',component:AddSuperAgentComponent},
      {path:'modify-super-agent/:id',component:ModifySuperAgentComponent},
      {path:'limit-super-agent-master/:id',component:LimitSuperAgentMasterComponent},
      {path:'limit-super-agent-master',component:LimitSuperAgentMasterComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAgentMasterRoutingModule { }
