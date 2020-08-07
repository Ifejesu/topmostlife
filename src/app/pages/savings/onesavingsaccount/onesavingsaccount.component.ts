import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onesavingsaccount',
  templateUrl: './onesavingsaccount.component.html',
  styleUrls: ['./onesavingsaccount.component.scss'],
})
export class OnesavingsaccountComponent implements OnInit {
  row: any;
  oneSavingsForm: FormGroup;
  officer_id = 1;
  officer = ' ';
  account_no: number;
  name = ' ';
  balance = 0.00;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.account_no = params['id'];
    });

    this.api.getOneAccount(this.account_no).subscribe(res => {
      if (res) {
        this.row = res['data'];
        this.name = this.row['surname'] + ' ' + this.row['other_names'];
        this.balance = this.row['balance'];
        this.officer_id = this.row['officer_id'];
        this.oneSavingsForm.setValue(this.row);
        this.api.getOneUser(this.officer_id).subscribe(user => {
          if (user) {
            this.row = user['data'];
            this.officer = this.row['name'];
          } else {
            console.log('Error loading data!');
          }
        });
      } else {
        console.log('Error loading data!');
      }
    });

    this.oneSavingsForm = this.fb.group({
      id: 0,
      account_type: ['DC', Validators.required],
      amount: [null, Validators.required],
      balance: [0, Validators.required],
      paid_registration: ['No', Validators.required],
      registration_fee: [null, Validators.required],
      officer_id: [0, Validators.required],
      created: [' ', Validators.required],
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
    console.log(this.oneSavingsForm.value);
    if (this.oneSavingsForm.valid) {
      this.api
        .updateAccount(this.oneSavingsForm.get('id').value, this.oneSavingsForm.value)
        .subscribe((data) => {
          if (data) {
            alert('Account updated successfully!');
          } else {
            alert(
              'There was an error submitting the data, try again. \nThanks!'
            );
          }
        });
    } else {
      console.log(this.oneSavingsForm);
      alert('One or more fields has error!');
    }
  }
}
