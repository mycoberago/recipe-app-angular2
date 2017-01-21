import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('adobo', 'amazing', 'http://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg',[new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)]),
    new Recipe('pancit','to die for', 'http://panlasangpinoy.com/wp-content/uploads/2014/12/Pancit-Bihon-Recipe.jpg',[]),
  ]; //  create array of recipes

  constructor() { }

  recipeSelected = new EventEmitter();

  getRecipes() {
  	return this.recipes;
  }

  emitRecipe(value){
  	this.recipeSelected.emit(value);
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
