import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('oranges', 2)];
  constructor() { }

  addItem = (ingredient: Ingredient) =>
    this.ingredients.push(ingredient)

  ngOnInit() {
  }

}
