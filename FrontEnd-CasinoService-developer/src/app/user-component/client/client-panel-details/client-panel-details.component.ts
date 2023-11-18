import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { ToastService } from 'src/app/toast.service';
import { ClientApiDataResponse } from '../client-panel.interface';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-panel-details',
  templateUrl: './client-panel-details.component.html',
  styleUrls: ['./client-panel-details.component.scss']
})
export class ClientPanelDetailsComponent implements OnInit {
  data: ClientApiDataResponse;
  subId =[];
  superId :number[]=[];
  selectedValue: string = '';
  currentUserRole= UserRole.PROVIDER;
  isBodyLoading:boolean=false;
  UserRole;
  serverError =null||'';
  constructor(
    private clientService:ClientService,
    private router:Router,
    public toastService:ToastService,
    private authService:AuthService) {
    this.UserRole = this.authService.getCurrentUserRole();

  }

  ngOnInit(): void {
    if(UserRole.PROVIDER == this.UserRole){
      const providerId = this.authService.getProviderId();
     this.loadClientDataByProviderId(providerId);

    }else if(UserRole.ADMIN == this.UserRole){
      this.loadClientData(1);
    }
  }
  loadClientDataByProviderId(providerid:any){
    this.isBodyLoading =true;
    this.serverError =null||'';
    this.clientService.getDataByProviderId(providerid).subscribe(
      res => {

        this.isBodyLoading = false;
        if(res.message == "No clients found for the specified provider"){
          this.serverError =res.message;
        }
        this.data = res;
        console.log('working',this.data)
        this.toastService.show('Data Fetch Success', { classname: 'bg-success text-light', delay: 1000 });
        console.log(typeof this.data)
      }
    );
  }
  loadClientData(page: number) {
    this.isBodyLoading =true;
    this.serverError =null||'';
    this.clientService.getData(page-1).subscribe(
      res => {
      console.log('workings res',res)
        this.isBodyLoading = false;
        this.data = res;
        this.toastService.show('Data Fetch Success', { classname: 'bg-success text-light', delay: 1000 });
      }
    );
  }
  getSingleId(id:any){
    console.log(id)
    this.router.navigate([`/client-panel/modify-client-panel/${id}`])
  }

}
