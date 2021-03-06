import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { Data } from 'src/app/providers/data';

@Component({
  selector: 'app-overdraft-payment',
  templateUrl: './overdraft-payment.component.html',
  styleUrls: ['./overdraft-payment.component.css']
})
export class OverdraftPaymentComponent implements OnInit {
  displayedColumns: string[] = ['date', 'overdraft_id', 'name', 'deposit', 'withdrawal', 'balance', 'star' ];
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService, private router: Router, private data: Data) { }

  ngOnInit() {
    this.api.getAllOverdraftPayments().subscribe(data => {
      if (data) {
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
    this.data.overdraftPaymentStorage = row;
  }
}
