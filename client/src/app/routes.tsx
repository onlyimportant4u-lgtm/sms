// src/app/routes.tsx

import { Navigate } from 'react-router-dom';
import { MainLayout } from '@/core/layouts/MainLayout';
import Dashboard from '@/features/dashboard/Dashboard';

// Students
import { StudentList, StudentProfile, TransferCertificate, StudentAdmission, PromoteStudents } from '@/features/students';

// Fees
import { FeeCollection, FeeStructure, FeeReports, FeeType } from '@/features/fees';

// Staff
import { StaffList, StaffAdmission, StaffProfile, Payroll, SalarySlip } from '@/features/staff';

// Academics
import { ClassList, SectionManagement, SubjectManagement } from '@/features/academics';

// Library
import { BookList, IssueReturn, MemberList, AddBook, NewAcquisition, FineManagement } from '@/features/library';

// Exams
import { ExamSchedule, ExamType, MarkEntry, ReportCard } from '@/features/exams';

// Attendance
import { StudentAttendance, StaffAttendance } from '@/features/attendance';

// Transport
import { VehicleList,RouteManagement, StudentRouteAssignment, DriverManagement, TransportFee, TransportReports } from '@/features/transport';

// Communication
import { AnnouncementList, Email, SMS, NotificationTemplates  } from '@/features/communication';

// Reports
import { DashboardReports, ExamReport, FeeReport, AttendanceReport } from '@/features/reports';


import { GeneralSettings, EmailConfig , SMSConfig, PaymentGateway, Theme } from '@/features/settings';

import Login from '@/features/users/Login';
import { useAuth } from '@/core/context/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      
      { path: 'students', element: <StudentList /> },
      { path: 'students/admission', element: <StudentAdmission /> },
      { path: 'students/profile', element: <StudentProfile /> },
      { path: 'students/transfer', element: <TransferCertificate /> },
      { path: 'students/promote', element: <PromoteStudents /> },
      
      { path: 'staff', element: <StaffList /> },
      { path: 'staff/admission', element: <StaffAdmission /> },
      { path: 'staff/profile', element: <StaffProfile /> },
      { path: 'staff/payroll', element: <Payroll /> },
      { path: 'staff/salary', element: <SalarySlip /> },
      
      { path: 'academics/classes', element: <ClassList /> },
      { path: 'academics/sections', element: <SectionManagement /> },
      { path: 'academics/subjects', element: <SubjectManagement /> },

      { path: 'fees/collection', element: <FeeCollection /> },
      { path: 'fees/type', element: <FeeType />, },
      { path: 'fees/structure', element: <FeeStructure />, },
      { path: 'fees/reports', element: <FeeReports />, },
      
      { path: 'library/books', element: <BookList />, },  
      { path: 'library/add-book', element: <AddBook />,  },
      { path: 'library/issue', element: <IssueReturn />, },
      { path: 'library/members', element: <MemberList />, },
      { path: 'library/fine-management', element: <FineManagement /> },
      { path: 'library/acquisition', element: <NewAcquisition />, },

      { path: 'exams/schedule', element: <ExamSchedule /> },
      { path: 'exams/type', element: <ExamType /> },
      { path: 'exams/marks', element: <MarkEntry /> },
      { path: 'exams/reports', element: <ReportCard /> },
      
      { path: 'attendance/student', element: <StudentAttendance /> },
      { path: 'attendance/staff', element: <StaffAttendance /> },
      
      { path: 'transport/vehicles', element: <VehicleList /> },
      { path: 'transport/route', element: <RouteManagement /> },
      { path: 'transport/assignment', element: <StudentRouteAssignment /> },
      { path: 'transport/driver', element: <DriverManagement /> },
      { path: 'transport/fee', element: <TransportFee /> },
      { path: 'transport/reports', element: <TransportReports /> },

      { path: 'communication/announcements', element: <AnnouncementList /> },
      { path: 'communication/email', element: <Email /> },
      { path: 'communication/sms', element: <SMS /> },
      { path: 'communication/notification-templates', element: <NotificationTemplates /> },
      
      { path: 'reports', element: <DashboardReports /> },
      { path:'reports/exams', element: <ExamReport /> },
      { path:'reports/fees', element: <FeeReport /> },
      { path:'reports/attendance', element: <AttendanceReport /> },
      
      { path: 'settings/general', element: <GeneralSettings /> },
      { path: '/settings/email', element: <EmailConfig /> },
      { path: '/settings/sms', element: <SMSConfig /> },
      { path: '/settings/payment-gateway', element: <PaymentGateway /> },
      { path: '/settings/theme', element: <Theme /> },
    ],
  },
];
