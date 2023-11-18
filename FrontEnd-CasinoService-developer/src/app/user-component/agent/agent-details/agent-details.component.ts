import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { ToastService } from 'src/app/toast.service';
import { SuperService } from '../../super/super.service';
import { Agent, AgentResponseData } from '../agent.interface';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent implements OnInit {
  data: AgentResponseData;
  basicModalCloseResult:string='';
  superId :number[]=[];
  masterId:any;
  isBodyLoading:boolean=false;
  selectedValue: string = '';
  currentUserRole= UserRole.SUPER;
  UserRole;

  constructor(private agentService:AgentService,public toastService:ToastService,private modalService:NgbModal,private router:Router,private superService:SuperService,private authServie:AuthService) {
      this.UserRole = this.authServie.getCurrentUserRole();
  }

  ngOnInit(): void {
    this.loadAgentData(1);
  }

  loadAgentData(page:number){
    this.isBodyLoading =true
    this.agentService.getData(page-1).subscribe({
      next:(res:AgentResponseData)=>{
        this.isBodyLoading = false;
        this.data = res;
        this.toastService.show('Data fetch Successfully', { classname: 'bg-success text-light', delay: 1000 });
      },error:(e)=>{
        this.isBodyLoading = false;
        this.toastService.show(e.error.msg, { classname: 'bg-danger text-light', delay: 15000 });
        console.log(e)
      }
    })
  }
  getClientLimit(id:any){
    const route = 'client/limit-client/'+`${id}`
    console.log(route)
    this.router.navigate([route])
  }
  onValueChange(newValue: string) {
    this.selectedValue = newValue;
    this.superService.getMasterId = newValue;

  }

  getSingleId(id:any){
    this.router.navigate([`/agent/modify-agent/${id}`])
  }

  setMasterId(){
    console.log(this.selectedValue)
    if(this.selectedValue !== ''||this.selectedValue !==undefined){
      this.selectedValue = '';
      this.router.navigate(['/agent/add-agent'])
    }else{
      alert('Please Select MasterSubId')
    }
  }
  createClient(id:any){
    const router = `client/add-client/`+`${id}`;
    this.router.navigate([router]);
  }

}
