import { Ingredient } from '../shared/ingredient';
// class model
export class Recipe {
	constructor(public name, 
				public description, 
				public imagePath,
				ingredients: Ingredient[]) {
		
	}
}
