import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books/books.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-books-form',
  standalone: true,
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
})
export class BooksFormComponent implements OnInit {
  booksForm!: FormGroup;
  action: string = this.data?.action;
  formValues = this.data.formValues;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private _snackBar: SnackbarService,
    public dialogRef: MatDialogRef<BooksFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.booksForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantity: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(20),
      ]),
    });
    if (this.action === 'EDIT') this.setFormValues();
    console.log(this.data);
  }

  setFormValues() {
    const formValue = this.data.formValues;
    this.booksForm.controls['title'].setValue(formValue.title || '');
    this.booksForm.controls['author'].setValue(formValue.author || '');
    this.booksForm.controls['genre'].setValue(formValue.genre || '');
    this.booksForm.controls['description'].setValue(
      formValue.description || ''
    );
    this.booksForm.controls['quantity'].setValue(formValue.quantity || '');
  }

  submitHandler() {
    if (this.booksForm.valid) {
      switch (this.action) {
        case 'ADD':
          this.booksService.addBook(this.booksForm.value).subscribe({
            next: (res) => {
              this._snackBar.openSnackBar('You have added a book');
            },
          });
          break;

        case 'EDIT':
          this.booksService
            .editBook(this.booksForm.value, this.data.formValues._id)
            .subscribe({
              next: (res) => {
                this._snackBar.openSnackBar('You have updated the book');
              },
            });
      }
    }
    this.dialogRef.close('SUBMIT');
  }

  cancelHandler() {
    this.dialogRef.close();
  }
}
