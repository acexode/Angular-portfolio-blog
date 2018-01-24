import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class PortfolioService {
  private _url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: Http) { }
          Posts() {
            return this._http.get(this._url)
            .map((res: Response) => res.json())
            .catch(this._errorHandler);
          }
          _errorHandler(error: Response) {
            console.error(error);
            return Observable.throw(error || 'Server error');
          }

        data() {
          return [
             {
            cat: 'transition', cls: 'metal',
            img: 'https://images.pexels.com/photos/200302/pexels-photo-200302.jpeg?h=350&auto=compress&cs=tinysrgb'
          },
          {cat: 'alkali', cls: '',
           img: 'https://images.pexels.com/photos/221095/pexels-photo-221095.jpeg?h=350&auto=compress&cs=tinysrgb'
          },
          {cat: 'metalloid', cls: 'metal',
           img: 'https://images.pexels.com/photos/260566/pexels-photo-260566.jpeg?h=350&auto=compress&cs=tinysrgb'
          },
          {cat: 'alkali', cls: 'metal',
           img: 'https://images.pexels.com/photos/221095/pexels-photo-221095.jpeg?h=350&auto=compress&cs=tinysrgb'
          },
          {cat: 'post-transition', cls: 'metal',
           img: 'https://images.pexels.com/photos/260566/pexels-photo-260566.jpeg?h=350&auto=compress&cs=tinysrgb'
          },
          {cat: 'alkali', cls: 'metal',
           img: 'https://images.pexels.com/photos/200302/pexels-photo-200302.jpeg?h=350&auto=compress&cs=tinysrgb'
          }
          ];
            }
        filter() {
          return [
            {filter: '.metal', title: 'Web Design'},
            {filter: '.transition', title: 'Photography'},
            {filter: '.alkali, .alkaline-earth', title: 'Projects'},
            {filter: ':not(.transition)', title: 'Graphic'},
            {filter: '.metal:not(.transition)', title: 'Templates'}
          ];
        }
}
