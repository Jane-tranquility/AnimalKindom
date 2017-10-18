import {Animal} from './Animal.model';

export class PyramidRow{
	animals: Array<Animal>;

	constructor(animals: Array<Animal>){
		this.animals=animals;
	}
}