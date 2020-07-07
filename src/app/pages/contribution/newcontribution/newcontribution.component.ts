import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-newcontribution',
  templateUrl: './newcontribution.component.html',
  styleUrls: ['./newcontribution.component.scss']
})
export class NewcontributionComponent implements OnInit {
  contributionForm: FormGroup;
  currentDate: Date;
  options: any[] = [];
  row: any;
  balance: number;
  filteredOptions: Observable<any[]>;

  constructor(private fb: FormBuilder, private api: ApiService, private datePipe: DatePipe, private auth: AuthService) { }

  ngOnInit() {
    this.api.getAllAccounts().subscribe(res => {
      if (res) {
        this.options = res['data'];
        console.log(this.options);
      } else {
        console.log('Error loading data!');
      }
    });

    this.currentDate = new Date();

    this.contributionForm = this.fb.group({
      account_id: [null, Validators.required],
      credit: [null, Validators.required],
      debit: [0, Validators.required],
      balance: [0, Validators.required],
      charges: [0, Validators.required],
      date: this.datePipe.transform(this.currentDate, 'short'),
      officer_id: this.auth.userId,
      name: [null, Validators.required]
    });

    this.filteredOptions = this.contributionForm.controls['name'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.surname),
        map(name => name ? this._filter(name) : this.options.slice()),
        map(res => {
          this.contributionForm.controls['account_id'].setValue(this.myAccountNo(res[0]));
          return res;
        })
      );
  }

  displayFn(user: any): string {
    return user && user.surname ? user.surname + ' ' + user.other_names : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.surname.toLowerCase().indexOf(filterValue) === 0);
  }

  myAccountNo(user: any): any {
    return user ? user.id : '';
  }

  onSubmit() {
    this.api.getOneAccount(this.contributionForm.controls['account_id'].value).subscribe(res => {
      if (res) {
        this.row = res['data'];
        this.balance = this.row['balance'] + this.contributionForm.controls['credit'];
        this.contributionForm.controls['balance'].setValue(this.balance);
      } else {
        console.log('Error loading data!');
      }
    });

    if (this.contributionForm.valid) {
      this.api.addContribution(this.contributionForm.value).subscribe(data => {
        if (data) {
          alert('Contribution recorded successfully!');
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
