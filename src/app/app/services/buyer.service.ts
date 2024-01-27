import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  buyerCounts: number = 0;
  numOfVisitors: number = 0;
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
  addCount() {
    let count = window.localStorage.getItem('visitorsCounts');
    this.numOfVisitors = count ? Number(count) + 1 : 1;
    window.localStorage.setItem('visitorsCounts', this.numOfVisitors + '');
    return this.numOfVisitors;
  }
  getCount() {
    let count = window.localStorage.getItem('visitorsCounts');
    let visit = count ? Number(count) : 0;
    let buyersCount = window.localStorage.getItem('buyersCount');
    let buyersNum = buyersCount ? Number(buyersCount) : 0;
    let percent = (buyersNum / visit) * 100;
    return { visitors: visit, forms: percent };
  }
}
