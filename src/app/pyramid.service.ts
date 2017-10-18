import { Injectable } from '@angular/core';
import {Pyramid} from './Pyramid.model';
import {PyramidRow} from './PyramidRow.model';
import {Animal} from './Animal.model';

@Injectable()
export class PyramidService {
	pyramidRows:Pyramid;

  constructor() {
  	//console.log(this.pyramidRows);
  	this.pyramidRows=new Pyramid([new PyramidRow([new Animal('Simba',5,'lion','assets/images/lion.jpg'), 
		                                     new Animal('Zazu',5,'eagle','assets/images/eagle.jpg'),
		                                     new Animal('Timon',5,'bear','assets/images/bear.jpg')]),
							new PyramidRow([new Animal('Nala',4,'fox','assets/images/fox.jpg'),
								            new Animal('Rafiki',4,'snake','assets/images/snake.jpg'),
								            new Animal('Pumbaa',4,'javelina','assets/images/javelina.jpg')]),
							new PyramidRow([new Animal('Kiara',3,'rabbit','assets/images/rabbit.jpeg'), 
		                                     new Animal('Ma',3,'owl','assets/images/owl.jpeg'),
		                                     new Animal('Kovu',3,'turtle','assets/images/turtle.jpg')]),
							new PyramidRow([new Animal('Bara',2,'mouse','assets/images/mouse.jpeg'), 
		                                     new Animal('Mimgu',2,'frog','assets/images/frog.jpeg'),
		                                     new Animal('Tara',2,'lemming','assets/images/lemming.jpeg')]),
							new PyramidRow([new Animal('Bubby',1,'moth','assets/images/moth.jpeg'), 
		                                     new Animal('Gini',1,'grub','assets/images/grub.jpeg'),
		                                     new Animal('Pino',1,'mosquito','assets/images/mosquito.jpeg')])]);
  }

  getPyramid(): Pyramid{
  	return this.pyramidRows;
  }

}
