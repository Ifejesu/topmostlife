import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-loan-account',
  templateUrl: './loan-account.component.html',
  styleUrls: ['./loan-account.component.scss'],
})
export class LoanAccountComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'phone',
    'approvedLoanAmount',
    'instalmentAmount',
    'created',
    'star',
  ];
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit() {
    this.api.getAllLoans().subscribe((data) => {
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
}
