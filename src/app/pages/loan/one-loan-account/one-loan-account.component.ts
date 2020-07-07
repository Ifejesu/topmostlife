import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/providers/data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-loan-account',
  templateUrl: './one-loan-account.component.html',
  styleUrls: ['./one-loan-account.component.css'],
})
export class OneLoanAccountComponent implements OnInit {
  row: any;
  oneLoanForm: FormGroup;
  name = '';
  loanId: number;
  balance: number;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loanId = params['id'];
    });

    this.api.getOneLoan(this.loanId).subscribe(res => {
      if (res) {
        this.row = res['message'];
        this.name = this.row['name'];
        this.balance = 0.0;
        this.oneLoanForm.setValue(res['message']);
      } else {
        console.log('Error loading data!');
      }
    });

    this.oneLoanForm = this.fb.group({
      id: this.loanId,
      created: ['', Validators.required],
      officer_id: ['', Validators.required],
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
    console.log(this.oneLoanForm.value);
    if (this.oneLoanForm.valid) {
      this.api
        .updateLoan(this.oneLoanForm.get('id').value, this.oneLoanForm.value)
        .subscribe((data) => {
          if (data) {
            alert('Loan Account updated successfully!');
          } else {
            alert(
              'There was an error submitting the data, try again. \nThanks!'
            );
          }
        });
    } else {
      console.log(this.oneLoanForm);
      alert('One or more fields has error!');
    }
  }
}
