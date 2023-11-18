import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { AutoGeneratePasswordService } from 'src/app/core/service/auto-generate-password.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { ToastService } from 'src/app/toast.service';
import { MasterSuper, SuperAgent } from '../super-agent.interface';
import { SuperService } from '../super.service';

@Component({
  selector: 'app-add-super-agent-master',
  templateUrl: './add-super-agent.component.html',
  styleUrls: ['./add-super-agent.component.scss']
})
export class AddSuperAgentComponent implements OnInit {
  superAgentAddForm: FormGroup;
  submitted = false;
  isSuperLoading =false;
  isBodyLoading = false;
  masterId;
  masterData:MasterSuper;
  serverErrors=null;

  constructor(
              private fb: FormBuilder,
              private superService:SuperService,
              private router:Router,
              private route:ActivatedRoute,
              private authService:AuthService,
              private autoGenerate:AutoGeneratePasswordService,
              private toastService:ToastService
            ) {

  }

  ngOnInit(): void {
    this.isBodyLoading = true;
    if(UserRole.MASTER == this.authService.getCurrentUserRole()){
      this.masterId = this.superService.masterId;
      this.superService.getSuperMaster(this.masterId).subscribe({
        next:(res)=>{
      console.log(this.masterId)
        this.isBodyLoading = false;
        this.masterData = res;
        this.addSuperValidators();
      },
      error: (e) => {
        console.error(e)
      }
     })
    }else{
      console.log('second')

      this.masterId = this.route.snapshot.paramMap.get('id')
      this.superService.getSuperMaster(this.masterId).subscribe({
        next:(res)=>{
          this.masterData = res;
          this.isBodyLoading = false;
           this.addSuperValidators();
        },
        error: (e) => {
          console.error(e)
        }
      })
    }
  }
  addSuperValidators():void{
    this.superAgentAddForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
      reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
      contactNo: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      currentLimit: ['', [Validators.required,Validators.min(0), Validators.max(this.masterData.currentLimit)]],
      share: ['', [Validators.required, Validators.min(0), Validators.max(this.masterData.share)]],
      cShare: ['', [Validators.required, Validators.min(0), Validators.max(this.masterData.cshare)]],
      // icShare: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      mobileShare: ['', [Validators.required, Validators.min(0), Validators.max(this.masterData.mobileShare)]],
      mc: ['', [Validators.required, Validators.min(0), Validators.max(this.masterData.mc)]],
      sc: ['', [Validators.required, Validators.min(0), Validators.max(this.masterData.sc)]],
      cc: ['', [Validators.required, Validators.min(0), Validators.max(this.masterData.cc)]],
      shareMaster:[100],
      cShareMaster:[0],
      msMaster:[100],
      casinoCheck:[true],
      shareStatus:[false]
  });
  }

  onSubmit() {
      this.submitted = true;
      if (this.superAgentAddForm.valid) {
        this.isSuperLoading = true;
          const formData: SuperAgent = this.superAgentAddForm.value;
          this.superService.createSuper(formData,this.masterId)
              .subscribe({
                  next: (v) => {
                    this.isSuperLoading= false;
                    this.toastService.show('Data Added Success', { classname: 'bg-success text-light', delay: 10000 });
                    this.router.navigate(['/super-agent']);
                  },
                  error: (e) => {
                    console.error(e.error.msg)
                    this.isSuperLoading= false;
                    if (e.error && e.error.errors) {
                      this.toastService.show(e.error.msg, { classname: 'bg-danger text-light', delay: 15000 });
                      this.serverErrors = e.error.errors;
                    }
                  },
                  complete: () => {
                    this.isSuperLoading= false;
                    console.info('complete')
                  }
              });

      }
  }
  generatePassword(){
    const randomPassword = this.autoGenerate.generateRandomPassword(8);
    this.superAgentAddForm.get('password').setValue(randomPassword);
  }
}
