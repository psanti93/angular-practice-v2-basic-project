import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe [] = [
    new Recipe("Burrito Bowl", "Tasty burrito bowl", "https://healthyfitnessmeals.com/wp-content/uploads/2018/08/Grilled-chicken-burrito-bowls-2.jpg",
    [new Ingredient('Beef',12), new Ingredient('Salsa',12), new Ingredient('Toritillas',12)]),
    new Recipe("Chicken Masala", "A classic Indian dish!", "https://amandascookin.com/wp-content/uploads/2023/01/Chicken-Tikka-Masala-RCSQ-1100x1100.jpg",
    [new Ingredient('Curry', 2), new Ingredient('Chicken', 2), new Ingredient('Sauce',2)])
  ];

  getRecipes() {
    // returns a copy of the recipes array using slice()
    return this.recipes.slice();
  }


}
