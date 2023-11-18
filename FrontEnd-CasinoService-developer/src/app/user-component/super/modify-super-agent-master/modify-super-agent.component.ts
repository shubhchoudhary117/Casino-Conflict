import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { ToastService } from 'src/app/toast.service';
import { MasterSuper, SuperAgent } from '../super-agent.interface';
import { SuperService } from '../super.service';

@Component({
  selector: 'app-modify-super-agent',
  templateUrl: './modify-super-agent.component.html',
  styleUrls: ['./modify-super-agent.component.scss']
})
export class ModifySuperAgentComponent implements OnInit {
  sharedSuper: Subscription;
  getId:any;
  submitted = false;
  isSuperLoading=false;
  isBodyLoading = false;
  SuperAgentUpdateForm:FormGroup;
  masterData:MasterSuper;
  serverErrors = null;
  UserRole:UserRole;
  constructor(
                private superService:SuperService,
                private fb:FormBuilder,
                private router:Router,
                private route:ActivatedRoute,
                private authService:AuthService,
                private toastService:ToastService
                ) {
  }

  ngOnInit(): void {
    this.isBodyLoading = true;
    this.getId = this.route.snapshot.paramMap.get('id');
    this.superService.getSingleSuperData(this.getId).subscribe({
      next:(res)=>{
        this.isBodyLoading =false
        let masterId = res.data.masterId;
        this.addSuperValidators()
        this.superService.setSingleSuper(res);
        this.superService.getSuperMaster(masterId).subscribe({
          next:(res)=>{
            console.log(res)
            console.log(res.share)
           this.masterData =res;
         }
        })
      this.PorulateSuperForm(res);

  },error: (e) => {
    console.error(e.error.msg)
    this.isBodyLoading =false
    this.toastService.show(e.error.msg, { classname: 'bg-danger text-light', delay: 15000 });
    this.serverErrors = e.error.errors;
  }})
  }

  addSuperValidators(){
    this.SuperAgentUpdateForm = this.fb.group({
      code:[''],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
      reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
      contactNo: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      currentLimit: ['', [Validators.required, Validators.min(0)]],
      share: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      cShare: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      // icShare: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      mobileShare: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      mc: ['', [Validators.required, Validators.min(0), Validators.max(2)]],
      sc: ['', [Validators.required, Validators.min(0), Validators.max(3)]],
      cc: ['', [Validators.required, Validators.min(0), Validators.max(3)]],
      shareMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      cShareMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      msMaster:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      shareSuper:['0'],
      cShareSuper:['0'],
      mobileShareSuper:['100'],
      cshareSuper:['0'],
      casinoCheck:[true],
      shareStatus:[false]
      // shareStatus:[]
  });
  }
  PorulateSuperForm(data:any){
    if(this.SuperAgentUpdateForm){
      console.log('data',data)
      this.SuperAgentUpdateForm.patchValue({
        code:data.data.code,
        name:data.data.name,
        reference:data.data.reference,
        password:data.data.password,
        contactNo:data.data.contactNo,
        // currentLimit:data.currentLimit,
        share:data.data.share,
        cShare:data.data.cshare,
        mobileShare:data.data.mobileShare,
        shareMaster:data.data.shareMaster,
        cShareMaster:data.data.cShareMaster,
        msMaster:data.data.msMaster,
        casinoCheck:data.data.casinoCheck,
        shareStatus:data.data.shareStatus,
        mc:data.data.mc,
        sc:data.data.sc,
        cc:data.data.cc,
      })
    }
  }

  onSubmit(){
    this.isSuperLoading = true;
    // if (this.SuperAgentUpdateForm.valid && (this.getId !==''||this.getId!==undefined) ) {
    const formData: SuperAgent = this.SuperAgentUpdateForm.value;
     console.log(formData)
    this.superService.updateSuper(this.getId,formData).subscribe({
      next:(res)=>{
        console.log(res)
        this.isSuperLoading = false;
        this.toastService.show('Data Update Successfully', { classname: 'bg-success text-light', delay: 10000 });
        this.router.navigate(['/super-agent']);
      },error:(e)=>{
        console.log(e)
        if (e.error && e.error.errors) {
          this.serverErrors = e.error.errors;
        }
      }})
    // }
  }
}
