import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SportDetails, sportDetailsData} from '../../game/game.interface'
@Component({
  selector: 'app-in-play-game',
  templateUrl: './in-play-game.component.html',
  styleUrls: ['./in-play-game.component.scss']
})
export class InPlayGameComponent implements OnInit {
  sportDetails: SportDetails[] = sportDetailsData;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  matchSessionPosition(id:Number){
    this.router.navigate([`/game/matchPosition/${id}`])
  }
  sessionPlusMinus(id:Number){
    this.router.navigate([`/game/sessionPlusMinus/${id}`])
  }
  displayMatchAndSessionBets(id:Number){
    this.router.navigate([`/game/displayMatchSession/${id}`])
  }
  displayMatchBets(id:Number){
    this.router.navigate([`/game/viewMatchReports/${id}`])
  }
  displaySessionBets(id:Number){
    this.router.navigate([`/game/viewSessionReport/${id}`])
  }
}
