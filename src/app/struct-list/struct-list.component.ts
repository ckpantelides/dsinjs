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

  constructor() {}

  ngOnInit(): void {}
}
