import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
        ),
      ]),
    });
  }

  registerHandler() {
    if (this.registerForm.valid) {
      const payload = this.registerForm.value;
      console.log(payload);
      this.authService.registerUser(payload).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
      });
    }
  }

  loginRedirectionHandler() {
    this.router.navigate(['/login']);
  }
}
