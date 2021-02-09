import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {User} from './user';

@Injectable()
export class AuthService {
  private LoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.LoggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login (user: User) {
    if(user.userName !== '' && user.password !== '' ) {
      this.LoggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.LoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
