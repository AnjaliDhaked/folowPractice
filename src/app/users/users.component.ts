import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersList: any;
  editUsers: any = {};
  avatarFile: any;
  addUserForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    designation: ['', Validators.required],
    role_id: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    username: ['', Validators.required],
    avatar: ['', Validators.required],
  });
  constructor(private commonService: CommonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.allUsersList();
  }

  allUsersList() {
    this.commonService.getAllUsers().subscribe(
      (res: any) => {
        this.usersList = res.response;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteUser(data: any) {
    let deleteRoleObj = {
      password: 'admin@1234',
    };
    let username = data.username;
    this.commonService.userDelete(deleteRoleObj, username).subscribe(
      (res: any) => {
        console.log(res);
        alert('Record Deleted Successfully');
        this.allUsersList();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  editUser(user: any) {
    this.editUsers = user;
    console.log(user);
  }

  save() {
    let editUserObj = {
      first_name: this.editUsers.first_name,
      last_name: this.editUsers.last_name,
      email: this.editUsers.pgp_sym_decrypt,
    };
    console.log(editUserObj);
    let user = this.editUsers.username;
    this.commonService.updateUser(editUserObj, user).subscribe(
      (res: any) => {
        this.allUsersList();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  convertToString(obj: any) {
    return JSON.stringify(obj);
  }

  getAvatarFile($event: any) {
    this.avatarFile = $event.target.files[0];
  }

  addUser() {
    console.log(this.addUserForm.value);
    let fd = new FormData();
    fd.append(
      'first_name', this.addUserForm.value.first_name!
    );
    fd.append(
      'last_name', this.addUserForm.value.last_name!
    );
    fd.append(
      'designation', this.addUserForm.value.designation!
    );
    fd.append('role_id', this.addUserForm.value.role_id!);
    fd.append('email', this.addUserForm.value.email!);
    fd.append(
      'password', this.addUserForm.value.password!
    );
    fd.append(
      'username', this.addUserForm.value.username!
    );
    fd.append('avatar', this.avatarFile);

    this.commonService.addUser(fd).subscribe(
      (res: any) => {
        this.allUsersList();
      },
      (err) => {
        console.log(err);
      }
    );
    this.addUserForm.reset();
  }
}
