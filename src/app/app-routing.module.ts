import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { ContainerComponent } from './container/container.component';
import { RolesComponent } from './roles/roles.component';
import { PostsComponent } from './posts/posts.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { UsersComponent } from './users/users.component';
import { ShopsComponent } from './shops/shops.component';
import { ProductsComponent } from './products/products.component';

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
        path: 'roles',
        component: RolesComponent
      },
      {
        path: 'app-users',
        component: AppUsersComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'shops',
        component: ShopsComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
