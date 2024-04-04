import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/modules/user/models/model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  addBook(payload: Book) {
    return this.http.post('/api/books/add', payload);
  }

  editBook(payload: Book, bookId: string) {
    return this.http.put(`/api/books/edit/${bookId}`, payload);
  }

  getBooks(params: { pageSize: number; page: number; search: string }) {
    return this.http.get<{ books: Book[]; pagination: { totalPages: number } }>(
      '/api/books',
      {
        params: params,
      }
    );
  }

  borrowBook(id: string) {
    return this.http.post<{ message: string }>(`/api/books/borrow/${id}`, {});
  }

  deleteBook(id: string) {
    return this.http.delete<{ message: string }>(`/api/books/delete/${id}`);
  }

  borrowings() {
    return this.http.get<{
      borrowedBooks: Book[];
    }>('/api/books/borrowings');
  }

  returnBook(borrowId: string, book: string) {
    return this.http.post(`/api/books/return/${borrowId}`, {
      book,
    });
  }
}
