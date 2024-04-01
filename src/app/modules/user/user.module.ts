import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { BrowseBooksComponent } from './pages/browse-books/browse-books.component';
import { BooksCardComponent } from './components/books-card/books-card.component';


@NgModule({
  declarations: [
    UserComponent,
    BrowseBooksComponent,
    BooksCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarComponent
  ]
})
export class UserModule { }
