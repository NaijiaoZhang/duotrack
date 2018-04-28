import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email:string; 
  	password:string; 
 
	constructor(private authService:AuthService) { }

	ngOnInit() {
  	}

  	login(){
  		if(this.email!="" && this.password!=""){
  			this.authService.login(this.email,this.password);
  		}
  	}

  	register(){
  		//prolly needed additional regex
  		if(this.email!="" && this.password!=""){
  			this.authService.emailSignup(this.email,this.password);
  		}
  	}

}
