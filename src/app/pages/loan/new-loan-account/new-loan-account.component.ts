import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-loan-account',
  templateUrl: './new-loan-account.component.html',
  styleUrls: ['./new-loan-account.component.css']
})
export class NewLoanAccountComponent implements OnInit {
  loanForm: FormGroup;
  currentDate: Date;

  constructor(private fb: FormBuilder, private api: ApiService, private datePipe: DatePipe, private auth: AuthService) { }

  ngOnInit() {
    this.currentDate = new Date();

    this.loanForm = this.fb.group({
      created: this.currentDate,
      officer_id: this.auth.userId,
      name: ['', Validators.required],
      maritalStatus: ['Married', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['Male', Validators.required],
      nationality: ['', Validators.required],
      noOfChildren: [' ', Validators.required],
      noOfChildrenInSchool: [' ', Validators.required],
      otherDependants: ' ',
      nameOfSpouse: [' ', Validators.required],
      residentialAddress: ' ',
      permanentAddress: [' ', Validators.required],
      houseType: ['Rented', Validators.required],
      lengthOfStay: [' ', Validators.required],
      phone: ['', Validators.required],
      nameOfBusiness: [' ', Validators.required],
      typeOfBusiness: [' ', Validators.required],
      address: [' ', Validators.required],
      closestMarket: [' ', Validators.required],
      locationType: [' ', Validators.required],
      bankName: [' ', Validators.required],
      bankAccountNo: [' ', Validators.required],
      bankBranch: [' ', Validators.required],
      bankAccountStatus: [' ', Validators.required],
      guarantor1Name: [' ', Validators.required],
      guarantor1Address: [' ', Validators.required],
      guarantor1Phone1: [' ', Validators.required],
      guarantor1Phone2: [' ', Validators.required],
      guarantor2Name: [' ', Validators.required],
      guarantor2Address: [' ', Validators.required],
      guarantor2Phone1: [' ', Validators.required],
      guarantor2Phone2: [' ', Validators.required],
      amountAppliedFor: [' ', Validators.required],
      loanPurpose: [' ', Validators.required],
      approvedLoanAmount: [' ', Validators.required],
      approvedTerms: [' ', Validators.required],
      interestRate: [' ', Validators.required],
      processingFees: ['', Validators.required],
      totalRepaymentAmount: ['', Validators.required],
      totalNoOfRepayment: ['', Validators.required],
      frequencyOfPayment: ['', Validators.required],
      penaltyRate: ['', Validators.required],
      disbursementDate: ['', Validators.required],
      instalmentAmount: ['', Validators.required],
      savingsDeposit: ['', Validators.required],
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