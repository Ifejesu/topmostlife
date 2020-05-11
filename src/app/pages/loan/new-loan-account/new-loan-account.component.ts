import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-loan-account',
  templateUrl: './new-loan-account.component.html',
  styleUrls: ['./new-loan-account.component.css']
})
export class NewLoanAccountComponent implements OnInit {
  loanForm: FormGroup;
  currentDate: Date;

  constructor(private fb: FormBuilder, private api: ApiService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.currentDate = new Date();

    this.loanForm = this.fb.group({
      created: this.datePipe.transform(this.currentDate, 'short'),
      amount: [null, Validators.required],
      officer_id: 1,
      account_type: ['DC', Validators.required],
      surname: [null, Validators.required],
      other_names: [null, Validators.required],
      gender: ['Male', Validators.required],
      dob: [null, Validators.required],
      email: ' ',
      phone: [null, Validators.required],
      image_url: ' ',
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
    console.log(this.loanForm.value);
    if (this.loanForm.valid) {
      this.api.addAccount(this.loanForm.value).subscribe(data => {
        if (data) {
          alert('Account created successfully!');
          this.ngOnInit();
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