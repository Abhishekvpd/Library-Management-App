import { Component } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  tableHeaders = ['name', 'email', 'actions'];
  dataSource = [
    {
      name: 'Abhishek',
      email: 'abhishekvpd@gmail.com',
      action: 'Transactions',
    },
    {
      name: 'Abhishek',
      email: 'abhishekvpd@gmail.com',
    },
    {
      name: 'Abhishek',
      email: 'abhishekvpd@gmail.com',
    },
    {
      name: 'Abhishek',
      email: 'abhishekvpd@gmail.com',
    },
  ];
}
