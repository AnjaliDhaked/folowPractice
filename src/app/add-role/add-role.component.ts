import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css'],
})
export class AddRoleComponent implements OnInit {
  roleName: string = '';
  password: string = '';
  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit(): void {}
  nextClick() {
    console.log(this.roleName, this.password);
    this.router.navigate(['/auth/roles/add-new-role']);
    setTimeout(() => {
      this.commonService.roleName.next(this.roleName);
      this.commonService.password.next(this.password);
    }, 1000);
  }
}
