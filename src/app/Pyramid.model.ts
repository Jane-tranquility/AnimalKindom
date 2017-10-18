import {PyramidRow} from './PyramidRow.model';

export class Pyramid{
	pyramidRows:Array<PyramidRow>;

	constructor(pyramidRows:Array<PyramidRow>){
		this.pyramidRows=pyramidRows;
	}
}