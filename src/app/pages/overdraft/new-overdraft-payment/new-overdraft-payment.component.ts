import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-overdraft-payment',
  templateUrl: './new-overdraft-payment.component.html',
  styleUrls: ['./new-overdraft-payment.component.css']
})
export class NewOverdraftPaymentComponent implements OnInit {
  overdraftPaymentForm: FormGroup;
  currentDate: Date;
  options: any[] = [];
  filteredOptions: Observable<any[]>;

  constructor(private fb: FormBuilder, private api: ApiService, private datePipe: DatePipe, private auth: AuthService) { }

  ngOnInit() {
    this.api.getAllAccounts().subscribe(data => {
      if (data) {
        this.options = data['message'];
        console.log(this.options)
      }
      else {
        console.log('Error loading data!')
      }
    });

    this.currentDate = new Date();

    this.overdraftPaymentForm = this.fb.group({
      date: this.datePipe.transform(this.currentDate, 'short'),
      amount: [null, Validators.required],
      officer_id: this.auth.userId,
      account_id: [null, Validators.required],
      name: [null, Validators.required]
    });

    this.filteredOptions = this.overdraftPaymentForm.controls['name'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.surname),
        map(name => name ? this._filter(name) : this.options.slice()),
        map(res => {
          this.overdraftPaymentForm.controls['account_id'].setValue(this.myAccountNo(res[0]));
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
    console.log(this.overdraftPaymentForm.value);
    if (this.overdraftPaymentForm.valid) {
      this.api.addContribution(this.overdraftPaymentForm.value).subscribe(data => {
        if (data) {
          alert('Contribution recorded successfully!');
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