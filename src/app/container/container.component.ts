import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  openAccor: boolean = false;
  userRolesData: any;
  sidebarList: any;
  // sidebarList = [
  //   {
  //     label: 'Dashboard',
  //     class: 'fa fa-users',
  //     route: '',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Users/Roles',
  //     class: 'fa fa-users',
  //     route: [{
  //       label: 'Users',
  //       class: 'fa fa-users',
  //       route: '/auth/roles',
  //       active: false,
  //       hide: false,
  //     },
  //     {
  //       label: 'Roles',
  //       class: 'fa fa-users',
  //       route: '/auth/roles',
  //       active: false,
  //       hide: false,
  //     }],
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'App User',
  //     class: 'fa fa-users',
  //     route: '/auth/app-users',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Users',
  //     class: 'fa fa-users',
  //     route: '/auth/users',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Roles',
  //     class: 'fa fa-users',
  //     route: '/auth/roles',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Posts',
  //     class: 'fa fa-users',
  //     route: '/auth/posts',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Stories',
  //     class: 'fa fa-history',
  //     route: '/auth/users',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Report Spam',
  //     class: 'fa fa-exclamation-triangle',
  //     route: '/auth/users-roles',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Events',
  //     class: 'fa fa-calendar',
  //     route: '/auth/users-roles',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Campaigns',
  //     class: 'fa fa-edit',
  //     route: '/auth/users-roles',
  //     active: false,
  //     hide: false,
  //   },
  //   {
  //     label: 'Shopes',
  //     class: 'fa fa-user',
  //     route: '/auth/users-roles',
  //     active: false,
  //     hide: false,
  //   },
  // ];

  currentIndex = -1;
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    let retrievedObject = localStorage.getItem('adminPermission');

    console.log('adminPermission: ', JSON.parse(localStorage.getItem('adminPermission')!));
    this.sidebarList = JSON.parse(localStorage.getItem('adminPermission')!);
    console.log(this.sidebarList);
    this.sidebarList = [
      {
        label: 'Dashboard',
        class: 'fa fa-users',
        route: '',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.roles,
      },
      {
        label: 'Users/Roles',
        class: 'fa fa-users',
        route: [{
          label: 'Users',
          class: 'fa fa-users',
          route: '/auth/roles',
          active: false,
          hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.users
        },
        {
          label: 'Roles',
          class: 'fa fa-users',
          route: '/auth/roles',
          active: false,
          hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles,
        }],
        active: false,
        hide: false,
      },
      {
        label: 'App User',
        class: 'fa fa-users',
        route: '/auth/app-users',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.users,
      },
      {
        label: 'Users',
        class: 'fa fa-users',
        route: '/auth/users',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : true,
      },
      {
        label: 'Roles',
        class: 'fa fa-users',
        route: '/auth/roles',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : true,
      },
      {
        label: 'Posts',
        class: 'fa fa-users',
        route: '/auth/posts',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.posts,
      },
      {
        label: 'Stories',
        class: 'fa fa-history',
        route: '/auth/users',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.users,
      },
      {
        label: 'Report Spam',
        class: 'fa fa-exclamation-triangle',
        route: '/auth/users-roles',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.stories,
      },
      {
        label: 'Events',
        class: 'fa fa-calendar',
        route: '/auth/users-roles',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.events,
      },
      {
        label: 'Campaigns',
        class: 'fa fa-edit',
        route: '/auth/users-roles',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.campaigns,
      },
      {
        label: 'Shopes',
        class: 'fa fa-user',
        route: '/auth/users-roles',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.shops,
      },
      {
        label: 'Report Spam',
        class: 'fa fa-user',
        route: '/auth/users-roles',
        active: false,
        hide: this.sidebarList.is_superadmin ? false : !this.sidebarList.roles.reports,
      },
    ];


  }

  selectMenu(index: number) {
    console.log(index);
    if (index == 1) {
      this.openAccor = true;
      this.sidebarList.forEach((data: any) => {
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

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
