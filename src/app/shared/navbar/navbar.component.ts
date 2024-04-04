import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() navItems: { name: string; link: string }[] = [];
  user!: { name: string; email: string; role: string };

  constructor(private authService: AuthService, private router: Router, private _snackBar: SnackbarService) {}

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe({
      next: ({ user }) => {
        this.user = user;
      },
    });
  }

  signoutHandler() {
    localStorage.clear();
    this.router.navigate(['']);
    this._snackBar.openSnackBar("You have been Logged out")
  }
}
