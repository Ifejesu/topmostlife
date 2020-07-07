import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-newsavingsaccount',
  templateUrl: './newsavingsaccount.component.html',
  styleUrls: ['./newsavingsaccount.component.scss']
})
export class NewsavingsaccountComponent implements OnInit {
  savingsForm: FormGroup;
  currentDate: Date;

  constructor(private fb: FormBuilder, private api: ApiService, private datePipe: DatePipe, private auth: AuthService) { }

  ngOnInit() {
    this.currentDate = new Date();

    this.savingsForm = this.fb.group({
      account_type: ['DC', Validators.required],
      amount: [null, Validators.required],
      balance: [0, Validators.required],
      paid_registration: ['No', Validators.required],
      registration_fee: [null, Validators.required],
      officer_id: this.auth.userId,
      created: this.datePipe.transform(this.currentDate, 'short'),
      surname: [null, Validators.required],
      other_names: [null, Validators.required],
      gender: ['Male', Validators.required],
      dob: [null, Validators.required],
      email: [' ', Validators.required],
      phone: [null, Validators.required],
      image_url: ['https://res.cloudinary.com/lilytechng/image/upload/v1591568659/1_cbpkio.jpg', Validators.required],
      marital_status: ['Single', Validators.required],
      spouse_name: [' ', Validators.required],
      spouse_phone: [' ', Validators.required],
      bank_name: [' ', Validators.required],
      account_no: [' ', Validators.required],
      account_name: [' ', Validators.required],
      address: [null, Validators.required],
      state: [null, Validators.required],
      lga: [null, Validators.required],
      city_town: [null, Validators.required],
      emp_status: ['Employed', Validators.required],
      emp_occupation: [' ', Validators.required],
      emp_name: [' ', Validators.required],
      emp_address: [' ', Validators.required],
      nok_surname: [' ', Validators.required],
      nok_other_names: [' ', Validators.required],
      nok_gender: ['Male', Validators.required],
      nok_dob: [' ', Validators.required],
      nok_relationship: [' ', Validators.required],
      nok_phone: [' ', Validators.required],
      nok_address: [' ', Validators.required],
      nok_state: [' ', Validators.required],
      nok_lga: [' ', Validators.required],
      nok_city: [' ', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.savingsForm.value);
    if (this.savingsForm.valid) {
      this.api.addAccount(this.savingsForm.value).subscribe(data => {
        if (data) {
          alert('Account created successfully!');
          this.ngOnInit();
        } else {
          alert('There was an error submitting the data, try again. \nThanks!');
        }
      }
      );
    } else {
      alert('One or more fields has error!');
    }
  }
}
