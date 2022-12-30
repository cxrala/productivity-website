import { Component } from '@angular/core';
import { OAUTH2_URLS } from 'src/app/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public OAUTH2_URLS = OAUTH2_URLS;
}
