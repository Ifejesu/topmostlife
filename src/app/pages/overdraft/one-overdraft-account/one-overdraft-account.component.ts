import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/providers/data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-overdraft-account',
  templateUrl: './one-overdraft-account.component.html',
  styleUrls: ['./one-overdraft-account.component.css']
})
export class OneOverdraftAccountComponent implements OnInit {
  row: any = this.data.overdraftStorage;
  oneOverdraftForm: FormGroup;
  name: string;
  overdraftId: number;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private data: Data,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.row) {
      this.router.navigateByUrl('/overdraft-account');
    }
    this.name = this.row['name'];
    this.overdraftId = this.row['id'];

    this.oneOverdraftForm = this.fb.group({
      id: this.row['id'],
      created: this.row['created'],
      officer_id: this.row['officer_id'],
      name: [this.row['name'], Validators.required],
      address: [this.row['address'], Validators.required],
      purposeOfCash: [this.row['purposeOfCash'], Validators.required],
      makeUpCharges: [this.row['makeUpCharges'], Validators.required],
      phone1: [this.row['phone1'], Validators.required],
      phone2: this.row['phone2'],
      businessName: [this.row['businessName'], Validators.required],
      typeOfBusiness: this.row['typeOfBusiness'],
      businessAddress: [this.row['businessAddress'], Validators.required],
      duration: [this.row['duration'], Validators.required],
      facilityType: [this.row['facilityType'], Validators.required],
      natureOfFacility: [this.row['natureOfFacility'], Validators.required],
      paybackTerms: [this.row['paybackTerms'], Validators.required],
      guarantorName: [this.row['guarantorName'], Validators.required],
      guarantorAddress: [this.row['guarantorAddress'], Validators.required],
      guarantorPhone1: [this.row['guarantorPhone1'], Validators.required],
      guarantorPhone2: [this.row['guarantorPhone2'], Validators.required],
      guarantorAmount: [this.row['guarantorAmount'], Validators.required],
      guarantorDuration: [this.row['guarantorDuration'], Validators.required]
    });
  }
  edit() {
    this.data.overdraftPaymentStorage = {
      overdraftId: this.row['id'],
      name: this.row['name']
    };
  }
  onSubmit() {
    console.log(this.oneOverdraftForm.value);
    if (this.oneOverdraftForm.valid) {
      this.api
        .updateOverdraft(this.oneOverdraftForm.get('id').value, this.oneOverdraftForm.value)
        .subscribe((data) => {
          if (data) {
            alert('Account updated successfully!');
            this.data.overdraftStorage = this.oneOverdraftForm.value;
            this.row = this.oneOverdraftForm.value;
            this.ngOnInit();
          } else {
            alert(
              'There was an error submitting the data, try again. \nThanks!'
            );
          }
        });
    } else {
      console.log(this.oneOverdraftForm);
      alert('One or more fields has error!');
    }
  }
}
