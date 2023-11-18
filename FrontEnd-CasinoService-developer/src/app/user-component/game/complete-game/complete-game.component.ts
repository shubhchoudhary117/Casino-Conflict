import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompleteGame, completeGameData, SportDetails, sportDetailsData } from '../game.interface';

@Component({
  selector: 'app-complete-game',
  templateUrl: './complete-game.component.html',
  styleUrls: ['./complete-game.component.scss']
})
export class CompleteGameComponent implements OnInit {
  sportDetails: CompleteGame[] = completeGameData;
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
