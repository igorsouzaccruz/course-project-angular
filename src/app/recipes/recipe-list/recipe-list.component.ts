import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', "This is a simple test","https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg"),
    new Recipe('A test recipe', "This is a simple test","https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg")
  ];

}
