import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { STRUCTURES } from '../structures';

@Component({
  selector: 'app-struct-details',
  templateUrl: './struct-details.component.html',
  styleUrls: ['./struct-details.component.css'],
})
export class StructDetailsComponent implements OnInit {
  structure;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.structure = STRUCTURES[+params.get('structureId')];
    });
  }
}
