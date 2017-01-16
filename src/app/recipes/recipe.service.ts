import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('adobo', 'amazing', 'http://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg',[]),
    new Recipe('pancit','to die for', "http://panlasangpinoy.com/wp-content/uploads/2014/12/Pancit-Bihon-Recipe.jpg",[])
  ]; //  create array of recipes

  constructor() { }

  getRecipes() {
  	return this.recipes;
  }

}
