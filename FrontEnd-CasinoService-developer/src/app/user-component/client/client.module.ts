import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitClientMasterComponent } from './limit-client-master/limit-client-master.component';
import { ClientMasterRoutingModule } from './client-master-routing.module';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedToastModule } from 'src/app/share.toster.module';
import { ClientPanelCreateComponent } from './client-panel-create/client-panel-create.component';
import { ClientPanelDetailsComponent } from './client-panel-details/client-panel-details.component';
import { ClientPanelModifyComponent } from './client-panel-modify/client-panel-modify.component';



@NgModule({
  declarations: [

    LimitClientMasterComponent,
    ClientPanelCreateComponent,
    ClientPanelDetailsComponent,
    ClientPanelModifyComponent
  ],
  imports: [
    CommonModule,
    ClientMasterRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,SharedToastModule,
    NgbPaginationModule,FormsModule,NgbDropdownModule,SharedToastModule
  ]
})
export class ClientModule { }
