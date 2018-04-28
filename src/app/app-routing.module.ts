import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SummonerComponent } from './summoner/summoner.component';

const routes:Routes = [
	{ path: '', component:HomeComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'user/:username',component:SummonerComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
