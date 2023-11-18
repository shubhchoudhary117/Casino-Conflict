import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match-session',
  templateUrl: './display-match-session.component.html',
  styleUrls: ['./display-match-session.component.scss']
})
export class DisplayMatchSessionComponent implements OnInit {
  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')
  }
}
