import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAgentDetailsComponent } from './super-agent-details/super-agent-details.component';
import { LimitSuperAgentMasterComponent } from './limit-super-agent-master/limit-super-agent-master.component';
import { SuperAgentMasterRoutingModule } from './super-agent-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSuperAgentComponent } from './add-super-agent/add-super-agent.component';
import { NgbPaginationModule, NgbDropdownModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ModifySuperAgentComponent } from './modify-super-agent-master/modify-super-agent.component';
import { ToastsContainerComponent } from 'src/app/toasts-container.component';
import { SharedToastModule } from 'src/app/share.toster.module';


@NgModule({
  declarations: [
    SuperAgentDetailsComponent,
    ModifySuperAgentComponent,
    LimitSuperAgentMasterComponent,
    AddSuperAgentComponent,
  ],
  imports: [
    CommonModule,
    SuperAgentMasterRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbToastModule,
    FormsModule,
    SharedToastModule
  ]
})
export class SuperAgentMasterModule { }
