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

  //3. Have the Recipe component be injected by the recipe service and subscribe to the emitter
  // emit out the recipe to a variable called selectedRecipe
  constructor(private recipeService: RecipeService){
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe
    } )
  }

}
