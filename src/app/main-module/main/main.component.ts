import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    constructor(private userService: UserService) {
        userService.loggedInStatus.subscribe(status => {
            console.log(`Logged in: ${status}`);
        });
    }
}
