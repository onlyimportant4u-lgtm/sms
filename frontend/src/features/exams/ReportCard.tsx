import { useState } from 'react';
import { Download, Printer, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface SubjectMark {
  subject: string;
  marksObtained: number;
  maxMarks: number;
  grade: string;
}

interface ReportCardData {
  studentName: string;
  rollNo: string;
  className: string;
  section: string;
  examType: string;
  subjects: SubjectMark[];
  totalMarks: number;
  maxTotalMarks: number;
  percentage: number;
  overallGrade: string;
  rank: number;
  attendance: string;
}

const mockReportCard: ReportCardData = {
  studentName: 'John Doe',
  rollNo: '101',
  className: 'Class 10',
  section: 'A',
  examType: 'Mid-Term',
  subjects: [
    { subject: 'Mathematics', marksObtained: 85, maxMarks: 100, grade: 'A' },
    { subject: 'Science', marksObtained: 78, maxMarks: 100, grade: 'B+' },
    { subject: 'English', marksObtained: 92, maxMarks: 100, grade: 'A+' },
    { subject: 'Social Studies', marksObtained: 88, maxMarks: 100, grade: 'A' },
    { subject: 'Hindi', marksObtained: 75, maxMarks: 100, grade: 'B+' },
  ],
  totalMarks: 418,
  maxTotalMarks: 500,
  percentage: 83.6,
  overallGrade: 'A',
  rank: 5,
  attendance: '95%',
};

export default function ReportCard() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [reportCard, setReportCard] = useState<ReportCardData | null>(null);

  const handleSearch = () => {
    if (selectedClass && selectedExam && rollNo) {
      setReportCard(mockReportCard);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Report Card</h1>
        <p className="text-muted-foreground mt-1">
          View and download student report cards
        </p>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <label className="text-sm font-medium mb-2 block">Roll No</label>
            <Input
              placeholder="Enter roll number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <Button onClick={handleSearch} className="w-full gap-2">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </Card>

      {reportCard && (
        <Card className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="text-center flex-1">
              <h2 className="text-2xl font-bold text-foreground">REPORT CARD</h2>
              <p className="text-muted-foreground mt-1">{reportCard.examType} Examination</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Student Name</p>
              <p className="font-semibold">{reportCard.studentName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Roll No</p>
              <p className="font-semibold">{reportCard.rollNo}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Class</p>
              <p className="font-semibold">{reportCard.className} - {reportCard.section}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Attendance</p>
              <p className="font-semibold">{reportCard.attendance}</p>
            </div>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Subject</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Max Marks</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Marks Obtained</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Grade</th>
                </tr>
              </thead>
              <tbody>
                {reportCard.subjects.map((subject, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-3">{subject.subject}</td>
                    <td className="px-4 py-3 text-center">{subject.maxMarks}</td>
                    <td className="px-4 py-3 text-center">{subject.marksObtained}</td>
                    <td className="px-4 py-3 text-center font-semibold">{subject.grade}</td>
                  </tr>
                ))}
                <tr className="border-t-2 font-bold">
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3 text-center">{reportCard.maxTotalMarks}</td>
                  <td className="px-4 py-3 text-center">{reportCard.totalMarks}</td>
                  <td className="px-4 py-3 text-center">{reportCard.overallGrade}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Percentage</p>
              <p className="text-2xl font-bold text-foreground">{reportCard.percentage}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Overall Grade</p>
              <p className="text-2xl font-bold text-foreground">{reportCard.overallGrade}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Class Rank</p>
              <p className="text-2xl font-bold text-foreground">{reportCard.rank}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
