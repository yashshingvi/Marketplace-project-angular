import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  message: string;
  userType = ['FARMER', 'BIDDER', 'ADMIN'];
  userTypes = ['FARMER', 'BIDDER'];
  regType: string;
  constructor(private loginService: LoginService, private router: Router) {}
  loginCheck() {
    // alert(JSON.stringify(this.login));
    this.loginService.login(this.login).subscribe((response) => {
      console.log(response);
      if (response.status == 'SUCCESS') {
        let id = response.id;
        this.message = response.message;
        sessionStorage.setItem('id', String(this.login.id)); //email
        sessionStorage.setItem('lid', String(id)); //farmer/bidder ID
        // sessionStorage.setItem("email", String(id));

        if (id == 1) {
          this.router.navigate(['dashboard']);
        } else if (this.login.type == 'FARMER') {
          this.router.navigate(['farmerDashboard']);
          console.log('farmer login pg');
          sessionStorage.setItem('type', 'FARMER');
        } else if (this.login.type == 'BIDDER') {
          console.log('bidder login pg');
          this.router.navigate(['bidderDashboard']);
         
          sessionStorage.setItem('type', 'BIDDER');
        }
        //redirect to respective dashboards
        //forget pwd and change pwd left yet
        // this.router.navigate(["dashboard"]);
      } else {
        this.message = response.message;
      }
    });
  }
  register() {
    if (this.regType == 'FARMER') {
      this.router.navigate(['farmerRegistration']);
    } else if (this.regType == 'BIDDER') {
      this.router.navigate(['bidderRegistration']);
    } else {
      this.message = 'Select user type to register';
    }
  }

  ngOnInit(): void {}
}
