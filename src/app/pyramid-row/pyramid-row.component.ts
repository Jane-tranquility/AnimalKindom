import { Component, OnInit, Input } from '@angular/core';
import {Pyramid} from '../Pyramid.model';
import {PyramidRow} from '../PyramidRow.model';
import {Animal} from '../Animal.model';

@Component({
  selector: 'pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {
	@Input() pyramidRow:PyramidRow;
  constructor() { }

  ngOnInit() {
  }

}
