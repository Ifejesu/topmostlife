import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newcontribution',
  templateUrl: './newcontribution.component.html',
  styleUrls: ['./newcontribution.component.scss'],
})
export class NewcontributionComponent implements OnInit {
  contributionForm: FormGroup;
  currentDate: Date;
  row: any;
  account_id: number;
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
        this.contributionForm.controls['name'].setValue(this.row['surname'] + ' ' + this.row['other_names']);
      } else {
        console.log('Error loading data!');
      }
    });

    this.contributionForm = this.fb.group({
      account_id: this.account_id,
      credit: [null, Validators.required],
      debit: 0,
      balance: this.balance,
      charges: 0,
      date: this.datePipe.transform(this.currentDate, 'short'),
      officer_id: this.auth.userId,
      name: '',
    });
  }

  onSubmit() {
    if (this.contributionForm.valid) {
      this.contributionForm.controls['balance'].setValue(this.balance + Number(this.contributionForm.controls['credit'].value));
      this.api.addContribution(this.contributionForm.value)
        .subscribe(data => {
          if (data) {
            alert('Contribution recorded successfully!');
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
