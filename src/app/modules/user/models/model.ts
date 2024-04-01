export interface Book {
  title: string;
  author: string;
  genre: string;
  description: string;
}

export type BookType = 'BORROW' | 'RETURN';