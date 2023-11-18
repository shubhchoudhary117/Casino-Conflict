import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-limit-client-master',
  templateUrl: './limit-client-master.component.html',
  styleUrls: ['./limit-client-master.component.scss']
})
export class LimitClientMasterComponent implements OnInit {

  selectedDate: NgbDateStruct;
  totalItems: number = 10; // Total number of items
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}
  updatePage(){}
}

