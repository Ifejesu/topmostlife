import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-savings-withdraw',
  templateUrl: './savings-withdraw.component.html',
  styleUrls: ['./savings-withdraw.component.scss']
})
export class SavingsWithdrawComponent implements OnInit {
withdrawalForm: FormGroup;
  currentDate: Date;
  row: any;
  account_id: number;
  debit: number;
  totalDebit: number;
  balance = 0;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private datePipe: DatePipe,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.account_id = params['id'];
    });

    this.currentDate = new Date();

    this.api.getOneAccount(this.account_id).subscribe((res) => {
      if (res) {
        this.row = res['data'];
        this.balance = this.row['balance'];
        this.withdrawalForm.controls['balance'].setValue(this.row['balance']);
        this.withdrawalForm.controls['name'].setValue(this.row['surname'] + ' ' + this.row['other_names']);
      } else {
        console.log('Error loading data!');
      }
    });

    this.withdrawalForm = this.fb.group({
      account_id: this.account_id,
      credit: 0,
      debit: [null, Validators.required],
      balance: this.balance,
      charges: [null, Validators.required],
      date: this.datePipe.transform(this.currentDate, 'short'),
      officer_id: this.auth.userId,
      name: '',
    });

    this.withdrawalForm.controls['debit'].valueChanges.subscribe(debitAmt => {
      this.totalDebit = Number(debitAmt) + Number(this.withdrawalForm.controls['charges'].value);
      if (Number(this.withdrawalForm.controls['balance'].value) > this.totalDebit) {
        this.withdrawalForm.controls['balance'].setErrors({'incorrect': null});
      } else {
        this.withdrawalForm.controls['balance'].setErrors({'incorrect': true});
      }
      this.withdrawalForm.controls['balance'].updateValueAndValidity();
    });

    this.withdrawalForm.controls['charges'].valueChanges.subscribe(charges => {
      this.totalDebit = Number(charges) + Number(this.withdrawalForm.controls['debit'].value);
      if (Number(this.withdrawalForm.controls['balance'].value) > this.totalDebit) {
        this.withdrawalForm.controls['balance'].setErrors({'incorrect': null});
      } else {
        this.withdrawalForm.controls['balance'].setErrors({'incorrect': true});
      }
      this.withdrawalForm.controls['balance'].updateValueAndValidity();
    });

  }

  onSubmit() {
    if (this.withdrawalForm.valid) {
      this.debit = Number(this.withdrawalForm.controls['debit'].value) + Number(this.withdrawalForm.controls['charges'].value);
      this.withdrawalForm.controls['balance'].setValue(this.balance - this.debit);
      this.api.addContribution(this.withdrawalForm.value)
        .subscribe((data) => {
          if (data) {
            alert('Withdrawal processed successfully!');
            this.router.navigateByUrl('/savings-account');
          } else {
            alert(
              'There was an error submitting the data, try again. \nThanks!'
            );
          }
        });
    } else {
      alert('One or more fields has error!');
    }
  }
}
