import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  roleName: any;
  password: any;
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }
  nextClick() {
    this.router.navigate(['/auth/roles/add-new-role']);
    this.commonService.passValue(this.roleName, this.password);

  }
}
