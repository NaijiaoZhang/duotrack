import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { SummonersService } from '../summoners.service';
import {AngularFireAuth} from 'angularfire2/auth';

import * as $ from 'jquery';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummonerComponent implements OnInit {
	summonerIgn:string; 
	items: Observable<any>;
	summonerObject; 
	mostPartner; 
	mostPartnerWL; 
	allPartnerRate=[];
	allPartnerNames=[];
	allPartnerTotal=0;
	netGain=0;


	constructor(private afAuth: AngularFireAuth,private dataService: SummonersService, private db: AngularFireDatabase, private route: ActivatedRoute, private location:Location) { }

	ngOnInit() {
		this.summonerIgn = this.route.snapshot.paramMap.get('username');
		this.getDataFromDb(this.summonerIgn);	
	}

	getDataFromDb(summonerUsername:string){
		this.items = this.db.object("summoners/"+summonerUsername).valueChanges(); 
		this.items.subscribe( value =>{
			this.summonerObject = value; 
			let totalDuo = 0;
			let maxDuo = 0; 
			let duoMost = "";
			for(var partner in value['partners']){
				totalDuo += value['partners'][partner]['win'];
				totalDuo += value['partners'][partner]['loss'];
				if(totalDuo>maxDuo){
					maxDuo = totalDuo; 
					totalDuo = 0; 
					duoMost = partner; 
					this.mostPartner = duoMost; 
				}
				this.allPartnerRate.push(value['partners'][partner]['win']+ value['partners'][partner]['loss']);
				this.allPartnerNames.push(partner);
				this.allPartnerTotal+=value['partners'][partner]['win'];
				this.allPartnerTotal+=value['partners'][partner]['loss'];
				this.netGain+=12*(value['partners'][partner]['win']-value['partners'][partner]['loss']);
			}
			this.mostPartnerWL = this.summonerObject['partners'][this.mostPartner]['win']/(this.summonerObject['partners'][this.mostPartner]['win']+this.summonerObject['partners'][this.mostPartner]['loss']);
		});
	}


}
