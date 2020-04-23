import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/Ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('oranges', 2)];
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService ) {
    this.shoppingListService.ingredientsUpdated.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  // addItem = (ingredient: Ingredient) =>
  //   this.ingredients.push(ingredient)

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
