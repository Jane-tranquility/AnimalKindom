import { Component, OnInit,Input } from '@angular/core';
import {Pyramid} from '../Pyramid.model';
import {PyramidRow} from '../PyramidRow.model';
import {Animal} from '../Animal.model';

@Component({
  selector: 'pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  @Input() pyramid:Pyramid;

  constructor() { }

  ngOnInit() {
  }

}
 