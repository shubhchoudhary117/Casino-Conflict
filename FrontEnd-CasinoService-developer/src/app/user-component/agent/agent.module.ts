import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ModifyAgentMasterComponent } from './modify-agent-master/modify-agent-master.component';
import { LimitAgentMasterComponent } from './limit-agent-master/limit-agent-master.component';
import { AgentRoutingModule } from './agent-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedToastModule } from 'src/app/share.toster.module';



@NgModule({
  declarations: [AgentDetailsComponent,AddAgentComponent,
       ModifyAgentMasterComponent, LimitAgentMasterComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    ReactiveFormsModule,SharedToastModule,
    NgbModalModule,FormsModule,NgbDropdownModule,NgbPaginationModule
  ]
})
export class AgentModule { }
