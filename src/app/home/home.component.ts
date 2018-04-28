import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthService } from '../auth.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private afAuth: AngularFireAuth,private authService:AuthService) { }

  ngOnInit() {
  	let routerRef = this.router; 
  	$('#summonersubmit').keypress(function(e){
  		let code = e.keyCode;
  		if (code === 13){
  			let search = $('#search').val(); 
  			console.log('/user/'+search);
  			routerRef.navigate(['user',search]);
  			$('#summonersubmit').submit();
  		}
  	})
  	$("#summonersubmit").submit(function(e){
        e.preventDefault();
    });
  }

  logout(){
  	this.authService.logout(); 
  }

}
