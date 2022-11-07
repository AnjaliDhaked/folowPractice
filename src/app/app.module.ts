import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersRolesComponent } from './users-roles/users-roles.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddNewRolesComponent } from './add-new-roles/add-new-roles.component';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './posts/posts.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { UsersComponent } from './users/users.component';
import { EventsComponent } from './events/events.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersRolesComponent,
    ContainerComponent,
    RolesComponent,
    AddRoleComponent,
    AddNewRolesComponent,
    PostsComponent,
    AppUsersComponent,
    UsersComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MatCheckboxModule,
    BrowserAnimationsModule,
    // MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
