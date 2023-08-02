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

  // 1. Emit from the item up to the list
  @Output()
  recipeSelected = new EventEmitter<void>();

  onSelected(){
    this.recipeSelected.emit();
  }
}
