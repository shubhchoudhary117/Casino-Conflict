import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject,timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionTimeoutService {
  private sessionTimeout: number = 10000;
  private logoutTimer: Observable<number>;
  private logoutTimer$ = new Subject<void>();
  private customActions: Subject<any> = new Subject<any>();
  constructor(private router: Router) {
    this.logoutTimer = timer(this.sessionTimeout);
    this.logoutTimer.subscribe(() => {
      this.logoutTimer$.next();
      // this.customActions.next(); // Notify subscribers about session timeout
    });
  }
  startTimer():void{
    this.logoutTimer.subscribe(() => {
      this.logoutTimer$.next();
    });
  }

  resetTimer(): void {
    this.logoutTimer$.next();
  }

  onTimeout(): Observable<void> {
    console.log(this.logoutTimer$)
    return this.logoutTimer$.asObservable();
  }
  addCustomAction(action: any): void {
    this.customActions.next(action);
  }
  getCustomActions(): Observable<any> {
    return this.customActions.asObservable();
  }
}
