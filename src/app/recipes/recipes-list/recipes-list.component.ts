import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('firstRecipe', 'new recipe', 'http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png'),
    new Recipe('secondRecipe', 'second recipe', 'http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png')
  ];

  onRecipeSelect = (recipe: Recipe) =>
    this.recipeSelected.emit(recipe)
  ngOnInit() {
    // this.recipeSelected.emit(this.recipes[0]);
  }

}
