import { RecipeService } from './../recipe.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe [];

  // 3. propogate up to the recipes component
  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService){

  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


  // 3. propogate up to the recipes component
  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe)
  }

}
