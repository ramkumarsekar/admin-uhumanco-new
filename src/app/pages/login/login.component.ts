import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', Validators.required),
  });
  constructor(public router : Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  submit(form : NgForm){
    if (!this.loginForm.invalid) {
      if(this.loginForm.get('email').value == "Ramkumarsekar000@gmail.com" && this.loginForm.get('password').value == "ramkumar"){
        localStorage.setItem("is_logged","true");
        this.router.navigate(['/dashboard']);
      }
    }

  }

}
