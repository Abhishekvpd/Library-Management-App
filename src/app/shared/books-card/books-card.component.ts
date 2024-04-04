import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, BookType } from 'src/app/modules/user/models/model';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { BooksFormComponent } from 'src/app/modules/admin/components/books-form/books-form.component';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { BooksService } from 'src/app/core/services/books/books.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-books-card',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss'],
})
export class BooksCardComponent {
  @Input() book!: Book;
  @Input() action: BookType = 'BORROW';
  @Output() actionEmitter = new EventEmitter();

  constructor(
    public _dialog: MatDialog,
    private router: Router,
    private _snackbar: SnackbarService,
    private booksService: BooksService
  ) {}

  actionHandler(bookValues: Book) {
    this.action !== 'EDIT' &&
      this.actionEmitter.emit({
        action: this.action,
        id: this.book._id,
        book: this.book._id,
      });

    if (this.action === 'EDIT') {
      const dialogRef = this._dialog.open(BooksFormComponent, {
        data: {
          action: 'EDIT',
          formValues: bookValues,
        },
      });

      dialogRef
        .afterClosed()
        .subscribe((res) => res && this.actionEmitter.emit({ action: 'EDIT' }));
    }
  }

  deleteHandler(book: Book) {
    const dialog = this._dialog.open(ConfirmationDialogComponent, {
      data: {
        header: 'Are you sure you want to delete the book?',
        action: 'DELETE',
      },
    });

    dialog.afterClosed().subscribe((res) => {
      res &&
        this.booksService.deleteBook(book._id).subscribe({
          next: (res) => {
            this._snackbar.openSnackBar(res.message);
            this.actionEmitter.emit({ action: 'DELETE' });
          },
        });
    });
  }
}
