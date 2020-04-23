import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../common/Ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private shoppingListService: ShoppingListService) { }
  private recipes: Recipe[] = [
    new Recipe(
      'firstRecipe',
      'new recipe',
      'http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png',
      [
        new Ingredient('apples', 5)
      ]),
    new Recipe(
      'secondRecipe',
      'second recipe',
      'http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png',
      [
        new Ingredient('oranges', 2)
      ])
  ];
  selectedRecipe: Recipe;

  selectedRecipeUpdated = new EventEmitter<Recipe>();

  getRecipes() {
    return [ ...this.recipes];
  }

  getRecipe(name: string) {
    return this.recipes.find(recipe => recipe.name === name);
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selectedRecipeUpdated.emit(recipe);
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addItem(...ingredients);
  }
}
