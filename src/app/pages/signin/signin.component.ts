import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === 'user@mail.com' && password === '123456') {
        console.log('Login success')
      } else {
        console.log('Login failed')
      }
    } 
  }
}
