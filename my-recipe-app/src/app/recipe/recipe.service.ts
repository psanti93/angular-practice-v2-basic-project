import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

  // 2a. use the emitter to emit out a recipe everytime an action is done on it
  recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe [] = [
    new Recipe("Burrito Bowl", "Tasty burrito bowl", "https://healthyfitnessmeals.com/wp-content/uploads/2018/08/Grilled-chicken-burrito-bowls-2.jpg"),
    new Recipe("Chicken Masala", "A classic Indian dish!", "https://amandascookin.com/wp-content/uploads/2023/01/Chicken-Tikka-Masala-RCSQ-1100x1100.jpg")
  ];

  getRecipes() {
    // returns a copy of the recipes array using slice()
    return this.recipes.slice();
  }


}
