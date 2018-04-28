import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AuthService {



  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,private router: Router) {}
  
  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        console.log(value);
        this.router.navigateByUrl('/');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }
  emailSignup(email: string, password: string) {
    const itemRef = this.db.object('item/same');
    itemRef.set({name:"new name!"}).then(()=>console.log("hell yeah!"));
    // this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    //   .then(value => {
    //     console.log('Success', value);
    //     this.router.navigateByUrl('/profile');
    //   })
    //   .catch(error => {
    //     console.log('Something went wrong: ', error);
    //   });
  }
  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}