import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  	userName:Observable<any>;
  	userData:Observable<any>;
  	loggedInUser;
  	loggedInData;

	constructor(private afAuth: AngularFireAuth, private authService:AuthService,private db: AngularFireDatabase) { }

	ngOnInit() {
		this.userName = this.afAuth.authState;
		this.userName.subscribe(value=>{
			this.loggedInUser = value.email;
			this.userData = this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')).valueChanges(); 
			this.userData.subscribe(val=>{
				this.loggedInData=val;
			});

		});
	}

	updateBio(){
		this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')+"/Bio").set(this.loggedInData.Bio);
	}

	updateIgn(){
		this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')+"/IGN").set(this.loggedInData.IGN);
	}

}
