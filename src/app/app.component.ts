import { Component } from '@angular/core';
import {PyramidService} from './pyramid.service';
import {Pyramid} from './Pyramid.model';
import {PyramidRow} from './PyramidRow.model';
import {Animal} from './Animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pyramid: Pyramid;

  constructor(private pyramidService:PyramidService){

  }

  ngOnInit(){
  	this.pyramid=this.getPyramid();
    //console.log(this.pyramid);
  }

  getPyramid(){
  	return this.pyramidService.getPyramid();
  }
}
