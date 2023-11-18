import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserRole } from 'src/app/core/service/user-roles.enum';
import { LimitBodyModel } from 'src/app/sharedModel/LimitBodyModel';
import { ToastService } from 'src/app/toast.service';
import { SuperService } from '../super.service';

@Component({
  selector: 'app-limit-super-agent-master',
  templateUrl: './limit-super-agent-master.component.html',
  styleUrls: ['./limit-super-agent-master.component.scss']
})
export class LimitSuperAgentMasterComponent implements OnInit {
  selectedDate: NgbDateStruct;
  totalItems: number = 10; // Total number of items
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  isBodyLoading = false;
  limitId: string;
  page:number =1
  masterPaginable;
  superLimit;
  inputNumbers: { [key: number]: number } = {};
  inputErrors: { [key: number]: boolean } = {};
  limitPost:FormGroup;
  currentUserRole = UserRole.MASTER;
  isLoading=false;

  constructor(private route:ActivatedRoute,public toastService:ToastService,private superService:SuperService, private fb:FormBuilder,private authService:AuthService) {
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
    this.isBodyLoading =true;
    if(this.currentUserRole ===this.authService.getCurrentUserRole()){
      console.log('first');

      this.limitId = this.superService.masterId;
      this.superService.limitSuperMaster(this.limitId,page).subscribe(res=>{
        this.isBodyLoading =false;
        this.superLimit = res.data.content;
        this.isLoading =false;

      })
    }else{
      console.log('second');
      this.limitId = this.route.snapshot.paramMap.get('id');
      this.superService.limitSuperMaster(this.limitId,page).subscribe(res=>{
        this.isBodyLoading = false;
        this.superLimit = res.data.content;
        this.isLoading =false;

      })
    }
  }

  updatePage(page:number){
    this.isLoading =true;
    this.superLimit = [];
    this.loadLimit(page);
  }

  updateLimit(id: number, operation: number): void {
    let masterId= parseInt(this.limitId)
    let model: LimitBodyModel = {
      limit: this.inputNumbers[id],
      addOrMinus: operation,
      userId: id,
      parentId: masterId,
      isLedger: false
    }
    if (this.inputNumbers[id] != undefined || this.inputNumbers[id] != null) {
      this.superService.limitPatchValue(model)
      .subscribe({
        next:(res)=>{
          this.toastService.show('Data Added Success', { classname: 'bg-success text-light', delay: 1000 });

          console.log(res)
        },error:(e)=>{
          console.log(e)
          this.toastService.show(e.error.msg, { classname: 'bg-danger text-light', delay: 1500 });

        }
    })}
    }

}
