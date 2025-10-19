import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, UserPlus, X } from 'lucide-react';

export default function SMS() {
  const { toast } = useToast();
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);
  const [currentPhone, setCurrentPhone] = useState('');
  const [smsData, setSmsData] = useState({
    recipientType: 'custom',
    message: '',
  });

  const addPhoneNumber = () => {
    if (currentPhone && !phoneNumbers.includes(currentPhone)) {
      setPhoneNumbers([...phoneNumbers, currentPhone]);
      setCurrentPhone('');
    }
  };

  const removePhoneNumber = (phone: string) => {
    setPhoneNumbers(phoneNumbers.filter((p) => p !== phone));
  };

  const handleSend = () => {
    if (phoneNumbers.length === 0 && smsData.recipientType === 'custom') {
      toast({
        title: 'Error',
        description: 'Please add at least one phone number.',
        variant: 'destructive',
      });
      return;
    }

    if (!smsData.message) {
      toast({
        title: 'Error',
        description: 'Please enter a message.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'SMS Sent Successfully',
      description: `Message has been sent to ${
        smsData.recipientType === 'custom' ? phoneNumbers.length : smsData.recipientType
      } recipient(s).`,
    });

    // Reset form
    setPhoneNumbers([]);
    setSmsData({ recipientType: 'custom', message: '' });
  };

  const characterCount = smsData.message.length;
  const smsCount = Math.ceil(characterCount / 160);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <MessageSquare className="h-8 w-8" />
          Send SMS
        </h1>
        <p className="text-muted-foreground">Send SMS notifications to students, staff, or parents</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compose SMS</CardTitle>
          <CardDescription>Create and send SMS notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="sms-recipient-type">Recipient Type</Label>
            <Select
              value={smsData.recipientType}
              onValueChange={(value) =>
                setSmsData({ ...smsData, recipientType: value })
              }
            >
              <SelectTrigger id="sms-recipient-type">
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

          {smsData.recipientType === 'custom' && (
            <div>
              <Label htmlFor="phone-numbers">Phone Numbers</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  id="phone-numbers"
                  type="tel"
                  value={currentPhone}
                  onChange={(e) => setCurrentPhone(e.target.value)}
                  placeholder="Enter phone number (with country code)"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addPhoneNumber();
                    }
                  }}
                />
                <Button type="button" onClick={addPhoneNumber} size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {phoneNumbers.map((phone) => (
                  <Badge key={phone} variant="secondary">
                    {phone}
                    <button
                      onClick={() => removePhoneNumber(phone)}
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
            <Label htmlFor="sms-message">Message</Label>
            <Textarea
              id="sms-message"
              value={smsData.message}
              onChange={(e) => setSmsData({ ...smsData, message: e.target.value })}
              placeholder="Type your message here..."
              className="min-h-[150px]"
              maxLength={640}
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>
                {characterCount} characters ({smsCount} SMS)
              </span>
              <span>{640 - characterCount} remaining</span>
            </div>
          </div>

          <Button onClick={handleSend} className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Send SMS
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
