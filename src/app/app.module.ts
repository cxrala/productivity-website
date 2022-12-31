import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main-module/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { TodoComponent } from './pages/todo/todo.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { TimerComponent } from './components/timer/timer.component';
import { AppRoutingModule } from './app-routing.module';
import { BoxComponent } from './components/templates/box/box.component';
import { LoginComponent } from './pages/login/login.component';
import { CallbackComponent } from './pages/login/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SkillsComponent,
    TodoComponent,
    FriendsComponent,
    TimerComponent,
    BoxComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
