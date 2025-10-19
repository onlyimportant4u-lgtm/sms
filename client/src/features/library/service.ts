import { http } from '@/core/services/http';
import { Book, BookIssue, LibraryMember } from '@/types/library';

export const libraryService = {
  // Books
  getAllBooks: async (): Promise<Book[]> => {
    return http.get<Book[]>('/library/books');
  },

  getBookById: async (id: string): Promise<Book> => {
    return http.get<Book>(`/library/books/${id}`);
  },

  createBook: async (data: Partial<Book>): Promise<Book> => {
    return http.post<Book>('/library/books', data);
  },

  updateBook: async (id: string, data: Partial<Book>): Promise<Book> => {
    return http.put<Book>(`/library/books/${id}`, data);
  },

  deleteBook: async (id: string): Promise<void> => {
    return http.delete(`/library/books/${id}`);
  },

  // Book Issues
  getAllIssues: async (): Promise<BookIssue[]> => {
    return http.get<BookIssue[]>('/library/issues');
  },

  issueBook: async (data: Partial<BookIssue>): Promise<BookIssue> => {
    return http.post<BookIssue>('/library/issue', data);
  },

  returnBook: async (id: string): Promise<BookIssue> => {
    return http.put<BookIssue>(`/library/return/${id}`, {});
  },

  // Members
  getAllMembers: async (): Promise<LibraryMember[]> => {
    return http.get<LibraryMember[]>('/library/members');
  },

  createMember: async (data: Partial<LibraryMember>): Promise<LibraryMember> => {
    return http.post<LibraryMember>('/library/members', data);
  },
};
