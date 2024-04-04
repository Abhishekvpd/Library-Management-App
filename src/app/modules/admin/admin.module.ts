import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksCardComponent } from 'src/app/shared/books-card/books-card.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from 'src/app/shared/paginator/paginator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { UserTransactionsComponent } from './components/user-transactions/user-transactions.component';

@NgModule({
  declarations: [AdminComponent, BooksComponent, UsersTableComponent, UserTransactionsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NavbarComponent,
    BooksCardComponent,
    ReactiveFormsModule,
    PaginatorComponent,
    MatDialogModule,
    BooksFormComponent,
    LoaderComponent
  ],
})
export class AdminModule {}
