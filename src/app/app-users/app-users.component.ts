import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css'],
})
export class AppUsersComponent implements OnInit {
  listViewActive = true;
  gridViewActive = false;
  allUserList:any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {

    this.appUserList();
  }


  appUserList() {
    this.commonService.getAppUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.allUserList= res.response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  listViewTab() {
    this.listViewActive = true;
    this.gridViewActive = false;
  }
  gridViewTab() {
    this.listViewActive = false;
    this.gridViewActive = true;
  }
}
