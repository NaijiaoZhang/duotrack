import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vueprof',
  templateUrl: './vueprof.component.html',
  styleUrls: ['./vueprof.component.css']
})
export class VueprofComponent implements OnInit {

	email;
	dataObs:Observable<any>;
	data;
	constructor(private afAuth: AngularFireAuth, private authService:AuthService,private db: AngularFireDatabase,private route: ActivatedRoute) { }

	ngOnInit() {
		this.email = this.route.snapshot.paramMap.get('user');
		this.dataObs=this.db.object("profiles/"+this.email.replace(/\./g,'%2E')).valueChanges(); 
		this.dataObs.subscribe(value=>{
			this.data=value;
		});
	}

}
