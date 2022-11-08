import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

const DEFAULT = environment.HOST;
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public roleName = new BehaviorSubject<string>('');
  public password = new BehaviorSubject<string>('');
  public roleList = new BehaviorSubject<string>('');
  public roles = new BehaviorSubject<object>({});
  //   newItem(item) {
  //     this.subject.next(item);
  // }
  constructor(private http: HttpClient) {}

  login(body: { username: string; password: string; type: string }) {
    return this.http.post(DEFAULT + '/api/users/v1/login', body);
  }

  getAllRoles() {
    var headers = this.get_auth_token();
    return this.http.get(DEFAULT + '/api/roles/v1/roles', { ...headers });
  }

  updateUser(body: any, username: any) {
    var headers = this.get_auth_token();
    return this.http.put(DEFAULT + '/api/users/v1/admin/' + username, body, {
      ...headers,
    });
  }

  updateRole(body: any, id: any) {
    var headers = this.get_auth_token();
    return this.http.put(DEFAULT + '/api/roles/v1/roles/' + id, body, {
      ...headers,
    });
  }

  getAppUsers() {
    var headers = this.get_auth_token();
    return this.http.get(DEFAULT + '/api/appUsers/v1/users?profile_type=2', {
      ...headers,
    });
  }

  addUser(body: any) {
    var headers = this.get_auth_token();
    return this.http.post(DEFAULT + '/api/users/v1/admin', body, {
      ...headers,
    });
  }

  roleDelete(body: any, id: any) {
    var headers = this.get_auth_token();
    return this.http.delete(DEFAULT + '/api/roles/v1/role/' + id, {
      body: body,
      ...headers,
    });
  }

  userDelete(body: any, username: any) {
    var headers = this.get_auth_token();
    return this.http.delete(DEFAULT + '/api/users/v1/admin/' + username, {
      body: body,
      ...headers,
    });
  }

  addRole(body: any) {
    var headers = this.get_auth_token();
    return this.http.post(DEFAULT + '/api/roles/v1/role', body, { ...headers });
  }

  getAllUsers() {
    var headers = this.get_auth_token();
    return this.http.get(DEFAULT + '/api/users/v1/admin', { ...headers });
  }

  get_auth_token() {
    var token = localStorage.getItem('token');
    var headers = {
      Authorization: 'Bearer ' + token,
    };
    return { headers: headers };
  }
}
