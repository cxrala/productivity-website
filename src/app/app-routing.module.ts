import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import {TodoComponent} from "./pages/todo/todo.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {FriendsComponent} from "./pages/friends/friends.component";
import {BoxComponent} from "./components/templates/box/box.component";
import { LoginComponent } from './pages/login/login.component';
import { CallbackComponent } from './pages/login/callback/callback.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "todo", component: TodoComponent},
  { path: "skills", component: SkillsComponent },
  { path: "friends", component: FriendsComponent },
    { path: "login", component: LoginComponent },
    {path: "login/callback", component: CallbackComponent},
  { path: "box", component: BoxComponent }
]

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
