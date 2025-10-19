import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function EmailConfig() {
  const { toast } = useToast();
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [provider, setProvider] = useState('smtp');

  const [smtpConfig, setSmtpConfig] = useState({
    host: '',
    port: '587',
    username: '',
    password: '',
    encryption: 'tls',
    fromEmail: '',
    fromName: '',
  });

  const [sendgridConfig, setSendgridConfig] = useState({
    apiKey: '',
    fromEmail: '',
    fromName: '',
  });

  const handleSave = () => {
    toast({
      title: 'Email Configuration Saved',
      description: 'Email settings have been updated successfully.',
    });
  };

  const handleTestEmail = () => {
    toast({
      title: 'Test Email Sent',
      description: 'A test email has been sent to verify the configuration.',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Email Configuration</h1>
        <p className="text-muted-foreground">Configure email settings for notifications</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Email Gateway Settings</CardTitle>
              <CardDescription>Configure your email service provider</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Switch checked={emailEnabled} onCheckedChange={setEmailEnabled} />
              <Label>Enable Email</Label>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="email-provider">Email Provider</Label>
            <Select value={provider} onValueChange={setProvider} disabled={!emailEnabled}>
              <SelectTrigger id="email-provider">
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="smtp">SMTP</SelectItem>
                <SelectItem value="sendgrid">SendGrid</SelectItem>
                <SelectItem value="mailgun">Mailgun</SelectItem>
                <SelectItem value="ses">AWS SES</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {provider === 'smtp' && (
            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold">SMTP Configuration</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtp-host">SMTP Host</Label>
                  <Input
                    id="smtp-host"
                    value={smtpConfig.host}
                    onChange={(e) => setSmtpConfig({ ...smtpConfig, host: e.target.value })}
                    placeholder="smtp.gmail.com"
                    disabled={!emailEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="smtp-port">Port</Label>
                  <Input
                    id="smtp-port"
                    value={smtpConfig.port}
                    onChange={(e) => setSmtpConfig({ ...smtpConfig, port: e.target.value })}
                    placeholder="587"
                    disabled={!emailEnabled}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="smtp-username">Username</Label>
                <Input
                  id="smtp-username"
                  value={smtpConfig.username}
                  onChange={(e) => setSmtpConfig({ ...smtpConfig, username: e.target.value })}
                  placeholder="your-email@example.com"
                  disabled={!emailEnabled}
                />
              </div>
              <div>
                <Label htmlFor="smtp-password">Password</Label>
                <Input
                  id="smtp-password"
                  type="password"
                  value={smtpConfig.password}
                  onChange={(e) => setSmtpConfig({ ...smtpConfig, password: e.target.value })}
                  placeholder="Your password"
                  disabled={!emailEnabled}
                />
              </div>
              <div>
                <Label htmlFor="smtp-encryption">Encryption</Label>
                <Select
                  value={smtpConfig.encryption}
                  onValueChange={(value) =>
                    setSmtpConfig({ ...smtpConfig, encryption: value })
                  }
                  disabled={!emailEnabled}
                >
                  <SelectTrigger id="smtp-encryption">
                    <SelectValue placeholder="Select encryption" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tls">TLS</SelectItem>
                    <SelectItem value="ssl">SSL</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtp-from-email">From Email</Label>
                  <Input
                    id="smtp-from-email"
                    value={smtpConfig.fromEmail}
                    onChange={(e) =>
                      setSmtpConfig({ ...smtpConfig, fromEmail: e.target.value })
                    }
                    placeholder="noreply@school.com"
                    disabled={!emailEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="smtp-from-name">From Name</Label>
                  <Input
                    id="smtp-from-name"
                    value={smtpConfig.fromName}
                    onChange={(e) =>
                      setSmtpConfig({ ...smtpConfig, fromName: e.target.value })
                    }
                    placeholder="School Name"
                    disabled={!emailEnabled}
                  />
                </div>
              </div>
            </div>
          )}

          {provider === 'sendgrid' && (
            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold">SendGrid Configuration</h3>
              <div>
                <Label htmlFor="sendgrid-key">API Key</Label>
                <Input
                  id="sendgrid-key"
                  type="password"
                  value={sendgridConfig.apiKey}
                  onChange={(e) =>
                    setSendgridConfig({ ...sendgridConfig, apiKey: e.target.value })
                  }
                  placeholder="SG.xxxxxxxxxxxx"
                  disabled={!emailEnabled}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sendgrid-from-email">From Email</Label>
                  <Input
                    id="sendgrid-from-email"
                    value={sendgridConfig.fromEmail}
                    onChange={(e) =>
                      setSendgridConfig({ ...sendgridConfig, fromEmail: e.target.value })
                    }
                    placeholder="noreply@school.com"
                    disabled={!emailEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="sendgrid-from-name">From Name</Label>
                  <Input
                    id="sendgrid-from-name"
                    value={sendgridConfig.fromName}
                    onChange={(e) =>
                      setSendgridConfig({ ...sendgridConfig, fromName: e.target.value })
                    }
                    placeholder="School Name"
                    disabled={!emailEnabled}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button onClick={handleSave} disabled={!emailEnabled}>
              Save Configuration
            </Button>
            <Button variant="outline" onClick={handleTestEmail} disabled={!emailEnabled}>
              Send Test Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
