import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataReportComponent } from './data-report/data-report.component';
import { LoginReportComponent } from './login-report/login-report.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { UserRole } from 'src/app/core/service/user-roles.enum';
const routes: Routes = [
  {path:'data-report/master',component:DataReportComponent,canActivate: [AuthGuard],
  data: { roles: [UserRole.SUB] }},
  {path:'data-report/super',component:DataReportComponent,canActivate: [AuthGuard],
  data: { roles: [UserRole.SUB,UserRole.MASTER ] }},
  {path:'data-report/agent',component:DataReportComponent,canActivate: [AuthGuard],
  data: { roles: [UserRole.SUB,UserRole.MASTER ,UserRole.SUPER] }},
  {path:'data-report/client',component:DataReportComponent,canActivate: [AuthGuard],
  data: { roles: [UserRole.SUB,UserRole.MASTER ,UserRole.SUPER,UserRole.AGENT] }},

  {path:'login-report/master',component:LoginReportComponent},
  {path:'login-report/super',component:LoginReportComponent},
  {path:'login-report/agent',component:LoginReportComponent},
  {path:'login-report/client',component:LoginReportComponent},

]

@NgModule({
  declarations: [
    DataReportComponent,
    LoginReportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    RouterModule.forChild(routes)
  ],providers:[DatePipe]
})
export class ReportModule { }
