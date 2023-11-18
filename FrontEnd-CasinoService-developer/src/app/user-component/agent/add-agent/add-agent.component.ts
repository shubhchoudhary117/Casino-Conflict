import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { AutoGeneratePasswordService } from 'src/app/core/service/auto-generate-password.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { Agent } from '../agent.interface';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {
  AgentAddForm: FormGroup;
  submitted = false;
  isAgentLoading =false;
  agentId;
  superData:Agent;
  isBodyLoading:boolean= false;
  serverErrors=null;
  constructor(private fb: FormBuilder, private agentService:AgentService,private router:Router,private route:ActivatedRoute,private authService:AuthService,private autoGenerate:AutoGeneratePasswordService) {

  }

  ngOnInit(): void {
    this.isBodyLoading = true;
    console.log(this.authService.getCurrentUserRole())
    console.log(UserRole.SUPER)

  if(UserRole.SUPER == this.authService.getCurrentUserRole()){
    this.agentId = this.agentService.superId;
    this.agentService.getSuperAgentData(this.agentId).subscribe(res=>{
    this.isBodyLoading = false;
    this.superData = res;
    this.addAgentVaildation();
   })
  }else{
    this.agentId = this.route.snapshot.paramMap.get('id');
    console.log('second')
    this.agentService.getSuperAgentData(this.agentId).subscribe(res=>{
    this.isBodyLoading = false;
      this.superData = res;
      this.addAgentVaildation();
    })
   }
  }
  addAgentVaildation(){
    this.AgentAddForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
      reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
      contactNo: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      currentLimit: ['', [Validators.required, Validators.min(0),Validators.max(this.superData.currentLimit)]],
      share: ['', [Validators.required, Validators.min(0), Validators.max(this.superData.share)]],
      cShare: ['', [Validators.required, Validators.min(0), Validators.max(this.superData.cshare)]],
      mobileShare: ['', [Validators.required, Validators.min(0), Validators.max(this.superData.mobileShare)]],
      mc: ['', [Validators.required, Validators.min(0), Validators.max(this.superData.mc)]],
      sc: ['', [Validators.required, Validators.min(0), Validators.max(this.superData.sc)]],
      cc: ['', [Validators.required, Validators.min(0), Validators.max(this.superData.cc)]],
      // shareMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      // cShareMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      // msMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      // shareSuper:['100'],
      cShareSuper:['0'],
      mobileShareSuper:['100'],
      cshareSuper:['0'],
      casinoCheck:[true],
      shareStatus:[false]
  });
  }
  onSubmit() {
      this.submitted = true;
      if (this.AgentAddForm.valid) {
        this.isAgentLoading = true;
          const formData: Agent = this.AgentAddForm.value;
          console.log(formData)
          this.agentService.createAgnet(this.agentId,formData)
              .subscribe({
                  next: (v) => {
                    this.isAgentLoading= false;
                    this.router.navigate(['/agent'])
                    console.log(v)
                  },
                  error: (e) => {
                    console.error(e)
                    console.error(e.error.msg)
                    this.isAgentLoading= false;
                    if (e.error && e.error.errors) {
                      this.serverErrors = e.error.errors;
                    }
                  },
                  complete: () => {
                    this.isAgentLoading= false;
                    console.info('complete')
                  }
              });

      }

  }
  generatePassword(){
    const randomPassword = this.autoGenerate.generateRandomPassword(8);
    this.AgentAddForm.get('password').setValue(randomPassword);
  }
}
