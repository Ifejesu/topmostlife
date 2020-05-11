import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentDate: Date;

  constructor(private fb: FormBuilder, private api: ApiService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.email],
      password: [null, Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.api.login(this.loginForm.value).subscribe(data => {
        if (data) {
          this.auth.token = data['token'];
          this.auth.userId = data['userId'];
          this.auth.role = data['role'];
          this.auth.name = data['name'];
          this.auth.role$.next(data['role']);
          this.auth.isAuth$.next(true);
          this.router.navigate(['/dashboard']);
        }
        else {
          alert('There was an error submitting the data, try again. \nThanks!');
        }
      }
      );
    }
    else {
      alert('One or more fields has error!');
    }
  }
}