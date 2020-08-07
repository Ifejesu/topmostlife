import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableExporterModule } from 'mat-table-exporter';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import { NewsavingsaccountComponent } from '../../pages/savings/newsavingsaccount/newsavingsaccount.component';
import { AllsavingsaccountComponent } from '../../pages/savings/allsavingsaccount/allsavingsaccount.component';
import { OnesavingsaccountComponent } from '../../pages/savings/onesavingsaccount/onesavingsaccount.component';
import { AllcontributionsComponent } from '../../pages/contribution/allcontributions/allcontributions.component';
import { OnecontributionComponent } from '../../pages/contribution/onecontribution/onecontribution.component';
import { NewcontributionComponent } from '../../pages/contribution/newcontribution/newcontribution.component';
import { LoanAccountComponent } from '../../pages/loan/loan-account/loan-account.component';
import { LoanPaymentComponent } from '../../pages/loan/loan-payment/loan-payment.component';
import { NewLoanAccountComponent } from '../../pages/loan/new-loan-account/new-loan-account.component';
import { NewLoanPaymentComponent } from '../../pages/loan/new-loan-payment/new-loan-payment.component';
import { OneLoanPaymentComponent } from '../../pages/loan/one-loan-payment/one-loan-payment.component';
import { OneLoanAccountComponent } from '../../pages/loan/one-loan-account/one-loan-account.component';
import { OverdraftPaymentComponent } from '../../pages/overdraft/overdraft-payment/overdraft-payment.component';
import { OverdraftAccountComponent } from '../../pages/overdraft/overdraft-account/overdraft-account.component';
import { OneOverdraftAccountComponent } from '../../pages/overdraft/one-overdraft-account/one-overdraft-account.component';
import { NewOverdraftAccountComponent } from '../../pages/overdraft/new-overdraft-account/new-overdraft-account.component';
import { NewOverdraftPaymentComponent } from '../../pages/overdraft/new-overdraft-payment/new-overdraft-payment.component';
import { OneOverdraftPaymentComponent } from '../../pages/overdraft/one-overdraft-payment/one-overdraft-payment.component';
import { NewUserComponent } from 'src/app/pages/users/new-user/new-user.component';
import { UsersListComponent } from 'src/app/pages/users/users-list/users-list.component';
import { SavingsWithdrawComponent } from '../../pages/savings-withdraw/savings-withdraw.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Data } from '../../providers/data';
import { OverdraftWithdrawComponent } from 'src/app/pages/overdraft-withdraw/overdraft-withdraw.component';
import { SavingsProfileComponent } from 'src/app/pages/savings-profile/savings-profile.component';
import { RevenueComponent } from 'src/app/pages/revenue/revenue.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTableExporterModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    UsersListComponent,
    NewUserComponent,
    NewsavingsaccountComponent,
    AllsavingsaccountComponent,
    OnesavingsaccountComponent,
    AllcontributionsComponent,
    OnecontributionComponent,
    NewcontributionComponent,
    LoanAccountComponent,
    LoanPaymentComponent,
    NewLoanAccountComponent,
    NewLoanPaymentComponent,
    OneLoanPaymentComponent,
    OneLoanAccountComponent,
    OverdraftPaymentComponent,
    OverdraftAccountComponent,
    OneOverdraftAccountComponent,
    NewOverdraftAccountComponent,
    NewOverdraftPaymentComponent,
    OneOverdraftPaymentComponent,
    SavingsWithdrawComponent,
    OverdraftWithdrawComponent,
    SavingsProfileComponent,
    RevenueComponent,
  ],
  providers: [ DatePipe, MatIconRegistry, Data]
})

export class AdminLayoutModule {}
