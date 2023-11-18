import { Component, OnInit } from '@angular/core';
import { SportDetails, sportDetailsData, Team, teamDetailsData } from '../game.interface';

@Component({
  selector: 'app-match-position',
  templateUrl: './match-position.component.html',
  styleUrls: ['./match-position.component.scss']
})
export class MatchPositionComponent implements OnInit {
  sportDetails: SportDetails[] = sportDetailsData;
  teamDetails:Team[]=teamDetailsData;
  constructor() { }

  ngOnInit(): void {
  }

}
