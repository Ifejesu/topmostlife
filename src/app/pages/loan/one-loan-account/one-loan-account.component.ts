import { Component, OnInit } from "@angular/core";
import { Data } from "src/app/providers/data";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-one-loan-account',
  templateUrl: './one-loan-account.component.html',
  styleUrls: ['./one-loan-account.component.css']
})
export class OneLoanAccountComponent implements OnInit {
  row: any = this.data.loanStorage;
  oneLoanForm: FormGroup;
  name: string;
  loanId: number;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private data: Data,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.row) {
      this.router.navigateByUrl("/loan-account");
    }
    this.name = this.row["name"];
    this.loanId = this.row["id"];

    this.oneLoanForm = this.fb.group({
      id: this.row["id"],
      created: this.row["created"],
      officer_id: this.row["officer_id"],
      name: [this.row["name"], Validators.required],
      maritalStatus: [this.row["maritalStatus"], Validators.required],
      dateOfBirth: [this.row["dateOfBirth"], Validators.required],
      nationality: [this.row["nationality"], Validators.required],
      noOfChildren: [this.row["noOfChildren"], Validators.required],
      noOfChildrenInSchool: [this.row["noOfChildrenInSchool"], Validators.required],
      otherDependants: this.row["otherDependants"],
      nameOfSpouse: [this.row["nameOfSpouse"], Validators.required],
      residentialAddress: this.row["residentialAddress"],
      permanentAddress: [this.row["permanentAddress"], Validators.required],
      houseType: [this.row["houseType"], Validators.required],
      lengthOfStay: [this.row["lengthOfStay"], Validators.required],
      phone: [this.row["phone"], Validators.required],
      nameOfBusiness: [this.row["nameOfBusiness"], Validators.required],
      typeOfBusiness: [this.row["typeOfBusiness"], Validators.required],
      address: [this.row["address"], Validators.required],
      closestMarket: [this.row["closestMarket"], Validators.required],
      locationType: [this.row["locationType"], Validators.required],
      bankName: [this.row["bankName"], Validators.required],
      bankAccountNo: [this.row["bankAccountNo"], Validators.required],
      bankBranch: [this.row["bankBranch"], Validators.required],
      bankAccountStatus: [this.row["bankAccountStatus"], Validators.required],
      guarantor1Name: [this.row["guarantor1Name"], Validators.required],
      guarantor1Address: [this.row["guarantor1Address"], Validators.required],
      guarantor1Phone1: [this.row["guarantor1Phone1"], Validators.required],
      guarantor1Phone2: [this.row["guarantor1Phone2"], Validators.required],
      guarantor2Name: [this.row["guarantor2Name"], Validators.required],
      guarantor2Address: [this.row["guarantor2Address"], Validators.required],
      guarantor2Phone1: [this.row["guarantor2Phone1"], Validators.required],
      guarantor2Phone2: [this.row["guarantor2Phone2"], Validators.required],
      amountAppliedFor: [this.row["amountAppliedFor"], Validators.required],
      loanPurpose: [this.row["loanPurpose"], Validators.required],
      approvedLoanAmount: [this.row["approvedLoanAmount"], Validators.required],
      approvedTerms: [this.row["approvedTerms"], Validators.required],
      interestRate: [this.row["interestRate"], Validators.required],
      processingFees: [this.row["processingFees"], Validators.required],
      totalRepaymentAmount: [this.row["totalRepaymentAmount"], Validators.required],
      totalNoOfRepayment: [this.row["totalNoOfRepayment"], Validators.required],
      frequencyOfPayment: [this.row["frequencyOfPayment"], Validators.required],
      penaltyRate: [this.row["penaltyRate"], Validators.required],
      disbursementDate: [this.row["disbursementDate"], Validators.required],
      instalmentAmount: [this.row["instalmentAmount"], Validators.required],
      savingsDeposit: [this.row["savingsDeposit"], Validators.required],
    });
  }
  edit() {
    this.data.loanPaymentStorage = {
      loanId: this.row['id'],
      name: this.row['name']
    };
  }
  onSubmit() {
    console.log(this.oneLoanForm.value);
    if (this.oneLoanForm.valid) {
      this.api
        .updateLoan(this.oneLoanForm.get("id").value, this.oneLoanForm.value)
        .subscribe((data) => {
          if (data) {
            alert("Loan Account updated successfully!");
            this.data.loanStorage = this.oneLoanForm.value;
            this.row = this.oneLoanForm.value;
            this.ngOnInit();
          } else {
            alert(
              "There was an error submitting the data, try again. \nThanks!"
            );
          }
        });
    } else {
      console.log(this.oneLoanForm);
      alert("One or more fields has error!");
    }
  }
}
