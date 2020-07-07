import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/savings-account', title: 'Savings Account', icon: 'ni-ungroup text-red', class: '' },
  { path: '/savings-deposit', title: 'Savings Deposit', icon: 'ni-box-2 text-red', class: '' },
  { path: '/savings-withdrawal', title: 'Savings Withdrawal', icon: 'ni-money-coins text-red', class: '' },
  { path: '/loan-account', title: 'Loan Account', icon: 'ni-collection text-yellow', class: '' },
  { path: '/loan-payment', title: 'Loan Payment', icon: 'ni-credit-card text-yellow', class: '' },
  { path: '/overdraft-account', title: 'Overdraft Account', icon: 'ni-single-copy-04 text-green', class: '' },
  { path: '/overdraft-deposit', title: 'Overdraft Deposit', icon: 'ni-box-2 text-green', class: '' },
  { path: '/overdraft-withdrawal', title: 'Overdraft Withdrawal', icon: 'ni-money-coins text-green', class: '' },
  // { path: '/users', title: 'Users',  icon:'ni-single-02 text-yellow', class: '' }
];

export const routeTitles: any[] = [
  { path: '/dashboard', title: 'Dashboard' },
  { path: '/user-profile', title: 'User Profile' },
  { path: '/new-user', title: 'New User' },
  { path: '/users', title: 'Users' },

  { path: '/savings-account', title: 'Savings Accounts' },
  { path: '/savings-account/:id', title: 'Savings Account' },
  { path: '/new-savings-account', title: 'New Savings Account' },
  { path: '/contributions', title: 'Contributions' },
  { path: '/savings-statement/:id', title: 'Account Statement' },
  { path: '/savings-deposit', title: 'Savings Deposit' },
  { path: '/savings-withdrawal', title: 'Savings Withdrawal' },

  { path: '/loan-account', title: 'Loan Accounts' },
  { path: '/loan-account/:id', title: 'Loan Account' },
  { path: '/new-loan-account', title: 'New Loan Account' },
  { path: '/loan-payment', title: 'Loan Payments' },
  { path: '/loan-payment:/id', title: 'Loan Repayments' },
  { path: '/new-loan-payment', title: 'New Loan Payment' },

  { path: '/overdraft-account', title: 'Overdraft Accounts' },
  { path: '/overdraft-account/:id', title: 'Overdraft Account' },
  { path: '/new-overdraft-account', title: 'New Overdraft Account' },
  { path: '/overdraft-payment', title: 'Overdraft Payments' },
  { path: '/overdraft-statement/:id', title: 'Overdraft Account Statement' },
  { path: '/overdraft-deposit', title: 'Overdraft Deposit' },
  { path: '/overdraft-withdrawal', title: 'Overdraft Withdrawal' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public admin = false;
  public user: string;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.name;
    if (this.auth.role$.value === 'admin') {
      this.admin = true;
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logout() {
    this.auth.isAuth$.next(false);
    this.auth.userId = null;
    this.auth.token = null;
  }
}
