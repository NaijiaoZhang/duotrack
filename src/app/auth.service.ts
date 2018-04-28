import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  loggedInUser;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.loggedInUser = email;
        console.log(this.loggedInUser+" authlogin");
        this.router.navigateByUrl('/');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.db.object("profiles/"+email.replace(/\./g,'%2E')).set({"Bio":"N/A","IGN":"N/A"});
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  getLoggedInUser(){
    console.log(this.loggedInUser+" getLoggedIn");
    return this.loggedInUser; 
  }
}