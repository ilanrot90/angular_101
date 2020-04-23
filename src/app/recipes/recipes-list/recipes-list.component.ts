import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor( private recipesService: RecipesService ) {}

  // onRecipeSelect = (recipe: Recipe) =>
    // this.recipeSelected.emit(recipe)

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    // this.recipeSelected.emit(this.recipes[0]);
  }
}

