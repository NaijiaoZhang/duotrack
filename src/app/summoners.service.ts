import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

@Injectable()
export class SummonersService {

	constructor(private db: AngularFireDatabase, private http:HttpClient) { 
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': 'my-auth-token',
				'Access-Control-Allow-Origin':'x-requested-with'
			})
		};
	}

	getSummonerId(summonerUsername:string, apiKey:string){
		$.ajax({
			url:"https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/kumori%20yuki?api_key=RGAPI-6048c7c7-a494-42b4-bd87-43524035440b",
			beforeSend: function(request){
				request.setRequestHeader("Access-Control-Allow-Origin","*");
				request.setRequestHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
				request.setRequestHeader("Access-Control-Allow-Headers", "Authorization, Lang");
			},
			method:'GET',
			dataType:'json',
			success: function(data){
				console.log("fd");
			}
		});
	}
		// this.http.get("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/kumori%20yuki?api_key=RGAPI-6048c7c7-a494-42b4-bd87-43524035440b").subscribe(
		// 	data =>{
		// 		console.log(data);
		// 	};
		// );

}
