import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { Modal } from '@/core/ui/Modal';
import { useModal } from '@/core/hooks/useModal';
import { TableColumn } from '@/types/common';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
>>>>>>> 327b6d73b5199cfd9f510f9db10da7adc7caa2e0

const columns: TableColumn[] = [
  { key: 'bookId', label: 'Book ID', sortable: true },
  { key: 'title', label: 'Title', sortable: true },
  { key: 'author', label: 'Author', sortable: true },
  { key: 'isbn', label: 'ISBN', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'edition', label: 'Edition', sortable: true },
  { key: 'publicationYear', label: 'Year', sortable: true },
  { key: 'availableCopies', label: 'Available', sortable: true },
  { key: 'totalCopies', label: 'Total', sortable: true },
  { key: 'price', label: 'Price', sortable: true },
];

const mockBooks = [
  {
    id: '1',
    bookId: 'BK001',
    title: 'Mathematics Class 10',
    author: 'R.D. Sharma',
    isbn: '978-8193290040',
    category: 'Textbook',
    publisher: 'Dhanpat Rai Publications',
    edition: '2024',
    publicationYear: '2024',
    availableCopies: 25,
    totalCopies: 30,
    price: 650,
    location: 'Shelf A-1',
    description: 'Complete mathematics textbook for class 10',
  },
  {
    id: '2',
    bookId: 'BK002',
    title: 'Physics Fundamentals',
    author: 'H.C. Verma',
    isbn: '978-8177092325',
    category: 'Reference',
    publisher: 'Bharati Bhawan',
    edition: '2023',
    publicationYear: '2023',
    availableCopies: 15,
    totalCopies: 20,
    price: 750,
    location: 'Shelf B-2',
    description: 'Comprehensive physics reference book',
  },
];

export default function BookList() {
<<<<<<< HEAD
  const [books] = useState(mockBooks);
  const navigate = useNavigate();
  
=======
  const [books, setBooks] = useState(mockBooks);
  const modal = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.close();
  };

>>>>>>> 327b6d73b5199cfd9f510f9db10da7adc7caa2e0
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Library Books</h1>
          <p className="text-muted-foreground mt-1">Manage library book catalog and inventory</p>
        </div>
<<<<<<< HEAD
        <Button className="gap-2" onClick={() => navigate('/library/add-book')}>
=======
        <Button onClick={() => modal.open()} className="gap-2">
>>>>>>> 327b6d73b5199cfd9f510f9db10da7adc7caa2e0
          <Plus className="h-4 w-4" />
          Add Book
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={books}
        searchPlaceholder="Search books by title, author, ISBN..."
        onEdit={(book) => modal.open(book)}
        onDelete={(book) => setBooks(books.filter(b => b.id !== book.id))}
        onView={(book) => modal.open(book)}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modal.data ? 'Edit Book' : 'Add Book'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bookId">Book ID *</Label>
              <Input id="bookId" defaultValue={modal.data?.bookId} required />
            </div>
            <div>
              <Label htmlFor="isbn">ISBN *</Label>
              <Input id="isbn" defaultValue={modal.data?.isbn} required />
            </div>
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input id="title" defaultValue={modal.data?.title} required />
            </div>
            <div>
              <Label htmlFor="author">Author *</Label>
              <Input id="author" defaultValue={modal.data?.author} required />
            </div>
            <div>
              <Label htmlFor="publisher">Publisher</Label>
              <Input id="publisher" defaultValue={modal.data?.publisher} />
            </div>
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select defaultValue={modal.data?.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Textbook">Textbook</SelectItem>
                  <SelectItem value="Reference">Reference</SelectItem>
                  <SelectItem value="Fiction">Fiction</SelectItem>
                  <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                  <SelectItem value="Magazine">Magazine</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edition">Edition</Label>
              <Input id="edition" defaultValue={modal.data?.edition} />
            </div>
            <div>
              <Label htmlFor="publicationYear">Publication Year *</Label>
              <Input id="publicationYear" defaultValue={modal.data?.publicationYear} required />
            </div>
            <div>
              <Label htmlFor="totalCopies">Total Copies *</Label>
              <Input id="totalCopies" type="number" defaultValue={modal.data?.totalCopies} required />
            </div>
            <div>
              <Label htmlFor="price">Price (₹) *</Label>
              <Input id="price" type="number" defaultValue={modal.data?.price} required />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" defaultValue={modal.data?.location} placeholder="Shelf A-1" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" defaultValue={modal.data?.description} rows={3} />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={modal.close}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
