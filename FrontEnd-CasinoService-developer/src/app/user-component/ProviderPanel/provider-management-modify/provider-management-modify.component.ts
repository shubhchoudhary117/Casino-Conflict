import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubAdminModel } from 'src/app/sharedModel/SubAdminModel';
import { ToastService } from 'src/app/toast.service';
import { ProviderData } from '../provider.interface';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-management-modify',
  templateUrl: './provider-management-modify.component.html',
  styleUrls: ['./provider-management-modify.component.scss']
})
export class ProviderManagementModifyComponent implements OnInit {
  providerManagementUpdateForm: FormGroup;
  subAdmin: SubAdminModel;
  submitted = false;
  isLoading =false;
  isBodyLoading=false;
  myData
  getId:any;
  options: { label: string; value: string }[] = [];
  constructor(
              private providerService:ProviderService,
              private fb:FormBuilder,
              private router:Router,
              private route:ActivatedRoute,
              private toastService:ToastService
            ) { }

  ngOnInit(): void {
    this.isBodyLoading =true;
    this.providerService.getProviderSub().subscribe({
      next: (value) => {
        this.isBodyLoading = false;
        this.subAdmin = value[0];
      console.log(this.subAdmin)
        this.myData = value[0]
        this.modifyFormValidator()
        this.getId = this.route.snapshot.paramMap.get('id');
        console.log(this.getId)
        this.providerService.getSingleProvider(this.getId).subscribe({
          next:(res)=>{
            console.log(res)
            this.isBodyLoading = false;
            this.PorulateProviderForm(res);
          },error: (e) => {
            this.isBodyLoading =false;
              console.error(e.error.msg);
            }
        })
      }
    })
  }

  modifyFormValidator(){
    this.providerManagementUpdateForm = this.fb.group({
      code:[''],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
      contactNo: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      share: ['', [Validators.required, Validators.min(0), Validators.max(this.subAdmin?.share)]],
      // cShare: ['', [Validators.required, Validators.min(0), Validators.max(this.subAdmin.cshare)]],
      // icShare: ['', [Validators.required, Validators.min(0), Validators.max(this.subAdmin.icShare)]],
      // mobileShare: ['', [Validators.required, Validators.min(0), Validators.max(this.subAdmin.mobileShare)]],
      // mc: ['', [Validators.required, Validators.min(0), Validators.max(this.subAdmin.mc)]],
      // sc: ['', [Validators.required, Validators.min(0), Validators.max(this.subAdmin.sc)]],
      // cc: ['', [Validators.required, Validators.min(0), Validators.max(this.subAdmin.cc)]],
      // casinoCheck:[],
      // icCheck:[]
  });
  }

  PorulateProviderForm(data:any){
    if(this.providerManagementUpdateForm){
      this.providerManagementUpdateForm.patchValue({
        code:data.data.code,
        name:data.data.name,
        reference:data.data.reference,
        password:data.data.password,
        contactNo:data.data.contactNo,
        share:data.data.share,
        // cShare:data.data.cshare,
        // icShare:data.data.icShare,
        // mobileShare:data.data.mobileShare,
        // mc:data.data.mc,
        // sc:data.data.sc,
        // cc:data.data.cc,
        // casinoCheck:data.data.casinoCheck,
        // icCheck:data.data.icCheck
      })
    }
  }
  onSubmit() {
    this.isLoading = true;
    if (this.providerManagementUpdateForm.valid) {
      console.log('working')
      const formData: ProviderData = this.providerManagementUpdateForm.value;
      this.providerService.updateProvider(this.getId,formData).subscribe({
        next:(res)=>{
          this.isLoading = false;
          this.router.navigate(['/provider-panel']);
          this.toastService.show('Data Modefiy Success', { classname: 'bg-success text-light', delay: 1000 });

        },error:(e)=>{
          this.isLoading = false;
          this.toastService.show(e.error.msg, { classname: 'bg-danger text-light', delay: 15000 });
          console.log(e)
        }
      })
    }else{
      this.isLoading = false;
    }
  }
}
