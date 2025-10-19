import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SMSConfig() {
  const { toast } = useToast();
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [provider, setProvider] = useState('twilio');
  
  const [twilioConfig, setTwilioConfig] = useState({
    accountSid: '',
    authToken: '',
    phoneNumber: '',
  });

  const [msg91Config, setMsg91Config] = useState({
    authKey: '',
    senderId: '',
    route: '4',
  });

  const handleSave = () => {
    toast({
      title: 'SMS Configuration Saved',
      description: 'SMS gateway settings have been updated successfully.',
    });
  };

  const handleTestSMS = () => {
    toast({
      title: 'Test SMS Sent',
      description: 'A test message has been sent to verify the configuration.',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">SMS Configuration</h1>
        <p className="text-muted-foreground">Configure SMS gateway for notifications</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>SMS Gateway Settings</CardTitle>
              <CardDescription>Configure your SMS service provider</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Switch checked={smsEnabled} onCheckedChange={setSmsEnabled} />
              <Label>Enable SMS</Label>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="provider">SMS Provider</Label>
            <Select value={provider} onValueChange={setProvider} disabled={!smsEnabled}>
              <SelectTrigger id="provider">
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twilio">Twilio</SelectItem>
                <SelectItem value="msg91">MSG91</SelectItem>
                <SelectItem value="nexmo">Nexmo</SelectItem>
                <SelectItem value="aws-sns">AWS SNS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {provider === 'twilio' && (
            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold">Twilio Configuration</h3>
              <div>
                <Label htmlFor="twilio-sid">Account SID</Label>
                <Input
                  id="twilio-sid"
                  value={twilioConfig.accountSid}
                  onChange={(e) =>
                    setTwilioConfig({ ...twilioConfig, accountSid: e.target.value })
                  }
                  placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  disabled={!smsEnabled}
                />
              </div>
              <div>
                <Label htmlFor="twilio-token">Auth Token</Label>
                <Input
                  id="twilio-token"
                  type="password"
                  value={twilioConfig.authToken}
                  onChange={(e) =>
                    setTwilioConfig({ ...twilioConfig, authToken: e.target.value })
                  }
                  placeholder="Your auth token"
                  disabled={!smsEnabled}
                />
              </div>
              <div>
                <Label htmlFor="twilio-phone">Phone Number</Label>
                <Input
                  id="twilio-phone"
                  value={twilioConfig.phoneNumber}
                  onChange={(e) =>
                    setTwilioConfig({ ...twilioConfig, phoneNumber: e.target.value })
                  }
                  placeholder="+1234567890"
                  disabled={!smsEnabled}
                />
              </div>
            </div>
          )}

          {provider === 'msg91' && (
            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold">MSG91 Configuration</h3>
              <div>
                <Label htmlFor="msg91-key">Auth Key</Label>
                <Input
                  id="msg91-key"
                  value={msg91Config.authKey}
                  onChange={(e) =>
                    setMsg91Config({ ...msg91Config, authKey: e.target.value })
                  }
                  placeholder="Your auth key"
                  disabled={!smsEnabled}
                />
              </div>
              <div>
                <Label htmlFor="msg91-sender">Sender ID</Label>
                <Input
                  id="msg91-sender"
                  value={msg91Config.senderId}
                  onChange={(e) =>
                    setMsg91Config({ ...msg91Config, senderId: e.target.value })
                  }
                  placeholder="TXTLCL"
                  disabled={!smsEnabled}
                />
              </div>
              <div>
                <Label htmlFor="msg91-route">Route</Label>
                <Select
                  value={msg91Config.route}
                  onValueChange={(value) =>
                    setMsg91Config({ ...msg91Config, route: value })
                  }
                  disabled={!smsEnabled}
                >
                  <SelectTrigger id="msg91-route">
                    <SelectValue placeholder="Select route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Promotional</SelectItem>
                    <SelectItem value="4">Transactional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button onClick={handleSave} disabled={!smsEnabled}>
              Save Configuration
            </Button>
            <Button variant="outline" onClick={handleTestSMS} disabled={!smsEnabled}>
              Send Test SMS
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
