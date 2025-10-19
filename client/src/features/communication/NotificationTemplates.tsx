import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTable } from '@/core/ui/Table';
import { Modal } from '@/core/ui/Modal';
import { useModal } from '@/core/hooks/useModal';
import { Edit, Plus, Trash2 } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  type: 'Email' | 'SMS';
  category: string;
  subject?: string;
  content: string;
}

export default function NotificationTemplates() {
  const { toast } = useToast();
  const { isOpen, open: openModal, close: closeModal } = useModal();
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: '1',
      name: 'Welcome Message',
      type: 'Email',
      category: 'Admission',
      subject: 'Welcome to Our School',
      content: 'Dear {student_name}, Welcome to {school_name}!',
    },
    {
      id: '2',
      name: 'Fee Reminder',
      type: 'SMS',
      category: 'Fees',
      content: 'Dear Parent, Fee payment of {amount} is due on {due_date}.',
    },
    {
      id: '3',
      name: 'Exam Schedule',
      type: 'Email',
      category: 'Exams',
      subject: 'Upcoming Exam Schedule',
      content: 'Dear Student, Your exam for {subject} is scheduled on {exam_date}.',
    },
  ]);

  const [currentTemplate, setCurrentTemplate] = useState<Partial<Template>>({
    name: '',
    type: 'Email',
    category: '',
    subject: '',
    content: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const columns = [
    { key: 'name', label: 'Template Name', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'subject', label: 'Subject', sortable: false },
  ];

  const handleEdit = (template: Template) => {
    setCurrentTemplate(template);
    setEditingId(template.id);
    openModal();
  };

  const handleDelete = (template: Template) => {
    setTemplates(templates.filter((t) => t.id !== template.id));
    toast({
      title: 'Template Deleted',
      description: 'The template has been removed successfully.',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      setTemplates(
        templates.map((t) =>
          t.id === editingId ? { ...currentTemplate, id: editingId } as Template : t
        )
      );
      toast({
        title: 'Template Updated',
        description: 'The template has been updated successfully.',
      });
    } else {
      const newTemplate: Template = {
        ...currentTemplate,
        id: Date.now().toString(),
      } as Template;
      setTemplates([...templates, newTemplate]);
      toast({
        title: 'Template Created',
        description: 'New template has been created successfully.',
      });
    }

    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setCurrentTemplate({
      name: '',
      type: 'Email',
      category: '',
      subject: '',
      content: '',
    });
    setEditingId(null);
  };

  const handleAddNew = () => {
    resetForm();
    openModal();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Notification Templates</h1>
          <p className="text-muted-foreground">Manage email and SMS templates</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" />
          Add Template
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Templates</CardTitle>
          <CardDescription>Pre-configured message templates for common notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={templates}
            onEdit={handleEdit}
            onDelete={handleDelete}
            searchable
            searchPlaceholder="Search templates..."
          />
        </CardContent>
      </Card>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={editingId ? 'Edit Template' : 'Add New Template'}
        description="Configure notification template details"
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="template-name">Template Name</Label>
              <Input
                id="template-name"
                value={currentTemplate.name}
                onChange={(e) =>
                  setCurrentTemplate({ ...currentTemplate, name: e.target.value })
                }
                placeholder="e.g., Welcome Message"
                required
              />
            </div>
            <div>
              <Label htmlFor="template-type">Type</Label>
              <Select
                value={currentTemplate.type}
                onValueChange={(value: 'Email' | 'SMS') =>
                  setCurrentTemplate({ ...currentTemplate, type: value })
                }
              >
                <SelectTrigger id="template-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Email">Email</SelectItem>
                  <SelectItem value="SMS">SMS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="template-category">Category</Label>
            <Select
              value={currentTemplate.category}
              onValueChange={(value) =>
                setCurrentTemplate({ ...currentTemplate, category: value })
              }
            >
              <SelectTrigger id="template-category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admission">Admission</SelectItem>
                <SelectItem value="Fees">Fees</SelectItem>
                <SelectItem value="Exams">Exams</SelectItem>
                <SelectItem value="Attendance">Attendance</SelectItem>
                <SelectItem value="General">General</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {currentTemplate.type === 'Email' && (
            <div>
              <Label htmlFor="template-subject">Subject</Label>
              <Input
                id="template-subject"
                value={currentTemplate.subject}
                onChange={(e) =>
                  setCurrentTemplate({ ...currentTemplate, subject: e.target.value })
                }
                placeholder="Email subject line"
              />
            </div>
          )}

          <div>
            <Label htmlFor="template-content">Content</Label>
            <Textarea
              id="template-content"
              value={currentTemplate.content}
              onChange={(e) =>
                setCurrentTemplate({ ...currentTemplate, content: e.target.value })
              }
              placeholder="Use placeholders like {student_name}, {school_name}, {amount}, {date}"
              className="min-h-[150px]"
              required
            />
            <p className="text-sm text-muted-foreground mt-2">
              Available placeholders: {'{student_name}'}, {'{school_name}'}, {'{amount}'},{' '}
              {'{date}'}, {'{subject}'}, {'{class}'}
            </p>
          </div>

          <div className="flex gap-4">
            <Button type="submit">{editingId ? 'Update' : 'Create'} Template</Button>
            <Button type="button" variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
