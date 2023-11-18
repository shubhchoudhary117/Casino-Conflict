import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-session-bit',
  templateUrl: './display-session-bit.component.html',
  styleUrls: ['./display-session-bit.component.scss']
})
export class DisplaySessionBitComponent implements OnInit {
  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')
  }
}
