import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormField } from '@/core/ui/FormField';
import { useToast } from '@/hooks/use-toast';

export default function AddBook() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    bookId: '',
    title: '',
    author: '',
    category: '',
    available: '',
    total: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with actual API call to add book
      await new Promise(res => setTimeout(res, 1000));
      toast({
        title: 'Book Added',
        description: 'Book has been successfully added to the library.',
      });
      navigate('/library/books');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add book.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Add Library Book</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Book ID"
          name="bookId"
          value={formData.bookId}
          onChange={v => updateField('bookId', v)}
          required
          placeholder="BK001"
        />
        <FormField
          label="Title"
          name="title"
          value={formData.title}
          onChange={v => updateField('title', v)}
          required
          placeholder="Mathematics Class 10"
        />
        <FormField
          label="Author"
          name="author"
          value={formData.author}
          onChange={v => updateField('author', v)}
          required
          placeholder="R.D. Sharma"
        />
        <FormField
          label="Category"
          name="category"
          type="select"
          value={formData.category}
          onChange={v => updateField('category', v)}
          options={[
            { value: 'Textbook', label: 'Textbook' },
            { value: 'Reference', label: 'Reference' },
            { value: 'Novel', label: 'Novel' },
            { value: 'Magazine', label: 'Magazine' },
          ]}
          required
        />
        <FormField
          label="Available Copies"
          name="available"
          type="number"
          value={formData.available}
          onChange={v => updateField('available', v)}
          required
          placeholder="25"
        />
        <FormField
          label="Total Copies"
          name="total"
          type="number"
          value={formData.total}
          onChange={v => updateField('total', v)}
          required
          placeholder="30"
        />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => navigate('/library/books')}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Book'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
