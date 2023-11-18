import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedToastModule } from 'src/app/share.toster.module';
import { BnNgIdleService } from 'bn-ng-idle';
import { ProviderManagementDetailsComponent } from './provider-management-details/provider-management-details.component';
import { ProviderManagementCreateComponent } from './provider-management-create/provider-management-create.component';
import { ProviderManagementModifyComponent } from './provider-management-modify/provider-management-modify.component';
import { ProviderManagementLimitComponent } from './provider-management-limit/provider-management-limit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'provider-panel',
      pathMatch: 'full'
  },

  {path: '', component: ProviderManagementDetailsComponent},
  {path: 'add-provide-panel', component: ProviderManagementCreateComponent},
  {path: 'modify-provide-panel/:id', component: ProviderManagementModifyComponent},
  {path: 'provider-limit', component: ProviderManagementLimitComponent},
];

@NgModule({
  declarations: [
    ProviderManagementDetailsComponent,
    ProviderManagementCreateComponent,
    ProviderManagementModifyComponent,
    ProviderManagementLimitComponent,
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    SharedToastModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbModule,
    NgbTooltipModule,
    RouterModule.forChild(routes)
  ],
  providers: [BnNgIdleService],
})
export class MasterModule { }
