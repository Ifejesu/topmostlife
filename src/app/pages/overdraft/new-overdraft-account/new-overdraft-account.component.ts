import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-overdraft-account',
  templateUrl: './new-overdraft-account.component.html',
  styleUrls: ['./new-overdraft-account.component.css']
})
export class NewOverdraftAccountComponent implements OnInit {
  overdraftForm: FormGroup;
  currentDate: Date;

  constructor(private fb: FormBuilder, private api: ApiService, private datePipe: DatePipe, private auth: AuthService) { }

  ngOnInit() {
    this.currentDate = new Date();

    this.overdraftForm = this.fb.group({
      created: this.datePipe.transform(this.currentDate, 'short'),
      officer_id: this.auth.userId,
      name: [null, Validators.required],
      address: [null, Validators.required],
      purposeOfCash: [null, Validators.required],
      makeUpCharges: [null, Validators.required],
      phone1: [null, Validators.required],
      phone2: ' ',
      businessName: [null, Validators.required],
      typeOfBusiness: ' ',
      businessAddress: [null, Validators.required],
      duration: [null, Validators.required],
      facilityType: [null, Validators.required],
      natureOfFacility: [null, Validators.required],
      paybackTerms: [null, Validators.required],
      guarantorName: [null, Validators.required],
      guarantorAddress: [null, Validators.required],
      guarantorPhone1: [null, Validators.required],
      guarantorPhone2: [' ', Validators.required],
      guarantorAmount: [null, Validators.required],
      guarantorDuration: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.overdraftForm.value);
    if (this.overdraftForm.valid) {
      this.api.addOverdraft(this.overdraftForm.value).subscribe(data => {
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