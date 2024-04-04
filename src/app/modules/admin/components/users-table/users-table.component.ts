import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { UserTransactionsComponent } from '../user-transactions/user-transactions.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  emptyState: boolean = false;
  tableHeaders = ['name', 'email', 'actions'];
  dataSource: {
    name: string;
    email: string;
    borrowings: {
      title: string;
      book: string;
      borrowedOn: string;
      _id: string;
    }[];
  }[] = [];

  constructor(
    private authService: AuthService,
    private loader: LoaderService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loader.showLoader();
    this.authService.getAllUsers().subscribe({
      next: ({ users }) => {
        if (!users.length) this.emptyState = true;
        this.dataSource = users;
      },
      complete: () => this.loader.hideLoader(),
    });
  }

  onClickHandler(data: {
    borrowings: {
      title: string;
      book: string;
      borrowedOn: string;
      _id: string;
    }[];
  }) {
    this._dialog.open(UserTransactionsComponent, {
      data: data.borrowings,
    });
  }
}
