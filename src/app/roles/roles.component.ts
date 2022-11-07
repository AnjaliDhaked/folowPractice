import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit, AfterViewInit {
  rolesList: any = [];
  constructor(private commonService: CommonService) { }

  checkAll: any;
  otherCheckBoxes: any;

  ngOnInit(): void {
    this.listAllRoles();
    this.commonService.roles.subscribe((data: any) => {
      this.listAllRoles();
    });

  }

  ngAfterViewInit(): void {
    this.listAllRoles();
  }

  onCheckAllChange(event: any) {
    this.checkAll = document.getElementById(event.target.id);
    this.otherCheckBoxes = document.querySelectorAll(
      `input[type=checkbox]:not(#${event.target.id})`
    );
    setTimeout(() => {
      this.otherCheckBoxes.forEach((input: any) => {
        this.checkAll.checked == true
          ? (input.checked = true)
          : (input.checked = false);
      });
    }, 500);
  }

  listAllRoles() {
    this.commonService.getAllRoles().subscribe(
      (res: any) => {
        this.rolesList = res.response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteRole(role: any) {
    let deleteRoleObj = {
      password: 'admin@1234',
    };
    let id = role.id;
    this.commonService.roleDelete(deleteRoleObj, id).subscribe(
      (res: any) => {
        console.log(res);
        alert('Record Deleted Successfully');
        this.listAllRoles();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  toggleSelect(which_role: string) {
    let element = document.querySelector(`.${which_role}`);
    element?.parentElement?.classList.contains('active')
      ? element?.parentElement?.classList.remove('active')
      : element?.parentElement?.classList.add('active');
  }
}
