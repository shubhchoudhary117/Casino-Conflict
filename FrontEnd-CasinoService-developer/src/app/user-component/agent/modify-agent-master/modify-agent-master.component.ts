import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'http';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-modify-agent-master',
  templateUrl: './modify-agent-master.component.html',
  styleUrls: ['./modify-agent-master.component.scss']
})
export class ModifyAgentMasterComponent implements OnInit {
  getId:any;
  agentUpdateForm:FormGroup;
  submitted = false;
  isAgentLoading =false;
  isBodyLoading =false;
  superData:any;
  serverErrors:any;
  constructor(private route :ActivatedRoute,private agentService:AgentService,private fb:FormBuilder,private router:Router) {


  }

  ngOnInit(): void {
    this.isBodyLoading = true;
    this.getId = this.route.snapshot.paramMap.get('id');
    this.agentService.getSingleAgentData(this.getId).subscribe({
      next:(res)=>{
        console.log(res)
        let superId = res.superId;
        this.updateSuperValidation()
        this.PorulateSuperForm(res);
        this.agentService.getSuperAgentData(superId).subscribe({
          next:(res)=>{
            this.isBodyLoading = false;
            this.superData = res;
          }
        })

    },error: (e) => {
      this.isBodyLoading = false;
      console.error(e.error.msg)
    }})
  }
  updateSuperValidation(){
  this.agentUpdateForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
    reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
    contactNo: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
    // currentLimit: ['', [Validators.required, Validators.min(0)]],
    share: ['', [Validators.required, Validators.min(0), Validators.max(this.superData?.share)]],
    cShare: ['', [Validators.required, Validators.min(0), Validators.max(this.superData?.cshare)]],
    mobileShare: ['', [Validators.required, Validators.min(0), Validators.max(this.superData?.mobileShare)]],
    mc: ['', [Validators.required, Validators.min(0), Validators.max(this.superData?.mc)]],
    sc: ['', [Validators.required, Validators.min(0), Validators.max(this.superData?.sc)]],
    cc: ['', [Validators.required, Validators.min(0), Validators.max(this.superData?.cShare)]],
    // shareMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
    // cShareMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
    // msMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
    shareSuper:[0],
    cShareSuper:['0'],
    mobileShareSuper:['100'],
    cshareSuper:['0'],
    casinoCheck:[true],
    shareStatus:[false]
  });}
  PorulateSuperForm(data:any){
    if(this.agentUpdateForm){
      console.log('data',data)
      this.agentUpdateForm.patchValue({
        code:data.code,
        name:data.name,
        reference:data.reference,
        password:data.password,
        contactNo:data.contactNo,
        // currentLimit:data.currentLimit,
        share:data.share,
        cShare:data.cshare,
        mobileShare:data.mobileShare,
        shareMaster:data.shareMaster,
        cShareMaster:data.cShareMaster,
        msMaster:data.msMaster,
        casinoCheck:data.casinoCheck,
        shareStatus:data.shareStatus,
        mc:data.mc,
        sc:data.sc,
        cc:data.cc,
      })
    }
  }
  onSubmit(){
    this.isAgentLoading = true;
    // if (this.SuperAgentUpdateForm.valid && (this.getId !==''||this.getId!==undefined) ) {
    const formData: Agent = this.agentUpdateForm.value;
     console.log(formData)
    this.agentService.updateAgent(this.getId,formData).subscribe({
      next:(res)=>{
        console.log(res)
        this.isAgentLoading = false;
        this.router.navigate(['/super-agent'])
      },error:(e)=>{
        console.log(e)
        if (e.error && e.error.errors) {
          this.serverErrors = e.error.errors;
        }
      }})
    // }
  // }
  }
}
