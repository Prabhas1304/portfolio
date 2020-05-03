import { Component, OnInit } from '@angular/core';
import {StarRatingComponent} from "ng-starrating";

@Component({
  selector: 'app-screen-about',
  templateUrl: './screen-about.component.html',
  styleUrls: ['./screen-about.component.css']
})
export class ScreenAboutComponent implements OnInit {

  constructor() { }
  test: 3;
  ngOnInit(): void {
  }



  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
