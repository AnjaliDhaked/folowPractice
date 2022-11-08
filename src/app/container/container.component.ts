import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  openAccor: boolean = false;
  userRolesData: any;
  sidebarList = [
    {
      label: 'Dashboard',
      class: 'fa fa-users',
      route: '/auth/app-users',
      active: false,
      hide: false,
    },
    {
      label: 'Users/Roles',
      class: 'fa fa-users',
      route: [{
        label: 'Users',
        class: 'fa fa-users',
        route: '/auth/roles',
        active: false,
        hide: false,
      },
      {
        label: 'Roles',
        class: 'fa fa-users',
        route: '/auth/roles',
        active: false,
        hide: false,
      }],
      active: false,
      hide: false,
    },
    {
      label: 'Users',
      class: 'fa fa-users',
      route: '/auth/users',
      active: false,
      hide: false,
    },
    {
      label: 'Roles',
      class: 'fa fa-users',
      route: '/auth/roles',
      active: false,
      hide: false,
    },
    {
      label: 'Posts',
      class: 'fa fa-users',
      route: '/auth/posts',
      active: false,
      hide: false,
    },
    {
      label: 'Stories',
      class: 'fa fa-history',
      route: '/auth/users',
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
  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectMenu(index: number) {
    console.log(index);
    if (index == 1) {
      this.openAccor = true;
      this.sidebarList.forEach((data) => {
        if (data.label == 'Users/Roles') {
          this.userRolesData = data.route;
          console.log(this.userRolesData);
        }
      })

    }
    if (this.currentIndex > -1) {
      this.sidebarList[this.currentIndex].active = false;
    }
    this.currentIndex = index;
    this.sidebarList[index].active = true;
    this.router.navigate([this.sidebarList[this.currentIndex].route]);
  }
}
