import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe [] = [
    new Recipe("Burrito Bowl", "Tasty burrito bowl", "https://healthyfitnessmeals.com/wp-content/uploads/2018/08/Grilled-chicken-burrito-bowls-2.jpg"),
    new Recipe("Chicken Masala", "A classic Indian dish!", "https://amandascookin.com/wp-content/uploads/2023/01/Chicken-Tikka-Masala-RCSQ-1100x1100.jpg")
  ];

  // 3. propogate up to the recipes component
  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  constructor(){

  }
  // 3. propogate up to the recipes component
  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe)
  }

}
