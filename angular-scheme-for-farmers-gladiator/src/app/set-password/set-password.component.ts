import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
// email:string;
// type:string;
pass1:string;
message:string;
login: Login = new Login();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.login.id = sessionStorage.getItem('id');
    this.login.type = sessionStorage.getItem('type');
  }

  setPassword(){
    this.login.password =this.pass1;
    console.log(this.login);
    if(this.login.password == null){
      this.message="password field is empty";
    }
    else{
    this.loginService.setPassword(this.login).subscribe((response) => {
      console.log(response);
    });
  
    // this.message="password set";
    // console.log(this.email);
   
    // console.log(this.email);
    //call service
    // alert("Password set successfully, Please Login to continue");
    this.message="Password set, Login to continue";
    setTimeout(function(){​​
      // this.router.navigate(["login"]);
      window.location.replace("#");
   }​​, 1000);
    
  }
  }
}
