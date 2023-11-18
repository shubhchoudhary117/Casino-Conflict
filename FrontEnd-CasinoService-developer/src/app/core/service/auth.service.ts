import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { UserRole } from './user-roles.enum';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { userModel } from './user.model';
import { SessionTimeoutService } from './session-timeout.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$=new BehaviorSubject<boolean>(false);
  private isAuthenticate = false;
  public isAuthenticateMaster = false;
  public currentUserSubject: BehaviorSubject<UserRole> = new BehaviorSubject<UserRole>(null);
  public userRole: UserRole | null = null;
  public currentUser: Observable<any>;
  private baseUrl = environment.apiUrl;
  private authToken: string | null = null;
  user!:any;
  refreshInterval = 15 * 60 * 1000; // 15 minutes
  constructor(private http:HttpClient,private router:Router,private sessionTimeoutService: SessionTimeoutService) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
    const storedToken = localStorage.getItem('token')
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!));
    if(storedToken){
      this._isLoggedIn$.next(true);
    }
  }
  get token():any{
    return localStorage.getItem('token')
  }
  login(code: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { code, password }).pipe(map(response=>{
      console.log(response)
      if (response && response.token) {
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', response.token);
        localStorage.setItem('currentUser', JSON.stringify(response));
        localStorage.setItem('role', response.role);
        this.userRole = response.role;
        this.authToken = response.token;
        if(this.userRole ==='ADMIN'){
          this.isAuthenticate = true;
        }else if(this.userRole === "PROVIDER"){
          console.log(response)
          this.isAuthenticateMaster = true;
          localStorage.setItem('providerId',response.providerId);
        }else if(this.userRole == "SUPER"){
          localStorage.setItem('superId',response.id);
        }else if(this.userRole == 'AGENT'){
          localStorage.setItem('agentId',response.id)
        }
        this._isLoggedIn$.next(true)
        this.user = this.getUser(response.token);
      }
      return response;
    }))
  }

  logout(): void {
    console.log('logout working')
    localStorage.removeItem('currentUser');
    this.isAuthenticate = false;
    this.userRole = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('masterId');
    localStorage.removeItem('superId');

    // localStorage.removeItem('isLoggedin');
  }

   isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
}
  getCurrentUserRole(){
    return localStorage.getItem('role');
  }
  getProviderId(){
    return localStorage.getItem('providerId')
  }
  private getUser(token:string){
    const splitToken = token
    console.log(typeof splitToken)
  }


  getCurrentUser(): string | null{
    let data = localStorage.getItem('token')
    return this.authToken = data;
  }
  getRole(): string {
    return this.userRole;
  }

}
