import { Injectable } from "@angular/core";

@Injectable()
export class Data{
  public savingsStorage: any;
  public contributionStorage : any;
  public loanStorage: any;
  public loanPaymentStorage : any;
  public overdraftStorage: any;
  public overdraftPaymentStorage : any;
  public constructor() {}
}