import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;
  usernameInput: any;
  externalErrorMsg: string | undefined;


  constructor(
    private router: Router, 
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ){

      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],      
        usernameForm: new FormGroup("", [Validators.required]),
        passwordForm: new FormGroup("", [Validators.required]),
      });
    }

  scrollToTarget() {
    const targetElement = document.getElementById('cards');

    if (targetElement) {
      
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
  login() {
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    
    // Attempt to login
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          console.log("Login successful");
          console.log(response.access_token)
  
          // Store user in local storage to keep a user logged in between page refreshes
          localStorage.removeItem("authToken");
          localStorage.removeItem("username")
          localStorage.setItem("authToken", response.access_token);
          localStorage.setItem("username", this.loginForm.value.username);
          this.toastr.success('Login successful');

          // Use Router to navigate to the home route
          this.router.navigate(["/home"]);
  
          // Display success message using Toastr

        },
        error: (error) => {
          console.log(error, error.status);
          if (error.status === 403) {
            this.externalErrorMsg = "Wrong username/password";
          }
        },
      });
  }
}  
