import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-plus-minus',
  templateUrl: './session-plus-minus.component.html',
  styleUrls: ['./session-plus-minus.component.scss']
})
export class SessionPlusMinusComponent implements OnInit {
id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')

  }

}
