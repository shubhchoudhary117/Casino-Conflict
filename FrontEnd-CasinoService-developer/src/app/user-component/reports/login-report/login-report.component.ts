import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-report',
  templateUrl: './login-report.component.html',
  styleUrls: ['./login-report.component.scss']
})
export class LoginReportComponent implements OnInit {
  selectedDate: NgbDateStruct;
  totalItems: number = 10; // Total number of items
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  currentMaster:boolean =false;
  currentSuper:boolean =false;
  currentAgent:boolean =false;
  currentClient:boolean =false;
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    const currentURL = this.route.snapshot.url.join('/'); // Get the current route segments
    if(currentURL == 'login-report/master'){
      this.currentMaster = true;

    }else if(currentURL == 'login-report/super'){
      this.currentSuper = true;
    }
    else if(currentURL == 'login-report/agent'){
      this.currentAgent = true;
    }
    else if(currentURL == 'login-report/client'){
      this.currentClient = true;
    }
  }
  updatePage() {
    this.currentPage = 1; // Reset current page when changing items per page
  }

}
