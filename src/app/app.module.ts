import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SkillsComponent,
    TodoComponent,
    FriendsComponent,
    TimerComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
