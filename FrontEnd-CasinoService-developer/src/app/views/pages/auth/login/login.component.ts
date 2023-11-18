import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg;
  returnUrl: any;
  loginForm:FormGroup;
  serverErrors=null;
  validationError =false;
  constructor(private router: Router, private route: ActivatedRoute,private fb:FormBuilder,private authService:AuthService) {
    this.loginForm = this.fb.group({
      code: ['',[ Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl)
  }

  onLoggedin(e: Event) {
    if (this.loginForm.valid) {
      const { code, password } = this.loginForm.value;
      console.log(code,password)
      this.authService.login(code, password).subscribe({
        next:(res)=>{
          console.log(res)
          if (res.msg == 'invalid Usename or Passaword'){
            this.validationError = true;
              this.router.navigate(['/auth/login']);
          }
          this.router.navigate(['/']);
        },error:(e)=>{
          console.log(e.error)
          this.serverErrors = e.error

      }
      })
  }
}

}
