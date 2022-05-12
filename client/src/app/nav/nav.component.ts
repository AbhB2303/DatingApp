import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {} //class property to store info for two way binding
  //two way binding: info can be exchanged from component to html and vice versa
  //currentUser$: Observable<User>;
  constructor(public accountService: AccountService) {

  }

  ngOnInit(): void {
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(Response => {
      console.log(Response);
  
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();

  }

 
}
