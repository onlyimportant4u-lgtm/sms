import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Theme() {
  const { toast } = useToast();
  const [themeSettings, setThemeSettings] = useState({
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    accentColor: '#f59e0b',
    fontFamily: 'Inter',
    fontSize: 'medium',
    borderRadius: 'medium',
    layoutStyle: 'modern',
  });

  const handleSave = () => {
    toast({
      title: 'Theme Settings Saved',
      description: 'Your theme preferences have been updated successfully.',
    });
  };

  const handleReset = () => {
    setThemeSettings({
      primaryColor: '#3b82f6',
      secondaryColor: '#8b5cf6',
      accentColor: '#f59e0b',
      fontFamily: 'Inter',
      fontSize: 'medium',
      borderRadius: 'medium',
      layoutStyle: 'modern',
    });
    toast({
      title: 'Theme Reset',
      description: 'Theme settings have been reset to defaults.',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Theme Settings</h1>
        <p className="text-muted-foreground">Customize the look and feel of your application</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Color Scheme</CardTitle>
            <CardDescription>Customize your application colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="primary-color"
                    type="color"
                    value={themeSettings.primaryColor}
                    onChange={(e) =>
                      setThemeSettings({ ...themeSettings, primaryColor: e.target.value })
                    }
                    className="h-10 w-20"
                  />
                  <Input
                    value={themeSettings.primaryColor}
                    onChange={(e) =>
                      setThemeSettings({ ...themeSettings, primaryColor: e.target.value })
                    }
                    placeholder="#3b82f6"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="secondary-color"
                    type="color"
                    value={themeSettings.secondaryColor}
                    onChange={(e) =>
                      setThemeSettings({ ...themeSettings, secondaryColor: e.target.value })
                    }
                    className="h-10 w-20"
                  />
                  <Input
                    value={themeSettings.secondaryColor}
                    onChange={(e) =>
                      setThemeSettings({ ...themeSettings, secondaryColor: e.target.value })
                    }
                    placeholder="#8b5cf6"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="accent-color">Accent Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="accent-color"
                    type="color"
                    value={themeSettings.accentColor}
                    onChange={(e) =>
                      setThemeSettings({ ...themeSettings, accentColor: e.target.value })
                    }
                    className="h-10 w-20"
                  />
                  <Input
                    value={themeSettings.accentColor}
                    onChange={(e) =>
                      setThemeSettings({ ...themeSettings, accentColor: e.target.value })
                    }
                    placeholder="#f59e0b"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Configure font settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="font-family">Font Family</Label>
                <Select
                  value={themeSettings.fontFamily}
                  onValueChange={(value) =>
                    setThemeSettings({ ...themeSettings, fontFamily: value })
                  }
                >
                  <SelectTrigger id="font-family">
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Roboto">Roboto</SelectItem>
                    <SelectItem value="Open Sans">Open Sans</SelectItem>
                    <SelectItem value="Lato">Lato</SelectItem>
                    <SelectItem value="Poppins">Poppins</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="font-size">Base Font Size</Label>
                <Select
                  value={themeSettings.fontSize}
                  onValueChange={(value) =>
                    setThemeSettings({ ...themeSettings, fontSize: value })
                  }
                >
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Layout & Components</CardTitle>
            <CardDescription>Customize layout appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="border-radius">Border Radius</Label>
                <Select
                  value={themeSettings.borderRadius}
                  onValueChange={(value) =>
                    setThemeSettings({ ...themeSettings, borderRadius: value })
                  }
                >
                  <SelectTrigger id="border-radius">
                    <SelectValue placeholder="Select radius" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="layout-style">Layout Style</Label>
                <Select
                  value={themeSettings.layoutStyle}
                  onValueChange={(value) =>
                    setThemeSettings({ ...themeSettings, layoutStyle: value })
                  }
                >
                  <SelectTrigger id="layout-style">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={handleSave}>Save Theme Settings</Button>
          <Button variant="outline" onClick={handleReset}>
            Reset to Default
          </Button>
        </div>
      </div>
    </div>
  );
}
