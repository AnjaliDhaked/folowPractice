import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit, AfterViewInit {
  rolesList: any = [];
  addRoleForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    posts: [false, Validators.required],
    shops: [false, Validators.required],
    users: [false, Validators.required],
    events: [false, Validators.required],
    reports: [false, Validators.required],
    stories: [false, Validators.required],
    campaigns: [false, Validators.required],

  });
  searchText!: string;
  checkAll: any;
  otherCheckBoxes: any;
  editRoles: any = {};
  rolesCount: number | undefined;
  constructor(private commonService: CommonService, private fb: FormBuilder) { }


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
        this.rolesCount = this.rolesList.length;
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

  addRole() {
    console.log(this.addRoleForm.value);
    let addRoleObj = {
      name: this.addRoleForm.value.name,
      roles: {
        posts: this.addRoleForm.value.posts,
        shops: this.addRoleForm.value.shops,
        users: this.addRoleForm.value.users,
        events: this.addRoleForm.value.events,
        reports: this.addRoleForm.value.reports,
        stories: this.addRoleForm.value.stories,
        campaigns: this.addRoleForm.value.campaigns,
      },
      password: this.addRoleForm.value.password
    };
    this.commonService.addRole(addRoleObj).subscribe(
      (res: any) => {
        this.listAllRoles();
      },
      (err) => {
        console.log(err);
      }
    );
    this.addRoleForm.reset();
  }

  cancel() {
    this.addRoleForm.reset()
  }

  editRole(role: any) {
    this.editRoles = role;
    console.log(role);

  }
  saveRole() {
    let roleId = this.editRoles.id;
    let editRoleObj = {
      name: this.editRoles.name,
      roles: {
        posts: this.editRoles.posts,
        shops: this.editRoles.shops,
        users: this.editRoles.users,
        events: this.editRoles.events,
        reports: this.editRoles.reports,
        stories: this.editRoles.stories,
        campaigns: this.editRoles.campaigns,
      },
      password: this.editRoles.password
    };
    this.commonService.updateRole(editRoleObj, roleId).subscribe(
      (res: any) => {
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
