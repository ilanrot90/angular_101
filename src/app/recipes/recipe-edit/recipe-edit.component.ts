import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  isEditMode: boolean;
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.isEditMode = !!this.route.snapshot.params.name;
  }

}
