import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookType } from '../../models/model';
import { BooksService } from 'src/app/core/services/books/books.service';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss'],
})
export class BrowseBooksComponent implements OnInit {
  type: BookType = 'BORROW';
  books: Book[] = [];
  emptyState: boolean = false;

  pageConfig = {
    pageSize: 5,
    currentPage: 1,
    totalPages: 1,
  };
  searchString: string = 'book';

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private loaderService: LoaderService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((response) => (this.type = response['type']));
    this.loadDataSouce();
  }

  loadDataSouce() {
    if (this.type === 'BORROW') {
      this.loaderService.showLoader();
      this.booksService
        .getBooks({
          page: this.pageConfig.currentPage,
          pageSize: this.pageConfig.pageSize,
          search: this.searchString,
        })
        .subscribe({
          next: ({ books, pagination: { totalPages } }) => {
            this.books = books;
            if (!this.books.length) this.emptyState = true;
            this.pageConfig.totalPages = totalPages;
          },
          complete: () => this.loaderService.hideLoader(),
        });
    } else if (this.type === 'RETURN') {
      this.loaderService.showLoader();
      this.booksService.borrowings().subscribe({
        next: (res) => {
          this.books = res.borrowedBooks;
        },
        complete: () => this.loaderService.hideLoader(),
      });
    }
  }

  pageEventHandler() {
    this.loadDataSouce();
  }

  actionHandler(event: { action: string; id: string }) {
    switch (event.action) {
      case 'BORROW':
        this.booksService.borrowBook(event.id).subscribe({
          next: (res) => {
            this._snackbar.openSnackBar(res.message);
            this.loadDataSouce();
          },
        });
        break;

      case 'RETURN':
    }
  }
}
