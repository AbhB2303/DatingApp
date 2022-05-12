import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //to receive users from home page we need input decorator
  @Output() cancelRegister = new EventEmitter(); //output property on data to cancel registration
  model: any = {};

  //inject accountService into this component
  constructor(private accountService : AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(Response => {
      console.log(Response);
      this.cancel(); //close the form
    }, error => {
      console.log(error); 
      this.toastr.error(error.error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false); //values emitted up to homepage on cancel
  }
}
