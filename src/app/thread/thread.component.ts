import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { SummonersService } from '../summoners.service';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as $ from 'jquery';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

	items: Observable<any>;
	threadName;
	commentText;
	commentName=[];
	commentInfo=[];

	constructor(private afAuth: AngularFireAuth, private authService:AuthService,private db: AngularFireDatabase,private route: ActivatedRoute) { }

	ngOnInit() {
		this.threadName = this.route.snapshot.paramMap.get('threadname');
		this.items = this.db.object("threads/"+this.threadName).valueChanges(); 
		this.items.subscribe(value=>{
			this.commentName=[];
			this.commentInfo=[];
			for(let key in value){
				this.commentName.push(value[key]['name']);
				this.commentInfo.push(value[key]['content']);
			}
		});
	}

	comment(username:string){
		let offset=1000000;
		let index = this.commentName.length+1+offset;
		this.db.object("threads/"+this.threadName+"/comment"+index).set({"name":"naijiao.zhang@duke.edu","content":this.commentText});
	}

}
