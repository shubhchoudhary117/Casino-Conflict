import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-session-plus-minus-select',
  templateUrl: './session-plus-minus-select.component.html',
  styleUrls: ['./session-plus-minus-select.component.scss']
})
export class SessionPlusMinusSelectComponent implements OnInit {
  id
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')
  }

}
