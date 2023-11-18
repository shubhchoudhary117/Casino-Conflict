import { Component, OnInit, TemplateRef } from '@angular/core';
import { SuperApiDataResponse } from '../super-agent.interface';
import { SuperService } from '../super.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { AuthService } from 'src/app/core/service/auth.service';
import { ToastService } from 'src/app/toast.service';
import { DataService } from 'src/app/core/service/data-service.service';

@Component({
  selector: 'app-super-agent-details',
  templateUrl: './super-agent-details.component.html',
  styleUrls: ['./super-agent-details.component.scss'],


})
export class SuperAgentDetailsComponent implements OnInit {
  data: SuperApiDataResponse;
  basicModalCloseResult:string='';
  subId :any[]=[];
  masterId:any;
  selectedValue: string = '';
  currentUserRole= UserRole.MASTER;
  isBodyLoading:boolean=false;
  UserRole;
  constructor(
                private superService:SuperService,
                private router:Router,
                private authService:AuthService,
                public toastService: ToastService,
                private dataService:DataService
                    ) {
    this.UserRole = this.authService.getCurrentUserRole();
    console.log(this.UserRole)
  }

  ngOnInit(): void {
    this.loadSuperData(1);

  }
  isTemplate(toast) {
		return toast.textOrTpl instanceof TemplateRef;
	}

  createAgent(id:any){
    this.router.navigate([`/agent/add-agent/${id}`])
  }
  loadSuperData(page:number){
    this.isBodyLoading = true;
    // this.dataService.loadData().subscribe(
    //   (data)=>{
        this.superService.getData(page-1).subscribe({
          next:(res)=>{
            this.isBodyLoading = false;
            this.data = res;
            this.toastService.show('Data Fetch Successfully', { classname: 'bg-success text-light', delay: 1000 });

            // this.toastService.show('Data Fetch Success', { classname: 'bg-success text-light', delay: 10000 });
          },error:(e)=>{
            this.isBodyLoading =false;
            console.log(e)
          }
        // })
      }
    )
  }

  getSuperLimit(id:any){
    const route = 'agent/limit-agent/'+`${id}`;
    this.router.navigate([route])
  }

  onValueChange(newValue: string) {
    this.selectedValue = newValue;
    this.superService.getMasterId = newValue;
  }


  getSingleId(id){
    this.router.navigate([`/super-agent/modify-super-agent/${id}`])
  }
      setMasterId(){
        console.log(this.selectedValue)
        if(this.selectedValue !== ''||this.selectedValue !==undefined){
          console.log('hello world')
          this.selectedValue = '';
          this.router.navigate(['/super-agent/add-super-agent']);
        }else{
          alert('Please Select MasterSubId')
        }
      }

}
