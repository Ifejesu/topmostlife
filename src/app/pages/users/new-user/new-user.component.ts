import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  userName = this.auth.name;

  constructor(private fb: FormBuilder, private api: ApiService, private auth: AuthService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      role: ['basic', Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
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
      this.api.addUser(this.userForm.value)
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
