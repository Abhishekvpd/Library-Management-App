import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { BrowseBooksComponent } from './pages/browse-books/browse-books.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: BrowseBooksComponent,
        data: { type: 'BORROW' },
      },
      {
        path: 'borrowings',
        component: BrowseBooksComponent,
        data: { type: 'RETURN' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
