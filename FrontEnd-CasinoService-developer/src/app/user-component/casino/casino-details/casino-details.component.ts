import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ledger, ledgerData } from '../casino.interface';

@Component({
  selector: 'app-casino-details',
  templateUrl: './casino-details.component.html',
  styleUrls: ['./casino-details.component.scss']
})
export class CasinoDetailsComponent implements OnInit {
  totalItems: number = 10; // Total number of items
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page
  pageSizeOptions: number[] = [5, 10, 20, 50];
  ledgerData : Ledger[] = ledgerData;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  updatePage(){}
  showDetails(id:number){
    this.router.navigate([`/casino/cdata/pl/${id}`])
  }

}
