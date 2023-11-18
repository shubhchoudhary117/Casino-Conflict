import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientPlusMinus, clientPlusMinusDummyData } from '../ledger.interface';

@Component({
  selector: 'app-client-plus-minus',
  templateUrl: './client-plus-minus.component.html',
  styleUrls: ['./client-plus-minus.component.scss']
})
export class ClientPlusMinusComponent implements OnInit {
  clientPlusMinus:FormGroup
  allDataUser:ClientPlusMinus[]=[]
  currentDateFrom;
  currentDateTo;
  masterData;
  totalItems: number = 10; // Total number of items
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  constructor(private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.clientPlusMinusForm()
    this.allDataUser = clientPlusMinusDummyData;

  }
  clientPlusMinusForm(){
    this.currentDateFrom = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.currentDateTo = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.clientPlusMinus = new FormGroup({
      client:new FormControl(),
      dateFrom:new FormControl(this.currentDateFrom),
      dateTo:new FormControl(this.currentDateFrom)
    });
  }
  onSubmit(){}
}
