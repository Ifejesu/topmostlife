import { Injectable } from '@angular/core';
import {  HttpClient,  HttpHeaders,  HttpErrorResponse} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { API_URL, environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const TOKEN_KEY = 'secret';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  errorData: {};

  constructor(private http: HttpClient) { }

  private checkToken() { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`
      );
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.',
    };
    return throwError(this.errorData);
  }

  getAllAccounts() {
    return this.http.get(API_URL + 'account', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addAccount(data) {
    return this.http.post(API_URL + 'account', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneAccount(id) {
    return this.http.get(API_URL + 'account/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateAccount(id, data) {
    return this.http.put(API_URL + 'account/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteAccount(id) {
    return this.http.delete(API_URL + 'account/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllContributions() {
    return this.http.get(API_URL + 'contribution', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addContribution(data) {
    return this.http.post(API_URL + 'contribution', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneContribution(id) {
    return this.http.get(API_URL + 'contribution/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateContribution(id, data) {
    return this.http.put(API_URL + 'contribution/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteContribution(id) {
    return this.http.delete(API_URL + 'contribution/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllLoans() {
    return this.http.get(API_URL + 'loan', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addLoan(data) {
    return this.http.post(API_URL + 'loan', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneLoan(id) {
    return this.http.get(API_URL + 'loan/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateLoan(id, data) {
    return this.http.put(API_URL + 'loan/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteLoan(id) {
    return this.http.delete(API_URL + 'loan/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllLoanPayments() {
    return this.http.get(API_URL + 'loan-payment', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addLoanPayment(data) {
    return this.http.post(API_URL + 'loan-payment', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneLoanPayment(id) {
    return this.http.get(API_URL + 'loan-payment/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateLoanPayment(id, data) {
    return this.http.put(API_URL + 'loan-payment/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteLoanPayment(id) {
    return this.http.delete(API_URL + 'loan-payment/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllOverdrafts() {
    return this.http.get(API_URL + 'overdraft', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addOverdraft(data) {
    return this.http.post(API_URL + 'overdraft', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneOverdraft(id) {
    return this.http.get(API_URL + 'overdraft/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateOverdraft(id, data) {
    return this.http.put(API_URL + 'overdraft/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteOverdraft(id) {
    return this.http.delete(API_URL + 'overdraft/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllOverdraftPayments() {
    return this.http.get(API_URL + 'overdraft-payment', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addOverdraftPayment(data) {
    return this.http.post(API_URL + 'overdraft-payment', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneOverdraftPayment(id) {
    return this.http.get(API_URL + 'overdraft-payment/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateOverdraftPayment(id, data) {
    return this.http.put(API_URL + 'overdraft-payment/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteOverdraftPayment(id) {
    return this.http.delete(API_URL + 'overdraft-payment/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getUsers() {
    return this.http.get(API_URL + 'user', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addUser(data) {
    return this.http.post(API_URL + 'user', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneUser(id) {
    return this.http.get(API_URL + 'user/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateUser(id, data) {
    return this.http.put(API_URL + 'user/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteUser(id) {
    return this.http.delete(API_URL + 'user/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  login(data) {
    return this.http.post(API_URL + 'login', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getRevenues() {
    return this.http.get(API_URL + 'revenue', httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addRevenue(data) {
    return this.http.post(API_URL + 'revenue', data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getOneRevenue(id) {
    return this.http.get(API_URL + 'revenue/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateRevenue(id, data) {
    return this.http.put(API_URL + 'revenue/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteRevenue(id) {
    return this.http.delete(API_URL + 'revenue/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
