import { RecipeService } from './../../recipe.service';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipe-item')
  recipe: Recipe

  constructor(private recipeService: RecipeService){

  }
  //2. Have the emitter in recipe service pick up the recipe element
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
