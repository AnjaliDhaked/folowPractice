import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { UsersRolesComponent } from './users-roles/users-roles.component';
import { AuthGuard } from './guard/auth.guard';
import { ContainerComponent } from './container/container.component';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddNewRolesComponent } from './add-new-roles/add-new-roles.component';
import { PostsComponent } from './posts/posts.component';
import { AppUsersComponent } from './app-users/app-users.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'auth',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'users-roles',
        component: UsersRolesComponent,
      },
      {
        path: 'roles',
        component: RolesComponent,
        children: [
          {
            path: '',
            component: AddRoleComponent,
          },
          {
            path: 'add-new-role',
            component: AddNewRolesComponent,
          },
        ],
      },
      {
        path: 'users',
        component: AppUsersComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
