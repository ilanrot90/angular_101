import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Directive, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './common/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import { RoutesModule } from './router/routes.module';
import { NoRecipeComponent } from './recipes/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { PageErrorComponent } from './page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    NoRecipeComponent,
    RecipeEditComponent,
    PageErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
