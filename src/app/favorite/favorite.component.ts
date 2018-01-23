import { Component, OnInit, Input, Output,EventEmitter,ViewEncapsulation } from '@angular/core';
//import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',   
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class FavoriteComponent implements OnInit {

  @Input() isfavourite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.isfavourite = !this.isfavourite;
    this.change.emit({newValue : this.isfavourite});
  }
}

export interface favouriteEventChangeArgs{
  newValue: boolean
}
