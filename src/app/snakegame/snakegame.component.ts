import { Component, OnInit, ElementRef } from '@angular/core';
//import {Game as G} from '../../assets/lib/snake';
declare var Game: any;
@Component({
  selector: 'app-snakegame',
  templateUrl: './snakegame.component.html',
  styleUrls: ['./snakegame.component.css']
})
export class SnakegameComponent implements OnInit {
  private height = 400;
  private width = 520;
  constructor(private _elementRef : ElementRef) { 
    
  }

  ngOnInit() {
    console.log(this._elementRef.nativeElement.children[0]);
    Game.Snake(this._elementRef.nativeElement.children[0], {fps:100, size:4});
  }

}
