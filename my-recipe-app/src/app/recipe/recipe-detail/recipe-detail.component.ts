import { RecipeService } from './../recipe.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  // 5. Recieve the recipe type from the recipe component and output it into the recipe detail html
 @Input() recipe: Recipe

 constructor(private recipeService: RecipeService){

 }
 // Challenge: Add Recipe items to the shopping list
 // Think abou informing the component about a change
 // Think about adding more than one item to the shopping list
 addToShoppingList(){
  this.recipeService.addIngredients(this.recipe.ingredients)
 }
}
