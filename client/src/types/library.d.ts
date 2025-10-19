export interface Book {
  id: string;
  bookId: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  edition: string;
  publicationYear: string;
  totalCopies: number;
  availableCopies: number;
  price: number;
  location: string;
  description?: string;
}

export interface BookIssue {
  id: string;
  bookId: string;
  bookTitle: string;
  memberId: string;
  memberName: string;
  memberType: 'Student' | 'Staff';
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'Issued' | 'Returned' | 'Overdue';
  fine?: number;
}

export interface LibraryMember {
  id: string;
  memberId: string;
  name: string;
  type: 'Student' | 'Staff';
  email: string;
  phone: string;
  joinDate: string;
  status: 'Active' | 'Inactive';
  booksIssued: number;
  maxBooksAllowed: number;
}
