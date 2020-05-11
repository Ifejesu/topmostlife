import { Routes } from '@angular/router';

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
import { AuthGuard } from "../../services/auth-guard.service";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'savings-account', component: AllsavingsaccountComponent, canActivate: [AuthGuard] },
    { path: 'new-savings-account', component: NewsavingsaccountComponent, canActivate: [AuthGuard] },
    { path: 'edit-savings-account', component: OnesavingsaccountComponent, canActivate: [AuthGuard] },
    { path: 'contributions', component: AllcontributionsComponent, canActivate: [AuthGuard] },
    { path: 'new-contribution', component: NewcontributionComponent, canActivate: [AuthGuard] },
    { path: 'single-contribution', component: OnecontributionComponent, canActivate: [AuthGuard] },
    { path: 'loan-account', component: LoanAccountComponent, canActivate: [AuthGuard] },
    { path: 'loan-payment', component: LoanPaymentComponent, canActivate: [AuthGuard] },
    { path: 'new-loan-account', component: NewLoanAccountComponent, canActivate: [AuthGuard] },
    { path: 'new-loan-payment', component: NewLoanPaymentComponent, canActivate: [AuthGuard] },
    { path: 'one-loan-account', component: OneLoanAccountComponent, canActivate: [AuthGuard] },
    { path: 'one-loan-payment', component: OneLoanPaymentComponent, canActivate: [AuthGuard] },
    { path: 'overdraft-account', component: OverdraftAccountComponent, canActivate: [AuthGuard] },
    { path: 'overdraft-payment', component: OverdraftPaymentComponent, canActivate: [AuthGuard] },
    { path: 'new-overdraft-account', component: NewOverdraftAccountComponent, canActivate: [AuthGuard] },
    { path: 'new-overdraft-payment', component: NewOverdraftPaymentComponent, canActivate: [AuthGuard] },
    { path: 'one-overdraft-account', component: OneOverdraftAccountComponent, canActivate: [AuthGuard] },
    { path: 'one-overdraft-payment', component: OneOverdraftPaymentComponent, canActivate: [AuthGuard] },
];
