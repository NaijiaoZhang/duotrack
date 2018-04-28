import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as $ from 'jquery';

@Injectable()
export class SummonersService {

	constructor(private db: AngularFireDatabase) { }

	getSummonerInfo(summonerUsername){
		console.log(summonerUsername);
	}
}
