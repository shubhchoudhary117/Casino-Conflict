import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/toast.service';
import { ProviderPannelApiDataResponse } from '../provider.interface';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-management-details',
  templateUrl: './provider-management-details.component.html',
  styleUrls: ['./provider-management-details.component.scss']
})
export class ProviderManagementDetailsComponent implements OnInit {
  data: ProviderPannelApiDataResponse;
  isBasicExampleMenuCollapsed = true;
  role:boolean =false;
  isLoading:boolean = false;
  constructor(
              private providerService:ProviderService,
              public router: Router,
              public toastService:ToastService,
            ) {
  }

  ngOnInit(): void {
    this.loadProviderData(1);
  }

  loadProviderData(page: number) {
    this.isLoading = true;
    this.providerService.getData(page - 1).subscribe({
      next:(res)=>{
        console.log(res)
        this.isLoading = false;
        this.data = res;
        this.toastService.show('Data Fetch Successfully', { classname: 'bg-success text-light', delay: 1000 });
      },error:(e)=>{
        this.isLoading = false;
        console.log(e);
      }
    });
  }

  getSingleId(id: any) {
    this.router.navigate([`/provider-panel/modify-provide-panel/${id}`]);
  }

  getClientPanelLimit(id: any) {
    const route = 'client-panel/limit-client-panel/' + `${id}`;
    this.router.navigate([route]);
  }

  createClientPanle(id: any) {
    const route = 'client-panel/add-client-panel/' + `${id}`;
    this.router.navigate([route]);
  }
}
