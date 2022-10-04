import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    'password': new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  submit(form : NgForm){
    debugger
    if (this.loginForm.invalid) {
    }

  }

}
