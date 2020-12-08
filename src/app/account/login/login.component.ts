import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { AuthService } from '../../_services/auth.service';
import {TokenStorageService} from '../../_services/token-storage.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
   private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      if(this.roles.includes("ROLE_ADMIN")){
        this.router.navigate(['/admin']);
      }
      else
      {
        this.router.navigate(['/']);
      }

    }
  }


  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        console.log("ijdsfvomdop");
        alert("Succesful Login");

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        alert("Wrong Username or Password");
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
