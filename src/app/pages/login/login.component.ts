import { Component } from '@angular/core';
import { ENDPOINTS } from 'src/app/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public ENDPOINTS = ENDPOINTS;
}
