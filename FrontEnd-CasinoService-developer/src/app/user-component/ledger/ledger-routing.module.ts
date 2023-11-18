import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentLedgerComponent } from './agent-ledger/agent-ledger.component';
import { ClientLedgerComponent } from './client-ledger/client-ledger.component';
import { ClientPlusMinusComponent } from './client-plus-minus/client-plus-minus.component';
import { MasterLedgerComponent } from './master-ledger/master-ledger.component';
import { MyLedgerComponent } from './my-ledger/my-ledger.component';
import { ProviderLedgerComponent } from './provider-ledger/provider-ledger.component';
import { SuperLedgerComponent } from './super-ledger/super-ledger.component';

const routes: Routes = [
  {path:'',redirectTo:'ledger',pathMatch:'full'},
  {path:'',component:MyLedgerComponent},
  {path:'client/pm',component:ClientPlusMinusComponent},
  {path:'client',component:ClientLedgerComponent},
  {path:'provider',component:ProviderLedgerComponent},
  // {path:'super',component:SuperLedgerComponent},
  // {path:'master',component:MasterLedgerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LedgerRoutingModule { }
