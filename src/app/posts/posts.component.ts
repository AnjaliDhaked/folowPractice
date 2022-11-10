import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from '../services/common.service';
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
  postsList: any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.allPostsList();
  }

  allPostsList() {
    this.commonService.allPostsList().subscribe(
      (res: any) => {
        this.postsList = res.response;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
