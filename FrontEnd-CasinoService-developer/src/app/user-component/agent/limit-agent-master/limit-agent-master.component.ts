import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'http';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { LimitBodyModel } from 'src/app/sharedModel/LimitBodyModel';
import { AgentResponseData } from '../agent.interface';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-limit-agent-master',
  templateUrl: './limit-agent-master.component.html',
  styleUrls: ['./limit-agent-master.component.scss']
})
export class LimitAgentMasterComponent implements OnInit {
  selectedDate: NgbDateStruct;
  // Total number of items
   // Current page number
   // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  page:number =1
  limitId: number;
  limitPost:FormGroup;
  agentLimit:AgentResponseData;
  itemsPerPage
  currentUserRole=UserRole.SUPER;
  inputNumbers: { [key: number]: number } = {};
  inputErrors: { [key: number]: boolean } = {};
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private authService:AuthService,private agentService:AgentService) {
    this.limitPost = this.fb.group({
      limit: new FormControl(''),
      userId: new FormControl(''),
      parentId: new FormControl(''),
      isLedger: new FormControl(''),
      addOrMinus: new FormControl('')
    })
  }

  ngOnInit(): void {
    console.log(this.authService.getCurrentUserRole())
    console.log(this.currentUserRole)
    if(this.currentUserRole == this.authService.getCurrentUserRole()){
      this.limitId = this.agentService.superId;
      this.getData(this.limitId,this.page-1)
    }else{
      this.limitId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getData(this.limitId,this.page-1)
    }

  }

  getData(id:number,page:number){
    this.agentService.limitAgent(id,page).subscribe((res:AgentResponseData)=>{
      console.log(res)
      this.agentLimit = res;
    })
  }
  updatePage(page:number){
    this.getData(this.limitId,page)
  }

  updateLimit(id: number, operation: number): void {
    let masterId= this.limitId
    let model: LimitBodyModel = {
      limit: this.inputNumbers[id],
      addOrMinus: operation,
      userId: id,
      parentId: masterId,
      isLedger: false
    }
    if (this.inputNumbers[id] != undefined || this.inputNumbers[id] != null) {
      this.agentService.limitPatchValue(model)
      .subscribe({
        next:()=>{

        }}
      )}
    }
}
