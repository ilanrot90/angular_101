import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.selectedRecipe = this.recipesService.getRecipe(params.name);
    });
    // this.selectedRecipe = this.recipesService.selectedRecipe;
  }
  addToShoppingList() {
    this.recipesService.addIngredientsToList(this.selectedRecipe.ingredients);
    this.router.navigate(['shop']);
  }

  deleteRecipe() {

  }
}
/*
before use of routes

export class RecipesDetailsComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  // selectedRecipe: Recipe;
  constructor( private recipesService: RecipesService, private router: Router) {}
  ngOnInit() {
    // this.selectedRecipe = this.recipesService.selectedRecipe;
  }
  addToShoppingList() {
    this.recipesService.addIngredientsToList(this.selectedRecipe.ingredients);
    this.router.navigate(['shop']);
  }
}
*/
