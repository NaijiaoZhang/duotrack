import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SummonerComponent } from './summoner/summoner.component';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';
import { ProfileComponent } from './profile/profile.component';
import { VueprofComponent } from './vueprof/vueprof.component';

const routes:Routes = [
	{ path: '', component:HomeComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'user/:username',component:SummonerComponent},
	{ path: 'board', component: BoardComponent},
	{ path: 'thread/:threadname', component: ThreadComponent},
	{ path: 'profile/me', component: ProfileComponent},
	{ path:'profile/:user',component:VueprofComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
