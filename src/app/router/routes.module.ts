import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipesDetailsComponent } from '../recipes/recipes-details/recipes-details.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { NoRecipeComponent } from '../recipes/no-recipe/no-recipe.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes',  pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: NoRecipeComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':name', component: RecipesDetailsComponent },
      { path: ':name/edit', component: RecipeEditComponent }
  ]},
  { path: 'shop', component: ShoppingListComponent, children: [
      // { path: ':id', component: RecipesDetailsComponent },
      // { path: ':id/edit', component: RecipeEditComponent }
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class RoutesModule { }
