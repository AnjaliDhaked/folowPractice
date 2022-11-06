import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-add-new-roles',
  templateUrl: './add-new-roles.component.html',
  styleUrls: ['./add-new-roles.component.css'],
})
export class AddNewRolesComponent implements OnInit {
  users = ['App Users', 'Admin Users'];

  roleName: string = '';
  password: string = '';
  posts: boolean = false;
  shops: boolean = false;
  user: boolean = false;
  events: boolean = false;
  reports: boolean = false;
  stories: boolean = false;
  campaigns: boolean = false;
  shopes: boolean = false;
  data: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // this.commonService.roleName.getValue();
  }

  createRole() {
    this.commonService.roleName.subscribe((data: string) => {
      this.roleName = data;
    });
    this.commonService.password.subscribe((res: string) => {
      this.password = res;
    });

    let data = {
      name: this.roleName,
      password: this.password,
      roles: {
        posts: this.posts,
        shops: this.shopes,
        users: this.user,
        events: this.events,
        reports: this.reports,
        stories: this.stories,
        campaigns: this.campaigns,
      },
    };

    this.commonService.addRole(data).subscribe(
      (res: any) => {
        // this.ListAllRoles();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
