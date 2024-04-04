import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BooksComponent } from './pages/books/books.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { BooksFormComponent } from './components/books-form/books-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: BooksComponent,
      },
      {
        path: 'users',
        component: UsersTableComponent,
      },
      {
        path: 'add-books',
        component: BooksFormComponent,
        data: { action: 'ADD' },
      },
      {
        path: 'edit-books',
        component: BooksFormComponent,
        data: { action: 'EDIT' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
