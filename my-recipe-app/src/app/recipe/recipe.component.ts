import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  providers: [RecipeService]
})
export class RecipeComponent {
  selectedRecipe: Recipe;

}
