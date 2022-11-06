import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-add-new-roles',
  templateUrl: './add-new-roles.component.html',
  styleUrls: ['./add-new-roles.component.css']
})
export class AddNewRolesComponent implements OnInit {
  users = ["App Users", "Admin Users"];
  name: any;
  roleName: any;
  password: any;
  posts: boolean = false;
  shops: boolean = false;
  user: boolean = false;
  events: boolean = false;
  reports: boolean = false;
  stories: boolean = false;
  campaigns: boolean = false;
  shopes: boolean = false;
  data: any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    // this.commonService.roleName.getValue();

  }

  createRole() {
    console.log(this.password);
    console.log(this.roleName);
    this.commonService.roleName.subscribe(
      data => {
        console.log('next subscribed value: ' + data);
        this.roleName = data;
        // this.name = data.roleName;
      }
    );
    this.commonService.password.subscribe(
      res => {
        console.log(res);
        this.password = res;
      }
    )
    this.data = {
      name: this.roleName,
      roles: {
        posts: this.posts,
        shops: this.shopes,
        users: this.user,
        events: this.events,
        reports: this.reports,
        stories: this.stories,
        campaigns: this.campaigns
      },
      password: this.password
    }
    console.log(this.data);
    this.commonService.addRole(this.data).subscribe(
      (res: any) => {
        // this.ListAllRoles();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
