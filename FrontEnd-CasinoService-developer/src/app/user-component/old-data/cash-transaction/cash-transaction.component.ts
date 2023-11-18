import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cash-transaction',
  templateUrl: './cash-transaction.component.html',
  styleUrls: ['./cash-transaction.component.scss']
})
export class CashTransactionComponent implements OnInit {

  selectedDate: NgbDateStruct;
  totalItems: number = 10; // Total number of items
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  currentMaster:boolean =false;
  currentSuper:boolean =false;
  currentProvider:boolean =false;
  currentClient:boolean =false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const currentURL = this.route.snapshot.url.join('/'); // Get the current route segments
    console.log(currentURL)
    // if(currentURL == 'master'){
    //   this.currentMaster =true;
    // }else if(currentURL == 'super'){
    //   this.currentSuper =true;
    // }
     if(currentURL == 'oldprovider'){
      this.currentProvider =true;
    }else if(currentURL == 'oldclient'){
      this.currentClient =true;
    }
  }
  updatePage() {
    this.currentPage = 1; // Reset current page when changing items per page
  }
}
