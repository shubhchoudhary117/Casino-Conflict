import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashTransactionComponent } from './cash-transaction/cash-transaction.component';
import {  RouterModule, Routes } from '@angular/router';
import { NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { UserRole } from 'src/app/core/service/user-roles.enum';

const routes:Routes=[

  // {  path:'master',component:CashTransactionComponent,canActivate: [AuthGuard],
  // data: { roles: [UserRole.SUB] }},
  // {  path:'super',component:CashTransactionComponent,canActivate: [AuthGuard],
  // data: { roles: [UserRole.SUB,UserRole.MASTER ] }},
  {  path:'provider',component:CashTransactionComponent,canActivate: [AuthGuard],
  data: { roles: [UserRole.SUB,UserRole.MASTER,UserRole.SUPER]}},
  {  path:'client',component:CashTransactionComponent,canActivate: [AuthGuard],
  data: { roles: [UserRole.SUB,UserRole.MASTER,UserRole.SUPER,UserRole.AGENT]}}
]

@NgModule({
  declarations: [
    CashTransactionComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    NgbDatepickerModule,
    RouterModule.forChild(routes),
  ]
})
export class CashTransactionModule { }
