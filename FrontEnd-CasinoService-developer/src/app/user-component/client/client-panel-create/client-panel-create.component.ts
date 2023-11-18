import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { AutoGeneratePasswordService } from 'src/app/core/service/auto-generate-password.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { ToastService } from 'src/app/toast.service';
import { Client } from '../client-panel.interface';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-panel-create',
  templateUrl: './client-panel-create.component.html',
  styleUrls: ['./client-panel-create.component.scss']
})
export class ClientPanelCreateComponent implements OnInit {

  clientAddForm: FormGroup;
  submitted = false;
  isClientLoading =false;
  providerId;
  providerData
  serverErrors=null;
  constructor(
              private fb: FormBuilder,
              private route:ActivatedRoute,
              private router:Router,
              private clientService:ClientService,
              private authService:AuthService,
              private toastService:ToastService,
              private autoGenerate:AutoGeneratePasswordService,

            ) { }

  ngOnInit(): void {
    if(UserRole.PROVIDER == this.authService.getCurrentUserRole()){
      this.providerId = this.clientService.providerId;
      this.clientService.getProviderDataById(this.providerId).subscribe({
        next:(res)=>{
          console.log(res)
        this.providerData = res.data;
        this.addClientValidation();
        this.toastService.show('Data Added SuccessFully', { classname: 'bg-success text-light', delay: 1000 });
      },error:(e)=>{
        console.log(e)
      }
    })
    }else{
      this.providerId = this.route.snapshot.paramMap.get('id');
      console.log(this.providerId)
      this.clientService.getProviderDataById(this.providerId).subscribe({
        next:(res)=>{
          console.log( res)

          console.log(typeof res._id)
        this.providerData = res.data;
        this.addClientValidation()
      },error:(e)=>{
        console.log(e)
      }
    })
    }
  }

  addClientValidation(){
    this.clientAddForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
      reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
      contactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      share: ['', [Validators.required, Validators.min(0), Validators.max(this.providerData.share)]],

  });
  }
  onSubmit()
  {
    this.submitted = true;
    if (this.clientAddForm.valid) {
      const formData: Client = this.clientAddForm.value;
      this.clientService.createClient(this.providerId,formData)
              .subscribe({
                  next: (v) => {
                    this.isClientLoading= false;
                    this.router.navigate(['/client-panel']);
                    console.log(v)
                  },
                  error: (e) => {
                    console.error(e)
                    console.error(e.error.msg);
                    this.isClientLoading= false;
                    if (e.error && e.error.errors) {
                      this.serverErrors = e.error.errors;
                    }
                  },
                  complete: () => {
                    this.isClientLoading= false;
                    console.info('complete')
                  }
              });

  }
}
generatePassword(){
  const randomPassword = this.autoGenerate.generateRandomPassword(8);
  this.clientAddForm.get('password').setValue(randomPassword);
}
}
