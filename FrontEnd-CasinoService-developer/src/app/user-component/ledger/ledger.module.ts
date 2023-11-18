import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LedgerRoutingModule } from './ledger-routing.module';
import { MyLedgerComponent } from './my-ledger/my-ledger.component';
import { ClientPlusMinusComponent } from './client-plus-minus/client-plus-minus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientLedgerComponent } from './client-ledger/client-ledger.component';
import { AgentLedgerComponent } from './agent-ledger/agent-ledger.component';
import { SuperLedgerComponent } from './super-ledger/super-ledger.component';
import { MasterLedgerComponent } from './master-ledger/master-ledger.component';
import { ProviderLedgerComponent } from './provider-ledger/provider-ledger.component';


@NgModule({
  declarations: [
    MyLedgerComponent,
    ClientPlusMinusComponent,
    ClientLedgerComponent,
    AgentLedgerComponent,
    SuperLedgerComponent,
    MasterLedgerComponent,
    ProviderLedgerComponent
  ],
  imports: [
    CommonModule,
    LedgerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  providers:[DatePipe]
})
export class LedgerModule { }
