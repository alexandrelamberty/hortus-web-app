import { API } from "./APIClient";

// TESTS

type Book = {
  id?: string;
  title: string;
  isbn: string;
};

type BookRequest = {
  title: string;
  isbn: string;
};

async function createBook(book: BookRequest): Promise<Book | unknown> {
  return await API.post<Book, unknown>("/books", book);
}

async function readBook(id: string): Promise<Book | unknown> {
  return await API.get<Book>(`/books/${id}`);
}

async function updateBookPartial(book: Book): Promise<Book | unknown> {
  return await API.patch<Book, unknown>(`/books/${book.id}`, book);
}

async function updateBook(book: Book): Promise<Book | unknown> {
  return await API.put<Book, unknown>(`/books/${book.id}`, book);
}

async function deleteBook(book: Book): Promise<Book> {
  return await API.delete<Book>(`/books/${book.id}`);
}

async function fetchBooks(): Promise<Book[]> {
  return await API.get<Book[]>("/seeds");
}

// 1 - Create a new book and log it
const book: BookRequest = {
  title: "Abc",
  isbn: "Abc123",
};
const newBook = createBook(book);
console.log(newBook);

// Retrieve all books
const myBooks = fetchBooks();
console.log(myBooks);

// Update a book
const bookToUpdate = myBooks;
