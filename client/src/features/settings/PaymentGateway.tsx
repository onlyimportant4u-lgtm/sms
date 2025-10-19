import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PaymentGateway() {
  const { toast } = useToast();
  const [stripeEnabled, setStripeEnabled] = useState(false);
  const [razorpayEnabled, setRazorpayEnabled] = useState(false);
  const [paytmEnabled, setPaytmEnabled] = useState(false);

  const [stripeConfig, setStripeConfig] = useState({
    publishableKey: '',
    secretKey: '',
    webhookSecret: '',
  });

  const [razorpayConfig, setRazorpayConfig] = useState({
    keyId: '',
    keySecret: '',
    webhookSecret: '',
  });

  const [paytmConfig, setPaytmConfig] = useState({
    merchantId: '',
    merchantKey: '',
    website: '',
  });

  const handleSaveStripe = () => {
    toast({
      title: 'Stripe Configuration Saved',
      description: 'Payment gateway settings have been updated successfully.',
    });
  };

  const handleSaveRazorpay = () => {
    toast({
      title: 'Razorpay Configuration Saved',
      description: 'Payment gateway settings have been updated successfully.',
    });
  };

  const handleSavePaytm = () => {
    toast({
      title: 'Paytm Configuration Saved',
      description: 'Payment gateway settings have been updated successfully.',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payment Gateway Settings</h1>
        <p className="text-muted-foreground">Configure payment gateway integrations</p>
      </div>

      <Tabs defaultValue="stripe" className="w-full">
        <TabsList>
          <TabsTrigger value="stripe">Stripe</TabsTrigger>
          <TabsTrigger value="razorpay">Razorpay</TabsTrigger>
          <TabsTrigger value="paytm">Paytm</TabsTrigger>
        </TabsList>

        <TabsContent value="stripe">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Stripe Configuration</CardTitle>
                  <CardDescription>Configure Stripe payment gateway</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={stripeEnabled}
                    onCheckedChange={setStripeEnabled}
                  />
                  <Label>Enable Stripe</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="stripe-publishable">Publishable Key</Label>
                  <Input
                    id="stripe-publishable"
                    value={stripeConfig.publishableKey}
                    onChange={(e) =>
                      setStripeConfig({ ...stripeConfig, publishableKey: e.target.value })
                    }
                    placeholder="pk_test_..."
                    disabled={!stripeEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="stripe-secret">Secret Key</Label>
                  <Input
                    id="stripe-secret"
                    type="password"
                    value={stripeConfig.secretKey}
                    onChange={(e) =>
                      setStripeConfig({ ...stripeConfig, secretKey: e.target.value })
                    }
                    placeholder="sk_test_..."
                    disabled={!stripeEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="stripe-webhook">Webhook Secret</Label>
                  <Input
                    id="stripe-webhook"
                    type="password"
                    value={stripeConfig.webhookSecret}
                    onChange={(e) =>
                      setStripeConfig({ ...stripeConfig, webhookSecret: e.target.value })
                    }
                    placeholder="whsec_..."
                    disabled={!stripeEnabled}
                  />
                </div>
              </div>
              <Button onClick={handleSaveStripe} disabled={!stripeEnabled}>
                Save Stripe Configuration
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="razorpay">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Razorpay Configuration</CardTitle>
                  <CardDescription>Configure Razorpay payment gateway</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={razorpayEnabled}
                    onCheckedChange={setRazorpayEnabled}
                  />
                  <Label>Enable Razorpay</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="razorpay-key-id">Key ID</Label>
                  <Input
                    id="razorpay-key-id"
                    value={razorpayConfig.keyId}
                    onChange={(e) =>
                      setRazorpayConfig({ ...razorpayConfig, keyId: e.target.value })
                    }
                    placeholder="rzp_test_..."
                    disabled={!razorpayEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="razorpay-key-secret">Key Secret</Label>
                  <Input
                    id="razorpay-key-secret"
                    type="password"
                    value={razorpayConfig.keySecret}
                    onChange={(e) =>
                      setRazorpayConfig({ ...razorpayConfig, keySecret: e.target.value })
                    }
                    placeholder="Key Secret"
                    disabled={!razorpayEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="razorpay-webhook">Webhook Secret</Label>
                  <Input
                    id="razorpay-webhook"
                    type="password"
                    value={razorpayConfig.webhookSecret}
                    onChange={(e) =>
                      setRazorpayConfig({ ...razorpayConfig, webhookSecret: e.target.value })
                    }
                    placeholder="Webhook Secret"
                    disabled={!razorpayEnabled}
                  />
                </div>
              </div>
              <Button onClick={handleSaveRazorpay} disabled={!razorpayEnabled}>
                Save Razorpay Configuration
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paytm">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Paytm Configuration</CardTitle>
                  <CardDescription>Configure Paytm payment gateway</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={paytmEnabled}
                    onCheckedChange={setPaytmEnabled}
                  />
                  <Label>Enable Paytm</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="paytm-merchant-id">Merchant ID</Label>
                  <Input
                    id="paytm-merchant-id"
                    value={paytmConfig.merchantId}
                    onChange={(e) =>
                      setPaytmConfig({ ...paytmConfig, merchantId: e.target.value })
                    }
                    placeholder="Merchant ID"
                    disabled={!paytmEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="paytm-merchant-key">Merchant Key</Label>
                  <Input
                    id="paytm-merchant-key"
                    type="password"
                    value={paytmConfig.merchantKey}
                    onChange={(e) =>
                      setPaytmConfig({ ...paytmConfig, merchantKey: e.target.value })
                    }
                    placeholder="Merchant Key"
                    disabled={!paytmEnabled}
                  />
                </div>
                <div>
                  <Label htmlFor="paytm-website">Website</Label>
                  <Input
                    id="paytm-website"
                    value={paytmConfig.website}
                    onChange={(e) =>
                      setPaytmConfig({ ...paytmConfig, website: e.target.value })
                    }
                    placeholder="WEBSTAGING / DEFAULT"
                    disabled={!paytmEnabled}
                  />
                </div>
              </div>
              <Button onClick={handleSavePaytm} disabled={!paytmEnabled}>
                Save Paytm Configuration
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
