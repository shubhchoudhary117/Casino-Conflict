import { Component, OnInit, Provider } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoGeneratePasswordService } from 'src/app/core/service/auto-generate-password.service';
import { SubAdminModel } from 'src/app/sharedModel/SubAdminModel';
import { ToastService } from 'src/app/toast.service';
import { ProviderData } from '../provider.interface';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-management-create',
  templateUrl: './provider-management-create.component.html',
  styleUrls: ['./provider-management-create.component.scss']
})
export class ProviderManagementCreateComponent implements OnInit {
  providerManagementForm: FormGroup;
  submitted = false;
  isLoading = false;
  isBodyLoading:boolean = false;
  shareBackendError = '';
  cShareBackendError = '';
  mobileShareBackendError = '';
  subAdmin: SubAdminModel;
  serverErrors = null;
  constructor(
    private fb: FormBuilder,
    private providerService: ProviderService,
    private router: Router,
    public toastService: ToastService,
    private autoGenerate:AutoGeneratePasswordService
  ) { }

  ngOnInit(): void {
    this.isBodyLoading = true;
    this.providerService.getProviderSub().subscribe({
        next: (value) => {
          this.isBodyLoading = false
            this.subAdmin = value[0];
            this.initFormValidator();
        },
        error:(e)=>{
          console.log(e)
          this.isBodyLoading = false;
          this.toastService.show('Server Issue', { classname: 'bg-danger text-light', delay: 15000 });

        }
    })
}

initFormValidator(): void {
    this.providerManagementForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
        reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
        contactNo: [this.subAdmin.contactNo, [Validators.minLength(0), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
        // currentLimit: [this.subAdmin?.currentLimit, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.currentLimit)]],
        share: [this.subAdmin.share, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.share)]],
        cShare: [this.subAdmin.cshare, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.cshare)]],
        icShare: [this.subAdmin.icShare, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.icShare)]],
        mobileShare: [this.subAdmin.mobileShare, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.mobileShare)]],
        mc: [this.subAdmin.mc, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.mc)]],
        sc: [this.subAdmin.sc, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.sc)]],
        cc: [this.subAdmin.cc, [Validators.required, Validators.min(0), Validators.max(this.subAdmin.cc)]],
    });
}

onSubmit() {
    this.submitted = true;
    if (this.providerManagementForm.valid) {
        this.isLoading = true;
        const formData: ProviderData = this.providerManagementForm.value;
        console.log(formData)
        this.providerService.createProvider(formData)
            .subscribe({
                next: (res) => {
                    this.isLoading = false;
                    this.router.navigate(['/provider-panel']);
                    this.toastService.show('Data Added Successfully', { classname: 'bg-success text-light', delay: 1000 });

                },
                error: (e) => {
                    console.error(e)
                    console.error(e.errors)
                    this.toastService.show(e.error.msg, { classname: 'bg-danger text-light', delay: 15000 });
                    this.isLoading = false;
                    if (e.error && e.error.errors) {
                        this.serverErrors = e.error.errors;
                    }
                },
                complete: () => {
                    this.isLoading = false;
                    console.info('complete')
                }
            });

    }
}
generatePassword(){
  const randomPassword = this.autoGenerate.generateRandomPassword(8);
  this.providerManagementForm.get('password').setValue(randomPassword);
}

}
