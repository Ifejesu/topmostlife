import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-allcontributions',
  templateUrl: './allcontributions.component.html',
  styleUrls: ['./allcontributions.component.scss']
})
export class AllcontributionsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'account_id', 'name', 'credit', 'debit', 'balance', 'charges', 'star' ];
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllContributions().subscribe(res => {
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
