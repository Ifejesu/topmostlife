import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Data } from 'src/app/providers/data';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'star'];
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  resultsLength = 0;
  isResultError = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService, private router: Router, private data: Data) { }

  ngOnInit() {
    this.api.getUsers().subscribe(data => {
      if (data) {
        this.isLoadingResults = false;
        this.dataSource = new MatTableDataSource(data['message']);
        this.resultsLength = this.dataSource.data.length;
        this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      } else {
        console.log('Error loading data!');
        this.isLoadingResults = false;
        this.isResultError = true;
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

  delete(row) {
    console.log(row);
    this.api.deleteUser(row['id']).subscribe(data => {
      if (data) {
        alert(data['message']);
        this.ngOnInit();
      } else {
        alert('Error deleteing the data');
      }
    });
  }
}
