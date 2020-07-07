import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  userName = this.auth.name;

  constructor(private fb: FormBuilder, private api: ApiService, private auth: AuthService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: this.auth.userId,
      role: this.auth.role,
      name: [this.auth.name, Validators.required],
      email: [this.auth.email, Validators.required],
      password: [null, Validators.required],
      cPassword: [null, Validators.required],
    }, {validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const pass = group.get('password').value;
  const cPass = group.get('cPassword').value;

  return pass === cPass ? null : { notSame: true };
}

  onSubmit() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.api.updateUser(this.userForm.get('id').value, this.userForm.value)
        .subscribe((data) => {
          if (data) {
            alert('Profile updated successfully!');
            this.ngOnInit();
          } else {
            alert(
              'There was an error submitting the data, try again. \nThanks!'
            );
          }
        });
    } else {
      console.log(this.userForm);
      alert('One or more fields has error!');
    }
  }
}
