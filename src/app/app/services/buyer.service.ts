import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  buyerCounts: number = 0;
  constructor() {}
  async postBuyerDetails(form: any) {
    let buyersArr: any = localStorage.getItem('buyers');
    return new Promise((resolve, rejcet) => {
      buyersArr = buyersArr ? JSON.parse(buyersArr) : [];
      buyersArr.push(form);

      localStorage.setItem('buyers', JSON.stringify(buyersArr));
      let counts = window.localStorage.getItem('buyersCount');
      let buyersNum: number = counts ? Number(counts) : 0;
      buyersNum++;
      window.localStorage.setItem('buyersCount', buyersNum + '');
      if (localStorage.getItem('buyers') && localStorage.getItem('buyersCount'))
        resolve('success');
      else rejcet('error');
    });
  }
  getAllData() {
    let buyers = window.localStorage.getItem('buyers');
    if (buyers) {
      return JSON.parse(buyers);
    }
  }
}
