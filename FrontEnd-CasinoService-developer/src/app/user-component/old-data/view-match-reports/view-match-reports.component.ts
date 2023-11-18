import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-match-reports',
  templateUrl: './view-match-reports.component.html',
  styleUrls: ['./view-match-reports.component.scss']
})
export class ViewMatchReportsComponent implements OnInit {
  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')

  }

}
