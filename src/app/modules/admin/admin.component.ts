import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  navItems = [
    { name: 'Books', link: '/admin' },
    { name: 'Users', link: 'users' },
  ];
}
