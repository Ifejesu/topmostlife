import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-savings-profile',
  templateUrl: './savings-profile.component.html',
  styleUrls: ['./savings-profile.component.css']
})
export class SavingsProfileComponent implements OnInit {

  row: any;
  officer_id = 1;
  officer = ' ';
  account_id: number;
  name = ' ';
  balance = 0.00;
  account_type = ' ';
  amount = 0.00;
  paid_registration = ' ';
  registration_fee = 0.00;
  created = ' ';
  gender = ' ';
  dob = ' ';
  email = ' ';
  phone = ' ';
  image_url = ' ';
  marital_status = ' ';
  spouse_name = ' ';
  spouse_phone = ' ';
  bank_name = ' ';
  account_no = ' ';
  account_name = ' ';
  address = ' ';
  state = ' ';
  lga = ' ';
  city_town = ' ';
  emp_status = ' ';
  emp_occupation = ' ';
  emp_name = ' ';
  emp_address = ' ';
  nok_name = ' ';
  nok_gender = ' ';
  nok_dob = ' ';
  nok_relationship = ' ';
  nok_phone = ' ';
  nok_address = ' ';
  nok_state = ' ';
  nok_lga = ' ';
  nok_city = ' ';

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.account_id = params['id'];
    });

    this.api.getOneAccount(this.account_id).subscribe(res => {
      if (res) {
        this.row = res['data'];
        this.name = this.row['surname'] + ' ' + this.row['other_names'];
        this.balance = this.row['balance'];
        this.officer_id = this.row['officer_id'];
        this.account_type = this.row['account_type'];
        this.amount = this.row['amount'];
        this.paid_registration = this.row['paid_registration'];
        this.registration_fee = this.row['registration_fee'];
        this.created = this.row['created'];
        this.gender = this.row['gender'];
        this.dob = this.row['dob'];
        this.email = this.row['email'];
        this.phone = this.row['phone'];
        this.image_url = this.row['image_url'];
        this.marital_status = this.row['marital_status'];
        this.spouse_name = this.row['spouse_name'];
        this.spouse_phone = this.row['spouse_phone'];
        this.bank_name = this.row['bank_name'];
        this.account_no = this.row['account_no'];
        this.account_name = this.row['account_name'];
        this.address = this.row['address'];
        this.state = this.row['state'];
        this.lga = this.row['lga'];
        this.city_town = this.row['city_town'];
        this.emp_status = this.row['emp_status'];
        this.emp_occupation = this.row['emp_occupation'];
        this.emp_name = this.row['emp_name'];
        this.emp_address = this.row['emp_address'];
        this.nok_name = this.row['nok_surname'] + ' ' + this.row['nok_other_names'];
        this.nok_gender = this.row['nok_gender'];
        this.nok_dob = this.row['nok_dob'];
        this.nok_relationship = this.row['nok_relationship'];
        this.nok_phone = this.row['nok_phone'];
        this.nok_address = this.row['nok_address'];
        this.nok_state = this.row['nok_state'];
        this.nok_lga = this.row['nok_lga'];
        this.nok_city = this.row['nok_city'];

        this.api.getOneUser(this.officer_id).subscribe(user => {
          if (user) {
            this.row = user['data'];
            this.officer = this.row['name'];
          } else {
            console.log('Error loading data!');
          }
        });
      } else {
        console.log('Error loading data!');
      }
    });
  }
}
