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
import { NewUserComponent } from 'src/app/pages/users/new-user/new-user.component';
import { UsersListComponent } from 'src/app/pages/users/users-list/users-list.component';
import { SavingsWithdrawComponent } from 'src/app/pages/savings-withdraw/savings-withdraw.component';
import { OverdraftWithdrawComponent } from 'src/app/pages/overdraft-withdraw/overdraft-withdraw.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'new-user', component: NewUserComponent },

    { path: 'savings-account', component: AllsavingsaccountComponent },
    { path: 'savings-account/:id', component: OnesavingsaccountComponent },
    { path: 'new-savings-account', component: NewsavingsaccountComponent },
    { path: 'contributions', component: AllcontributionsComponent },
    { path: 'savings-statement/:id', component: OnecontributionComponent },
    { path: 'savings-deposit/:id', component: NewcontributionComponent },
    { path: 'savings-withdrawal/:id', component: SavingsWithdrawComponent },

    { path: 'loan-account', component: LoanAccountComponent },
    { path: 'loan-account/:id', component: OneLoanAccountComponent },
    { path: 'new-loan-account', component: NewLoanAccountComponent },
    { path: 'loan-payment', component: LoanPaymentComponent },
    { path: 'loan-payment/:id', component: OneLoanPaymentComponent },
    { path: 'new-loan-payment', component: NewLoanPaymentComponent },

    { path: 'overdraft-account', component: OverdraftAccountComponent },
    { path: 'overdraft-account/:id', component: OneOverdraftAccountComponent },
    { path: 'new-overdraft-account', component: NewOverdraftAccountComponent },
    { path: 'overdraft-payment', component: OverdraftPaymentComponent },
    { path: 'overdraft-statement/:id', component: OneOverdraftPaymentComponent },
    { path: 'overdraft-deposit', component: NewOverdraftPaymentComponent },
    { path: 'overdraft-withdrawal', component: OverdraftWithdrawComponent }
];
