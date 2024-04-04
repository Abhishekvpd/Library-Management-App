import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  navItems = [
    { name: 'Browse Books', link: '/user' },
    { name: 'Your Borrowings', link: 'borrowings' },
  ];
}
