import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'File Manager';
  upload = 'Upload file';
  isShow = true;
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  ontoggleDisplay(){
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }

  onLogout() {
    this.authService.logout();
  }
}
