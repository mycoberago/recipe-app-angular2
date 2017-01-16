import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
  	return this.items;
  }

  addItems(items: Ingredient[]){
  	// push multiple items of array individually into the items array at the top
  	// this is basically a for loop 
  	Array.prototype.push.apply(this.items, items);
  }

}
