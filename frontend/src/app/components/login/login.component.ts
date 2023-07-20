import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post('/login', {
      username,
      password
    }).subscribe(() => {
      // Login was successful
      console.log('User logged in');
    }, error => {
      // Login failed
      console.error('Error:', error);
    });
  }
}
