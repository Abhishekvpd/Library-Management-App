import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksCardComponent } from 'src/app/shared/books-card/books-card.component';
import { UsersTableComponent } from './components/users-table/users-table.component';


@NgModule({
  declarations: [
    AdminComponent,
    BooksComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NavbarComponent,
    BooksCardComponent
  ]
})
export class AdminModule { }
