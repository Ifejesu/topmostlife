import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Data } from 'src/app/providers/data';

@Component({
  selector: 'app-one-overdraft-payment',
  templateUrl: './one-overdraft-payment.component.html',
  styleUrls: ['./one-overdraft-payment.component.css']
})
export class OneOverdraftPaymentComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount' ];
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  resultsLength = 0;
  row: any = this.data.contributionStorage;
  name: string;
  overdraftId: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService, private router: Router, private data: Data) { }

  ngOnInit() {
    this.name = this.row['surname'] + ' ' + this.row['other_names'];
    this.overdraftId = this.row['account_id'];
    this.api.getOneContribution(this.overdraftId).subscribe(data => {
      if (data) {
        console.log(data);
        this.isLoadingResults = false;
        this.dataSource = new MatTableDataSource(data['message']);
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

  edit(row) {
    this.data.contributionStorage = row;
  }
}
