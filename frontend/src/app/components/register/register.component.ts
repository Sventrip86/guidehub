import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  register() {
    const { username, password, email } = this.registerForm.value;

    this.http.post('/api/users/sign-up', {
      username,
      password,
      email
    }).subscribe(() => {
      // Registration was successful
      console.log('User registered');
    }, error => {
      // Registration failed
      console.error('Error:', error);
    });
  }
}
