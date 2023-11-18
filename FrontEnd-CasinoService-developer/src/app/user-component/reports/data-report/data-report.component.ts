import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap'
import { Master,Super,Agent,Client, ReportTypesData, User, AllMSACReportData, AllMSACReport } from '../reports';
import { ReportsService } from '../reports.service';
import { DatePipe, formatDate } from '@angular/common';
@Component({
  selector: 'app-data-report',
  templateUrl: './data-report.component.html',
  styleUrls: ['./data-report.component.scss']
})
export class DataReportComponent implements OnInit {
  selectedDate: NgbDateStruct;
  master:Master;
  super:Super;
  agent:Agent;
  client:Client;
  totalItems: number = 10; // Total number of items
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  className: string;
  MasterForm: FormGroup;
  currentMaster:boolean =false;
  currentSuper:boolean =false;
  currentAgent:boolean =false;
  currentClient:boolean =false;
  MasterDataReport;
  reportTypesData:ReportTypesData[]=[];
  allDataUser:User[]=[];
  formattedDate: string;
  currentDateFrom;
  currentDateTo;
  AllMSACData : AllMSACReport;
  // masterData:AllMSACReportData[]=[];
  // superAgnetData:AllMSACReportData []=[]
  // agentData:AllMSACReportData[]=[];
  // clientData:AllMSACReportData[]=[]
  constructor(private route: ActivatedRoute,private router:Router,private getReportData:ReportsService, private datePipe: DatePipe) {


   }

  ngOnInit(): void {
    this.reportForm()
    const currentURL = this.route.snapshot.url.join('/');
    if(currentURL == 'data-report/master'){
      this.currentMaster = true;
      this.reportTypesData = []
      this.allDataUser = []
      this.getReportData.getMasterDataReport().subscribe((res)=>{
        this.allDataUser = res.allUsers;
        this.reportTypesData= res.reportTypes;
      })
    }else if(currentURL == 'data-report/super'){
        this.currentSuper = true;
        this.getReportData.getSuperDataReport().subscribe((res)=>{
        this.reportTypesData = [];
        this.allDataUser = [];
        this.allDataUser = res.allUsers;
        this.reportTypesData= res.reportTypes;
      })
    }else if(currentURL == 'data-report/agent'){
        this.currentAgent = true;
        this.getReportData.getAgentDataReport().subscribe((res)=>{
        this.reportTypesData = [];
        this.allDataUser = [];
        this.allDataUser = res.allUsers;
        this.reportTypesData = res.reportTypes;
      })
    }else if(currentURL == 'data-report/client'){
      this.currentClient = true;
      this.getReportData.getClientDataReport().subscribe((res)=>{
      this.reportTypesData = [];
      this.allDataUser = [];
        this.allDataUser = res.allUsers;
        this.reportTypesData= res.reportTypes;
      })
    }
  }
  reportForm(){
    this.currentDateFrom = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.currentDateTo = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.agent = new Agent();
    this.MasterForm = new FormGroup({
      user:new FormControl(),
      forReport:new FormControl('SUB'),
      reportType: new FormControl('All'),
      dateFrom:new FormControl(this.currentDateFrom),
      dateTo:new FormControl(this.currentDateFrom)
    });
  }
  onPageChange(event: number) {
    this.currentPage = 1;
  }
  onSubmit(){
    const currentURL = this.route.snapshot.url.join('/');
    if(currentURL == 'data-report/master'){
      console.log(this.MasterForm.value)
      this.getReportData.createMasterData(this.MasterForm.value).subscribe((res)=>{
        console.log(res.data.content)
        this.AllMSACData = null;
        this.AllMSACData = res;
      })
    }
    if(currentURL == 'data-report/super'){
      this.getReportData.createSuperData(this.MasterForm.value).subscribe((res)=>{
        console.log(res.data.content)
        this.AllMSACData = null;
        this.AllMSACData = res;
      })
    }
    if(currentURL == 'data-report/agent'){
      this.getReportData.createAgentData(this.MasterForm.value).subscribe((res)=>{
        console.log(res.data.content)
        this.AllMSACData = null;
        this.AllMSACData = res
      })
    }
    if(currentURL == 'data-report/client'){
      this.getReportData.createClientData(this.MasterForm.value).subscribe((res)=>{
        this.AllMSACData = null;
        this.AllMSACData = res
      })
    }
  }
}
