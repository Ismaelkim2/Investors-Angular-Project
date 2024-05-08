import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phoneNumber: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private http: HttpClient, private router: Router) { } 

  onLogin() {
    const loginData = { phoneNumber: this.phoneNumber, password: this.password };
    this.http.post('http://localhost:8080/api/user/login', loginData).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        alert('Login successful. Click Ok to proceed.');
        this.router.navigate(['/payments']);
      },
      (error) => {
        console.error('Login failed.', error);
        alert('Incorrect Phone Number or Password' );
      }
    );
  }

  registration(){
    this.router.navigate(['/registration']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
