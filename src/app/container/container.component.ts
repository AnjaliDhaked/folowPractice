import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  sidebarList = [
    {
      label: 'Dashboard',
      class: 'fa fa-dashboard',
      route: '/auth/users-roles',
      active: false,
      hide: false,
    },
    {
      label: 'Users/Roles',
      class: 'fa fa-users',
      route: '/auth/users',
      active: false,
      hide: false,
    },
    {
      label: 'Posts',
      class: 'fa fa-sticky-note-o',
      route: '/auth/posts',
      active: false,
      hide: false,
    },
    {
      label: 'Stories',
      class: 'fa fa-history',
      route: '/auth/users-roles',
      active: false,
      hide: false,
    },
    {
      label: 'Report Spam',
      class: 'fa fa-exclamation-triangle',
      route: '/auth/users-roles',
      active: false,
      hide: false,
    },
    {
      label: 'Events',
      class: 'fa fa-calendar',
      route: '/auth/users-roles',
      active: false,
      hide: false,
    },
    {
      label: 'Campaigns',
      class: 'fa fa-edit',
      route: '/auth/users-roles',
      active: false,
      hide: false,
    },
    {
      label: 'Shopes',
      class: 'fa fa-user',
      route: '/auth/users-roles',
      active: false,
      hide: false,
    },
  ];

  currentIndex = -1;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectMenu(index: number) {
    if (this.currentIndex > -1) {
      this.sidebarList[this.currentIndex].active = false;
    }
    this.currentIndex = index;
    this.sidebarList[index].active = true;
    this.router.navigate([this.sidebarList[this.currentIndex].route]);
  }
}
