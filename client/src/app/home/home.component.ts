import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  //users: any;

  //constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // getUsers()
  // {
  //   //our response from api should be set to the users within the home component
  //   this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  // }

  cancelRegisterMode(event: boolean){
    //[usersFromHomeComponent]="users" in html
    this.registerMode = event;
  }
}
