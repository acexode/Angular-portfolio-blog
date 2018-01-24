import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as isotope from 'angular2-isotope';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filter(){
    $('li').click(function(){
      console.log("Hello")
      
    })
  }
}
