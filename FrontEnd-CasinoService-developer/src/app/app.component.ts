import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { AuthService } from './core/service/auth.service';
import { SessionTimeoutService } from './core/service/session-timeout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'nobleui-angular';
  private ngUnsubscribe = new Subject<void>();
  private sessionTimeoutOccurred = false;
  constructor(
    private authService: AuthService,
    private sessionTimeoutService: SessionTimeoutService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((event: NavigationStart) => {
        // Check if the user is navigating to a different route
        if (!this.sessionTimeoutOccurred && event.url !== '/' && !this.authService.isLoggedIn$()) {
          // Perform the session timeout logic (e.g., logout)
          console.log('wordlksgf')
          this.authService.logout();
        }
      });

    // this.sessionTimeoutService.onTimeout().subscribe(() =>
    // {
    //   console.log('working1')
    //   // this.authService.logout();
    // })
    // window.addEventListener('mousemove', () => this.sessionTimeoutService.resetTimer());
    // window.addEventListener('keydown', () => this.sessionTimeoutService.resetTimer());

    // this.sessionTimeoutService.onTimeout().subscribe(() =>
    // {
    //   console.log('working')
    //   this.authService.logout();
    // })
    // window.addEventListener('mousemove', () => this.sessionTimeoutService.resetTimer());
    // window.addEventListener('keydown', () => this.sessionTimeoutService.resetTimer());
  };
  ngOnDestroy(): void {
    // this.sessionTimeoutService.
  }
}
