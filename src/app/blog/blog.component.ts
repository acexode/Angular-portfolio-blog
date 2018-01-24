import { Component, OnInit } from '@angular/core';
import { PortfolioService} from '../portfolio.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private body = [];
  private errMsg: string;
  constructor(private _posts: PortfolioService) { }

  ngOnInit() {
    this._posts.Posts()
    .subscribe(resData => this.body  = resData,
              reject => this.errMsg = reject);
   }

}
