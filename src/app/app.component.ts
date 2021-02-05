import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = this.http.get<any[]>("http://localhost:3000");
  // readonly ROOT_URL;

  constructor(private http: HttpClient ) {
    // this.ROOT_URL = 'http://localhost:3000';
  }


}
