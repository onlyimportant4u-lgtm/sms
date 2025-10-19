import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Send, UserPlus, X } from 'lucide-react';

export default function Email() {
  const { toast } = useToast();
  const [recipients, setRecipients] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState('');
  const [emailData, setEmailData] = useState({
    recipientType: 'custom',
    subject: '',
    body: '',
  });

  const addRecipient = () => {
    if (currentEmail && !recipients.includes(currentEmail)) {
      setRecipients([...recipients, currentEmail]);
      setCurrentEmail('');
    }
  };

  const removeRecipient = (email: string) => {
    setRecipients(recipients.filter((e) => e !== email));
  };

  const handleSend = () => {
    if (recipients.length === 0 && emailData.recipientType === 'custom') {
      toast({
        title: 'Error',
        description: 'Please add at least one recipient.',
        variant: 'destructive',
      });
      return;
    }

    if (!emailData.subject || !emailData.body) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Email Sent Successfully',
      description: `Email has been sent to ${
        emailData.recipientType === 'custom' ? recipients.length : emailData.recipientType
      } recipient(s).`,
    });

    // Reset form
    setRecipients([]);
    setEmailData({ recipientType: 'custom', subject: '', body: '' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Mail className="h-8 w-8" />
          Send Email
        </h1>
        <p className="text-muted-foreground">Compose and send emails to students, staff, or parents</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compose Email</CardTitle>
          <CardDescription>Create and send email notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="recipient-type">Recipient Type</Label>
            <Select
              value={emailData.recipientType}
              onValueChange={(value) =>
                setEmailData({ ...emailData, recipientType: value })
              }
            >
              <SelectTrigger id="recipient-type">
                <SelectValue placeholder="Select recipient type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Recipients</SelectItem>
                <SelectItem value="All Students">All Students</SelectItem>
                <SelectItem value="All Staff">All Staff</SelectItem>
                <SelectItem value="All Parents">All Parents</SelectItem>
                <SelectItem value="Class 1">Class 1</SelectItem>
                <SelectItem value="Class 2">Class 2</SelectItem>
                <SelectItem value="Class 3">Class 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {emailData.recipientType === 'custom' && (
            <div>
              <Label htmlFor="recipients">Recipients</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  id="recipients"
                  type="email"
                  value={currentEmail}
                  onChange={(e) => setCurrentEmail(e.target.value)}
                  placeholder="Enter email address"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addRecipient();
                    }
                  }}
                />
                <Button type="button" onClick={addRecipient} size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recipients.map((email) => (
                  <Badge key={email} variant="secondary">
                    {email}
                    <button
                      onClick={() => removeRecipient(email)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={emailData.subject}
              onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
              placeholder="Enter email subject"
            />
          </div>

          <div>
            <Label htmlFor="body">Message</Label>
            <Textarea
              id="body"
              value={emailData.body}
              onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
              placeholder="Type your message here..."
              className="min-h-[200px]"
            />
          </div>

          <Button onClick={handleSend} className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Send Email
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
