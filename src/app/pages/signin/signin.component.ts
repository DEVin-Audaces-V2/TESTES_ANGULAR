import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (!this.loginForm.valid) {
      console.log('Form inválido')
      return;
    }

    const { email, password } = this.loginForm.value;    
    if (email === 'user@mail.com' && password === '123456') {
      // console.log('Login success')
      this.router.navigateByUrl('/home')
    } else {
      console.log('Login failed')
    }
  }
}
