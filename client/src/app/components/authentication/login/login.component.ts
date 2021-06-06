import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public get f() {
    return this.loginForm.controls;
  }

  public logIn(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
    .login(this.loginForm.value)
    .subscribe((data: any) => {
      localStorage.setItem('token', data['token']);
      localStorage.setItem('username', data['username']);
      localStorage.setItem('isAdmin', data['isAdmin']);
      this.router.navigate(['/home']);
    });
  }
}
