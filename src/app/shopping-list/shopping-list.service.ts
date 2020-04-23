import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../common/Ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredientsUpdated = new EventEmitter<Ingredient[]>();
  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('oranges', 2)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addItem = (...ingredients: Ingredient[]) => {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsUpdated.emit(this.getIngredients());
  }
}
