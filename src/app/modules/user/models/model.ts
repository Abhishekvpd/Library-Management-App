export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  quantity: number;
  borrowedOn?: Date;
  bookId?: string;
}

export type BookType = 'BORROW' | 'RETURN' | 'EDIT';
