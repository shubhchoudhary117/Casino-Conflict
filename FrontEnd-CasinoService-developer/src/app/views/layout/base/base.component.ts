import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { SessionTimeoutService } from 'src/app/core/service/session-timeout.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  isLoading: boolean;

  constructor(private router: Router,private authService: AuthService,
    private sessionTimeoutService: SessionTimeoutService) {

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    // this.isLoading = true;
    // this.sessionTimeoutService.onTimeout().subscribe(() =>
    // {
    //   console.log('working2');
    //   this.authService.logout();
    // })
    // window.addEventListener('mousemove', () => this.sessionTimeoutService.resetTimer());
    // window.addEventListener('keydown', () => this.sessionTimeoutService.resetTimer());
  };
}
