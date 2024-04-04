import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books/books.service';
import { Book } from 'src/app/modules/user/models/model';
import { BooksFormComponent } from '../../components/books-form/books-form.component';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  emptyState: boolean = false;

  pageConfig = {
    pageSize: 5,
    currentPage: 1,
    totalPages: 0,
  };
  searchString: string = '';

  books: Book[] = [];

  constructor(
    private router: Router,
    private booksService: BooksService,
    private _dialog: MatDialog,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.loadDataSource();
  }

  loadDataSource() {
    this.loader.showLoader();
    this.booksService
      .getBooks({
        page: this.pageConfig.currentPage,
        pageSize: this.pageConfig.pageSize,
        search: this.searchString,
      })
      .subscribe({
        next: ({ books, pagination: { totalPages } }) => {
          this.books = books;
          this.pageConfig.totalPages = totalPages;
          if (!books.length) this.emptyState = true;
        },
        complete: () => {
          this.loader.hideLoader();
        },
      });
  }

  pageEventHandler() {
    this.loadDataSource();
  }

  actionHandler(event: { action: string; bookId: string }) {
    this.loadDataSource();
  }

  addBookHandler() {
    const booksFormDialog = this._dialog.open(BooksFormComponent, {
      data: {
        action: 'ADD',
      },
    });

    booksFormDialog
      .afterClosed()
      .subscribe((res) => res && this.loadDataSource());
  }
}
