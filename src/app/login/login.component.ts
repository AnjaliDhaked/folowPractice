import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {};
  isSuperAdmin: any;
  admin: any;
  constructor(private http: HttpClient, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {

  }



  loginProcess() {
    // this.formsGroup.value['type']="super_admin"
    // let dat={
    //   username: "super_admin",
    //     password: "admin@1234",
    //       type: "super_admin"

    // }
    this.loginData['type'] = this.isSuperAdmin;
    console.log(this.isSuperAdmin);

    this.commonService.login(this.loginData).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('adminPermission', JSON.stringify(res.response[0]));
        // localStorage.setItem('adminPermissio', );
        this.commonService.loginData = res.response;
        localStorage.setItem('token', res.response[0].token);
        this.router.navigate(['auth/users-roles']);
      },
      (error: any) => {
        const message = error.error.message || 'Something went wrong!';
      }
    );
  }



}

