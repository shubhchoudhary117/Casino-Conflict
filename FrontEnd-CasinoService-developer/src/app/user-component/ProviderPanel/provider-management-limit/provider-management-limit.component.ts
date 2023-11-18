import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LimitBodyModel } from 'src/app/sharedModel/LimitBodyModel';
import { ToastService } from 'src/app/toast.service';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-management-limit',
  templateUrl: './provider-management-limit.component.html',
  styleUrls: ['./provider-management-limit.component.scss']
})
export class ProviderManagementLimitComponent implements OnInit {
  providerLimitForm: FormGroup;
  selectedDate: NgbDateStruct;
  providerLimit;
  providerPaginable;
  pageSizeOptions:number[]=[0,1,2,5,10,15];
  itemsPerPage;
  inputNumbers: { [key: number]: number } = {};
  inputErrors: { [key: number]: boolean } = {};
  limitPost: FormGroup;
  isLoading = false;
  isBodyLoading=false;
  constructor(
    private providerService: ProviderService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    public toastService:ToastService) {
    this.limitPost = this.fb.group({
      limit: new FormControl(''),
      userId: new FormControl(''),
      parentId: new FormControl(''),
      isLedger: new FormControl(''),
      addOrMinus: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.loadLimit(0);
  }
  loadLimit(page:number){
    this.isBodyLoading = true;
    this.providerService.getProviderLimit(page).subscribe( {
      next:(res)=>{
        this.isBodyLoading = false;
        this.toastService.show('Data Fetch Success', { classname: 'bg-success text-light', delay: 1000 });
        this.providerLimit = res.data.content;
        this.providerPaginable = res;
      },error:(e)=>{
        console.log(e);
        this.isBodyLoading = false;
        this.toastService.show(e.error.msg, { classname: 'bg-danger text-light', delay: 15000 });
      }})
  }
  updatePage(page:number){
    // this.isLoading =true
    this.providerLimit = [];
    this.providerPaginable = [];
    this.loadLimit(page);
  }

  updateLimit(id: number, operation: number): void {
    let model: LimitBodyModel = {
      addOrMinus: operation,
      limit: this.inputNumbers[id],
      userId: id,
      parentId: 0,
      isLedger: false
    }
    if (this.inputNumbers[id] === undefined || this.inputNumbers[id] === null) {
      this.inputErrors[id] = true;
    }
    if (this.inputNumbers[id] != undefined || this.inputNumbers[id] != null) {
      this.providerService.limitPatchValue(model)
        .subscribe(
          {
            next: (value) => {
              this.toastService.show('Data update Success', { classname: 'bg-success text-light', delay: 1000 });

            },
            error: (e) => {
              this.toastService.show('Limit has been fulfilled.', { classname: 'bg-danger text-light', delay: 1500 });

            },
            complete: () => {
            }
          }
        )
      }
    }

}
