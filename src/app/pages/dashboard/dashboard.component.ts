import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  aDisplayedColumns: string[] = ['date', 'account_id', 'name', 'credit', 'debit', 'balance', 'charges', 'star' ];
  aDataSource: MatTableDataSource<any>;
  bDisplayedColumns: string[] = ['date', 'account_id', 'name', 'amount', 'star'];
  bDataSource: MatTableDataSource<any>;
  cDisplayedColumns: string[] = ['date', 'overdraft_id', 'name', 'deposit', 'withdrawal', 'balance', 'star'];
  cDataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  aResultsLength = 0;
  bResultsLength = 0;
  cResultsLength = 0;
  savingsTotal = 0;
  loanTotal = 0;
  overdraftTotal = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getTotalNos();
    this.getContributions();
    this.getLoanPayments();
    this.getOverdraftPayments();

  }


  getContributions() {
    this.api.getAllContributions().subscribe(res => {
      if (res) {
        this.isLoadingResults = false;
        this.aDataSource = new MatTableDataSource(res['data']);
        this.aResultsLength = this.aDataSource.data.length;
        this.aDataSource.paginator = this.paginator;
        this.aDataSource.sort = this.sort;
      } else {
        console.log('Error loading data!');
      }
    });
  }

  getLoanPayments() {
    this.api.getAllLoanPayments().subscribe(res => {
      if (res) {
        this.isLoadingResults = false;
        this.bDataSource = new MatTableDataSource(res['data']);
        this.bResultsLength = this.bDataSource.data.length;
        this.bDataSource.paginator = this.paginator;
        this.bDataSource.sort = this.sort;
      } else {
        console.log('Error loading data!');
      }
    });
  }

  getOverdraftPayments() {
    this.api.getAllOverdraftPayments().subscribe(res => {
      if (res) {
        this.isLoadingResults = false;
        this.cDataSource = new MatTableDataSource(res['data']);
        this.cResultsLength = this.cDataSource.data.length;
        this.cDataSource.paginator = this.paginator;
        this.cDataSource.sort = this.sort;
      } else {
        console.log('Error loading data!');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.aDataSource.filter = filterValue.trim().toLowerCase();
    this.bDataSource.filter = filterValue.trim().toLowerCase();
    this.cDataSource.filter = filterValue.trim().toLowerCase();

    if (this.aDataSource.paginator) {
      this.aDataSource.paginator.firstPage();
    }
    if (this.bDataSource.paginator) {
      this.bDataSource.paginator.firstPage();
    }
    if (this.cDataSource.paginator) {
      this.aDataSource.paginator.firstPage();
    }
  }

  getTotalNos() {
    this.api.getAllAccounts().subscribe(res => {
      if (res) {
        this.savingsTotal = res['data'].length;
      } else {
        console.log('Error loading data!');
      }
    });
    this.api.getAllLoans().subscribe(res => {
      if (res) {
        this.loanTotal = res['data'].length;
      } else {
        console.log('Error loading data!');
      }
    });
    this.api.getAllOverdrafts().subscribe(res => {
      if (res) {
        this.overdraftTotal = res['data'].length;
      } else {
        console.log('Error loading data!');
      }
    });
  }

}
