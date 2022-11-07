import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css'],
})
export class AppUsersComponent implements OnInit {
  listViewActive = true;
  gridViewActive = false;
  constructor() {}

  ngOnInit(): void {}

  listViewTab() {
    this.listViewActive = true;
    this.gridViewActive = false;
  }
  gridViewTab() {
    this.listViewActive = false;
    this.gridViewActive = true;
  }
}
