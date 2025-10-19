import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function PromoteStudents() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const handlePromotion = () => {
    alert(`Promoted students to ${selectedClass} - ${selectedSection}`);
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Promote Students</h1>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Select New Class</label>
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Class 1">Class 1</SelectItem>
            <SelectItem value="Class 2">Class 2</SelectItem>
            {/* Add more classes as needed */}
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Select New Section</label>
        <Select value={selectedSection} onValueChange={setSelectedSection}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="A">A</SelectItem>
            <SelectItem value="B">B</SelectItem>
            {/* Add more sections */}
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handlePromotion}>Promote</Button>
    </Card>
  );
}
