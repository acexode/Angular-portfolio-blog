import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   private class;
   private both;
   private category;
   private fa;
   private head;
   private lorem;
   private classes;
  constructor(private _portfolioService: PortfolioService) {
    this.both = [];
    this.category = [];
    this.class = 'button';
    this.classes = 'col-md-4 col-sm-6  items';
    this.fa = 'fa fa-plus fa-3x';
    this.head = ['Founder', 'Photographer', 'Designer', 'Programmer', 'Marketer', 'FreeLoader'];
    this.lorem = 'lorem ipsum dittu dopec htear';

}
  ngOnInit() {
      this.category = this._portfolioService.data();
      this.both = this._portfolioService.filter();
  }

}
