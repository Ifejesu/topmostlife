import { Component, OnInit } from "@angular/core";
import { Data } from "src/app/providers/data";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-onesavingsaccount",
  templateUrl: "./onesavingsaccount.component.html",
  styleUrls: ["./onesavingsaccount.component.scss"],
})
export class OnesavingsaccountComponent implements OnInit {
  row: any = this.data.savingsStorage;
  oneSavingsForm: FormGroup;
  name: string;
  account_no: number;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private data: Data,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.row) {
      this.router.navigateByUrl("/savings-account");
    }
    this.name = this.row["surname"] + " " + this.row["other_names"];
    this.account_no = this.row["id"];

    this.oneSavingsForm = this.fb.group({
      id: this.row["id"],
      created: this.row["created"],
      amount: [this.row["amount"], Validators.required],
      officer_id: this.row["officer_id"],
      account_type: [this.row["account_type"], Validators.required],
      surname: [this.row["surname"], Validators.required],
      other_names: [this.row["other_names"], Validators.required],
      gender: [this.row["gender"], Validators.required],
      dob: [this.row["dob"], Validators.required],
      email: this.row["email"],
      phone: [this.row["phone"], Validators.required],
      image_url: this.row["image_url"],
      marital_status: [this.row["marital_status"], Validators.required],
      spouse_name: [this.row["spouse_name"], Validators.required],
      spouse_phone: [this.row["spouse_phone"], Validators.required],
      bank_name: [this.row["bank_name"], Validators.required],
      account_no: [this.row["account_no"], Validators.required],
      account_name: [this.row["account_name"], Validators.required],
      address: [this.row["address"], Validators.required],
      state: [this.row["state"], Validators.required],
      lga: [this.row["lga"], Validators.required],
      city_town: [this.row["city_town"], Validators.required],
      emp_status: [this.row["emp_status"], Validators.required],
      emp_occupation: [this.row["emp_occupation"], Validators.required],
      emp_name: [this.row["emp_name"], Validators.required],
      emp_address: [this.row["emp_address"], Validators.required],
      nok_surname: [this.row["nok_surname"], Validators.required],
      nok_other_names: [this.row["nok_other_names"], Validators.required],
      nok_gender: [this.row["nok_gender"], Validators.required],
      nok_dob: [this.row["nok_dob"], Validators.required],
      nok_relationship: [this.row["nok_relationship"], Validators.required],
      nok_phone: [this.row["nok_phone"], Validators.required],
      nok_address: [this.row["nok_address"], Validators.required],
      nok_state: [this.row["nok_state"], Validators.required],
      nok_lga: [this.row["nok_lga"], Validators.required],
      nok_city: [this.row["nok_city"], Validators.required],
    });
  }
  edit() {
    this.data.contributionStorage = {
      account_id: this.row['id'],
      surname: this.row['surname'],
      other_names: this.row['other_names']
    };
  }
  onSubmit() {
    console.log(this.oneSavingsForm.value);
    if (this.oneSavingsForm.valid) {
      this.api
        .updateAccount(this.oneSavingsForm.get("id").value, this.oneSavingsForm.value)
        .subscribe((data) => {
          if (data) {
            alert("Account updated successfully!");
            this.data.savingsStorage = this.oneSavingsForm.value;
            this.row = this.oneSavingsForm.value;
            this.ngOnInit();
          } else {
            alert(
              "There was an error submitting the data, try again. \nThanks!"
            );
          }
        });
    } else {
      console.log(this.oneSavingsForm);
      alert("One or more fields has error!");
    }
  }
}
