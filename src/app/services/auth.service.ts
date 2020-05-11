import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth$ = new BehaviorSubject<boolean>(false);
  public role$ = new BehaviorSubject<string>('basic');
  public token: string;
  public userId: string;
  public role: string;
  public name: string;
}
