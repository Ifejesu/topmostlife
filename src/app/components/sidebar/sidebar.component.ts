import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/savings-account', title: 'Savings Account',  icon:'ni-box-2 text-blue', class: '' },
    { path: '/contributions', title: 'Contribution',  icon:'ni-money-coins text-blue', class: '' },
    { path: '/loan-account', title: 'Loan Account',  icon:'ni-credit-card text-orange', class: '' },
    { path: '/loan-payment', title: 'Loan Payment',  icon:'ni-ungroup text-orange', class: '' },
    { path: '/overdraft-account', title: 'Overdraft Account',  icon:'ni-single-copy-04 text-red', class: '' },
    { path: '/overdraft-payment', title: 'Overdraft Payment',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/user-profile', title: 'Users',  icon:'ni-single-02 text-yellow', class: '' }
];

export const routeTitles: any[] = [
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/user-profile', title: 'User Profile' },
    { path: '/savings-account', title: 'Savings Accounts' },
    { path: '/new-savings-account', title: 'New Savings Account' },
    { path: '/edit-savings-account', title: 'Savings Account' },
    { path: '/contributions', title: 'Contributions' },
    { path: '/new-contribution', title: 'New Contribution' },
    { path: '/single-contribution', title: 'Contribution' },
    { path: '/loan-account', title: 'Loan Accounts' },
    { path: '/loan-payment', title: 'Loan Payments' },
    { path: '/new-loan-account', title: 'New Loan Account' },
    { path: '/new-loan-payment', title: 'New Loan Payment' },
    { path: '/one-loan-account', title: 'Loan Account' },
    { path: '/one-loan-payment', title: 'Loan Payment' },
    { path: '/overdraft-account', title: 'Overdraft Accounts' },
    { path: '/overdraft-payment', title: 'Overdraft Payments' },
    { path: '/new-overdraft-account', title: 'New Overdraft Account' },
    { path: '/new-overdraft-payment', title: 'New Overdraft Payment' },
    { path: '/one-overdraft-account', title: 'Overdraft Account' },
    { path: '/one-overdraft-payment', title: 'Overdraft Payment' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
