import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { UserRole } from './core/service/user-roles.enum';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        // ,canActivate:[AuthGuard],data: {
        //   allowedRoles: [UserRole.ADMIN, UserRole.SUPER, UserRole.SUB]
        // }
      //   canActivate: [AuthGuard],data: { requiredRoles: ['AGENT', 'SUPER'] }
      },
      {
        path: 'provider-panel',
        loadChildren: () => import('./user-component/ProviderPanel/master.module').then(m => m.MasterModule),
        canActivate: [AuthGuard],
        data: { roles: [UserRole.ADMIN]
        }
      },
      {
        path: 'super-agent',
        loadChildren: () => import('./user-component/super/super-agent.module').then(m => m.SuperAgentMasterModule),
        canActivate: [AuthGuard],
        data: { roles: [UserRole.ADMIN,UserRole.MASTER ] }
      },
      {
        path: 'agent',
        loadChildren: () => import('./user-component/agent/agent.module').then(m => m.AgentModule),
        canActivate: [AuthGuard],
        data: { roles: [UserRole.SUB,UserRole.MASTER,UserRole.SUPER]}
      },
      {
        path: 'reports',
        loadChildren: () => import('./user-component/reports/report.module').then(m => m.ReportModule)
      },
      {
        path: 'game',
        loadChildren: () => import('./user-component/game/game.module').then(m => m.GameModule)
      },
      {
        path: 'casino',
        loadChildren: () => import('./user-component/casino/casino.module').then(m => m.CasinoModule)
      },
      {
        path: 'ct',
        loadChildren: () => import('./user-component/cash-transaction/cash-transaction.module').then(m => m.CashTransactionModule)
      },
      {
        path: 'client-panel',
        loadChildren: () => import('./user-component/client/client.module').then(m => m.ClientModule),canActivate: [AuthGuard],data: { roles: [UserRole.ADMIN,UserRole.PROVIDER] }
      },
      {
        path: 'ledger',
        loadChildren: () => import('./user-component/ledger/ledger.module').then(m => m.LedgerModule)
      },
      {
        path: 'old',
        loadChildren: () => import('./user-component/old-data/old-data.module').then(m => m.OldDataModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/pages/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'ui-components',
        loadChildren: () => import('./views/pages/ui-components/ui-components.module').then(m => m.UiComponentsModule)
      },
      {
        path: 'advanced-ui',
        loadChildren: () => import('./views/pages/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
      },
      {
        path: 'form-elements',
        loadChildren: () => import('./views/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'advanced-form-elements',
        loadChildren: () => import('./views/pages/advanced-form-elements/advanced-form-elements.module').then(m => m.AdvancedFormElementsModule)
      },
      {
        path: 'charts-graphs',
        loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/pages/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
