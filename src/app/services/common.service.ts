import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';


const DEFAULT = environment.HOST;
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public roleName = new Subject<string>();
  public password = new Subject<string>();
  constructor(private http: HttpClient) { }

  passValue(data:any, pass:any) {
    //passing the data as the next observable
    this.roleName.next(data);
    this.password.next(pass);
  }


  login(body: { username: string; password: string ; type:string }) {
    return this.http.post(DEFAULT + '/api/users/v1/login', body);
  }

  getAllRoles() {
    var headers = this.get_auth_token();
    return this.http.get(DEFAULT + '/api/roles/v1/roles', { ...headers });
  }

  roleDelete(body: any, id:any) {
    var headers = this.get_auth_token();
    return this.http.delete(DEFAULT + '/api/roles/v1/role/'+id,{
      body: body,
      ...headers,
    });
  }

  addRole(body: any) {
    var headers = this.get_auth_token();
    return this.http.post(DEFAULT + '/api/roles/v1/role', body, { ...headers });
  }

  get_auth_token() {
    var token = localStorage.getItem('token');
    var headers = {
      Authorization: 'Bearer ' + token,
    };
    return { headers: headers };
  }
}
