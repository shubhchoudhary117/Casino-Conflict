import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoGeneratePasswordService } from 'src/app/core/service/auto-generate-password.service';
import { ToastService } from 'src/app/toast.service';
import { Agent } from '../../agent/agent.interface';
import { ProviderService } from '../../ProviderPanel/provider.service';
import { Client, Provider } from '../client-panel.interface';
import { ClientPanelService } from '../client-panel.service';

@Component({
  selector: 'app-client-panel-modify',
  templateUrl: './client-panel-modify.component.html',
  styleUrls: ['./client-panel-modify.component.scss']
})
export class ClientPanelModifyComponent implements OnInit {
  clientPanelUpdateForm: FormGroup;
  submitted = false;
  isClientLoading =false;
  clientId;
  clientData:Client;
  isBodyLoading:boolean=false;
  providerData;
  serverErrors=null;
  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private clientService:ClientPanelService,
    private providerService:ProviderService,
    private toastService:ToastService,
    private autoGenerate:AutoGeneratePasswordService,
  ) { }

  ngOnInit(): void {
    this.isBodyLoading =true
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.clientService.getSingleClient(this.clientId).subscribe({
      next:(res)=>{
        this.isBodyLoading =false;
        this.addAgentVaildation();
        this.clientData = res.client;
        console.log(res.client.providerId)
        let providerId =res.client.providerId;
        this.providerService.getSingleProvider(providerId).subscribe({
          next:(res)=>{
          this.providerData = res.data
          console.log(res.data)

        },error:(e)=>{
          console.log(e)
        }})
        this.PorulateClientForm(res);

      },error:(e)=>{
        this.isBodyLoading =false;
        console.error('Error fetching client data:', e);
      }
    })
  }
  addAgentVaildation(){
    this.clientPanelUpdateForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
      reference: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("(^[A-Za-z0-9 ]+\$)")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
      contactNo: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      share: ['', [Validators.required, Validators.min(0), Validators.max(this.providerData?.share)]],
      // mobileShare: ['', [Validators.required, Validators.min(0), Validators.max(this.providerData?.mobileShare)]],
      // mc: ['', [Validators.required, Validators.min(0), Validators.max(this.providerData?.mc)]],
      // sc: ['', [Validators.required, Validators.min(0), Validators.max(this.providerData?.sc)]],
      // cc: ['', [Validators.required, Validators.min(0), Validators.max(this.providerData?.cc)]],
      // cShareSuper:['0'],
      // mobileShareSuper:['100'],
      // cshareSuper:['0'],
      // casinoCheck:[true],
      // shareStatus:[false]
  });
  }
  PorulateClientForm(data:any){
    if(this.clientPanelUpdateForm){
      console.log('data',data)
      this.clientPanelUpdateForm.patchValue({
        name:data.client.name,
        reference:data.client.reference,
        password:data.client.password,
        contactNo:data.client.contactNo,
        // currentLimit:data.currentLimit,
        share:data.client.share,
        // cShare:data.client.cshare,
        // mobileShare:data.client.mobileShare,
        // shareMaster:data.client.shareMaster,
        // cShareMaster:data.client.cShareMaster,
        // msMaster:data.client.msMaster,
        // casinoCheck:data.client.casinoCheck,
        // shareStatus:data.client.shareStatus,
        // mc:data.client.mc,
        // sc:data.client.sc,
        // cc:data.client.cc,
      })
    }
  }

  onSubmit(){
    this.isClientLoading = true;
    // if (this.SuperAgentUpdateForm.valid && (this.getId !==''||this.getId!==undefined) ) {
    const formData: Client = this.clientPanelUpdateForm.value;
     this.clientService.updateClient(this.clientId,formData).subscribe({
       next:(res)=>{
         this.isClientLoading = false;
        this.toastService.show('Data update Successfully', { classname: 'bg-success text-light', delay: 1000 });
        this.router.navigate(['/client-panel'])
       },error:(e)=>{
         console.log(e);
       }
     })
  }
  generatePassword(){}
}
