import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { BrowseBooksComponent } from './pages/browse-books/browse-books.component';
import { BooksCardComponent } from 'src/app/shared/books-card/books-card.component';
import { PaginatorComponent } from 'src/app/shared/paginator/paginator.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@NgModule({
  declarations: [UserComponent, BrowseBooksComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarComponent,
    BooksCardComponent,
    PaginatorComponent,
    LoaderComponent
  ],
})
export class UserModule {}
