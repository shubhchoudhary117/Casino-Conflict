import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OldSportGame, oldSportGameData } from '../old-data.interface';

@Component({
  selector: 'app-sport-game',
  templateUrl: './sport-game.component.html',
  styleUrls: ['./sport-game.component.scss']
})
export class SportGameComponent implements OnInit {
  sportDetails: OldSportGame[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.sportDetails = oldSportGameData;
  }
  matchSessionPosition(id:Number){
    this.router.navigate([`/old/game/oldGame/plusMinusSelect/${id}`])
  }
  displayMatchAndSessionBets(id:Number){
    this.router.navigate([`/old/game/oldGame/displayMatchSession/${id}`])
  }
  sessionPlusMinus(id:Number){
    this.router.navigate([`/old/game/oldGame/viewMatchReport/${id}`])
  }
  displayMatchBets(id:Number){
    this.router.navigate([`/old/game/oldGame/viewSessionReport/${id}`])
  }
  displaySessionBets(id:Number){
    this.router.navigate([`/old/game/oldGame/viewSessionReport/${id}`])

  }
}
