import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface StudentMark {
  id: string;
  rollNo: string;
  studentName: string;
  marksObtained: number;
  maxMarks: number;
}

const mockStudents: StudentMark[] = [
  { id: '1', rollNo: '101', studentName: 'John Doe', marksObtained: 0, maxMarks: 100 },
  { id: '2', rollNo: '102', studentName: 'Jane Smith', marksObtained: 0, maxMarks: 100 },
  { id: '3', rollNo: '103', studentName: 'Alice Johnson', marksObtained: 0, maxMarks: 100 },
];

export default function MarksEntry() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [students, setStudents] = useState<StudentMark[]>(mockStudents);

  const handleMarksChange = (id: string, marks: string) => {
    const numMarks = parseInt(marks) || 0;
    setStudents(students.map(s => 
      s.id === id ? { ...s, marksObtained: numMarks } : s
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Marks Entry</h1>
        <p className="text-muted-foreground mt-1">
          Enter examination marks for students
        </p>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Class</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="class-10-a">Class 10 A</SelectItem>
                <SelectItem value="class-10-b">Class 10 B</SelectItem>
                <SelectItem value="class-9-a">Class 9 A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Exam Type</label>
            <Select value={selectedExam} onValueChange={setSelectedExam}>
              <SelectTrigger>
                <SelectValue placeholder="Select Exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mid-term">Mid-Term</SelectItem>
                <SelectItem value="final">Final</SelectItem>
                <SelectItem value="unit-test">Unit Test</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Subject</label>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedClass && selectedExam && selectedSubject && (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Roll No</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Student Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Max Marks</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Marks Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-t">
                      <td className="px-4 py-3">{student.rollNo}</td>
                      <td className="px-4 py-3">{student.studentName}</td>
                      <td className="px-4 py-3">{student.maxMarks}</td>
                      <td className="px-4 py-3">
                        <Input
                          type="number"
                          min="0"
                          max={student.maxMarks}
                          value={student.marksObtained}
                          onChange={(e) => handleMarksChange(student.id, e.target.value)}
                          className="w-24"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Marks
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
