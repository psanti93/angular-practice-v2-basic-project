import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService){
    // this will emit the change from the private array
    this.shoppingListService.ingredientsChange
      .subscribe((ingredients:Ingredient[]) => this.ingredients = ingredients)
  }
  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
  }

}
