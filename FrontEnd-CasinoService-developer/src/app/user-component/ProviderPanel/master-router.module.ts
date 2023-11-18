import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProviderManagementCreateComponent } from './provider-management-create/provider-management-create.component';
import { ProviderManagementDetailsComponent } from './provider-management-details/provider-management-details.component';
import { ProviderManagementLimitComponent } from './provider-management-limit/provider-management-limit.component';
import { ProviderManagementModifyComponent } from './provider-management-modify/provider-management-modify.component';


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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule {
}
