import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { SummonersService } from '../summoners.service';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
	summonerIgn:string; 
	items: Observable<any[]>;

	constructor(private summonersService: SummonersService, private db: AngularFireDatabase, private route: ActivatedRoute, private location:Location) { }

	ngOnInit() {
		this.route.queryParams.filter(params=>params.username).subscribe(params=>{
			this.summonerIgn = params["username"];
		});
		this.getDataFromDb(this.summonerIgn);
	}

	test(){
		console.log("helk")
	}

	getDataFromDb(summonerUsername:string){
		this.items = this.db.list(summonerUsername).valueChanges(); 
		this.items.subscribe( value =>{
			console.log(value)
			if(value.length == 0){
				this.grabDataFromRiot(summonerUsername);
			}
		});
	}

	grabDataFromRiot(summonerUsername:string){
		//must be replaced daily due to expiration
		let riotApiKey = "RGAPI-6048c7c7-a494-42b4-bd87-43524035440b";
		this.summonersService.getSummonerId(summonerUsername,riotApiKey);

	}



}
