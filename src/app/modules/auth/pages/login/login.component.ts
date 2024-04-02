import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  loginHandler() {
    if (this.loginForm.valid) {
      const payload = this.loginForm.value;
      this.authService.loginUser(payload).subscribe({
        next: (res) => {
          this.authService.setDataToLocalStorage('token', res.token);
          this.authService.setDataToLocalStorage('role', res.user.role);
          this.router.navigate([`/${res.user.role}`]);
        },
      });
    }
  }

  registerRedirectionHandler() {
    this.router.navigate(['/register']);
  }
}
