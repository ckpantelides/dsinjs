import { Component, OnInit } from '@angular/core';
import { STRUCTURES } from '../structures';

@Component({
  selector: 'app-struct-list',
  templateUrl: './struct-list.component.html',
  styleUrls: ['./struct-list.component.css'],
})
export class StructListComponent implements OnInit {
  title = 'Data Structures';
  subtitle = 'uses, implementation and traversal in Javascript';
  structures = STRUCTURES;

  bgColor = 'color3'
  count = 0;
  colors = ['color1' , 'color2' , 'color3'];
  
  cycleColor() {
    this.bgColor = this.colors[this.count++ % 3]
  }


  constructor() {}

  ngOnInit(): void {}
}
