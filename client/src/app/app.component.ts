import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //uses lifecycle events
  title = 'The Dating App';
  users: any; //user can be any data type


  //dependency injection
  constructor(private http: HttpClient) {} //naturally asynchronous



  ngOnInit() { //lifecycle even of initilization
   this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}


