import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onecontribution',
  templateUrl: './onecontribution.component.html',
  styleUrls: ['./onecontribution.component.scss']
})
export class OnecontributionComponent implements OnInit {
  displayedColumns: string[] = ['date', 'credit', 'debit', 'balance', 'charges'];
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  resultsLength = 0;
  officer_id = 0;
  officer = ' ';
  name = ' ';
  balance = 0.00;
  account_no: number;
  row: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.account_no = params['id'];
    });

    this.api.getOneAccount(this.account_no).subscribe(res => {
      if (res) {
        this.row = res['data'];
        this.name = this.row['surname'] + ' ' + this.row['other_names'];
        this.balance = this.row['balance'];
        this.officer_id = this.row['officer_id'];
      } else {
        console.log('Error loading data!');
      }
    });

    this.api.getOneUser(this.officer_id).subscribe(res => {
      if (res) {
        this.row = res['data'];
        this.officer = this.row['name'];
      } else {
        console.log('Error loading data!');
      }
    });

    this.api.getOneContribution(this.account_no).subscribe(res => {
      if (res) {
        this.isLoadingResults = false;
        this.dataSource = new MatTableDataSource(res['data']);
        this.resultsLength = this.dataSource.data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        console.log('Error loading data!');
      }
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
