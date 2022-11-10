import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
const animals = ['Cat', 'Dog', 'Lion']
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  toppings = new FormControl('');
  options = animals;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor() { }

  ngOnInit(): void {
  }

}
