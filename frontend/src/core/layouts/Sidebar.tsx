import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserCog,
  BookOpen,
  DollarSign,
  Library,
  ClipboardCheck,
  Calendar,
  Bus,
  Bell,
  BarChart3,
  Settings,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  icon: any;
  href?: string;
  children?: { title: string; href: string }[];
}

const navigation: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    title: 'Students',
    icon: Users,
    children: [
      { title: 'Student List', href: '/students' },
      { title: 'Admission', href: '/students/admission' },
      { title: 'Promote Students', href: '/students/promote' },
      { title: 'Transfer Students', href: '/students/transfer' },
      { title: 'Student Profile', href: '/students/profile' },
    ],
  },
  {
    title: 'Staff',
    icon: UserCog,
    children: [
      { title: 'Staff List', href: '/staff' },
      { title: 'Staff Admission', href: '/staff/admission' },
      { title: 'Payroll', href: '/staff/payroll' },
      { title: 'Staff Profile', href: '/staff/profile' },
      { title: 'Salary Slip', href: '/staff/salary' },
    ],
  },
  {
    title: 'Academics',
    icon: BookOpen,
    children: [
      { title: 'Classes & Sections', href: '/academics/classes' },
      { title: 'Subjects', href: '/academics/subjects' },
      { title: 'Sections', href: '/academics/sections' },
    ],
  },
  {
    title: 'Fees',
    icon: DollarSign,
    children: [
      { title: 'Fee Collection', href: '/fees/collection' },
      { title: 'Fee Types', href: '/fees/type' },
      { title: 'Fee Structure', href: '/fees/structure' },
      { title: 'Reports', href: '/fees/reports' },
    ],
  },
  {
    title: 'Library',
    icon: Library,
    children: [
      { title: 'Books', href: '/library/books' },
      { title: 'Add Book', href: '/library/add-book' },
      { title: 'Issue/Return', href: '/library/issue' },
      { title: 'Members', href: '/library/members' },
      { title: 'Fine Management', href: '/library/fine-management' },
      { title: 'New Acquisition', href: '/library/acquisition' },
    ],
  },
  {
    title: 'Exams',
    icon: ClipboardCheck,
    children: [
      { title: 'Exam Schedule', href: '/exams/schedule' },
      { title: 'Marks Entry', href: '/exams/marks' },
      { title: 'Report Cards', href: '/exams/reports' },
      { title: 'Exam Types', href: '/exams/type' },
    ],
  },
  {
    title: 'Attendance',
    icon: Calendar,
    children: [
      { title: 'Student Attendance', href: '/attendance/student' },
      { title: 'Staff Attendance', href: '/attendance/staff' },
    ],
  },
  {
    title: 'Transport',
    icon: Bus,
    children: [
      { title: 'Vehicles', href: '/transport/vehicles' },
      { title: 'Route Management', href: '/transport/route' },
      { title: 'Student Route Assignment', href: '/transport/assignment' },
      { title: 'Driver Management', href: '/transport/driver' },
      { title: 'Transport Fee', href: '/transport/fee' },
      { title: 'Transport Reports', href: '/transport/reports' },
    ],
  },
  {
    title: 'Communication',
    icon: Bell,
    children: [
      { title: 'Announcements', href: '/communication/announcements' },
      { title: 'Send Email', href: '/communication/email' },
      { title: 'Send SMS', href: '/communication/sms' },
      { title: 'Notification Templates', href: '/communication/notification-templates' },
    ],
  },
  {
    title: 'Reports',
    icon: BarChart3,
    children: [
      { title: 'Dashboard Reports', href: '/reports' },
      { title: 'Exam Reports', href: '/reports/exams' },
      { title: 'Fee Reports', href: '/reports/fees' },
      { title: 'Attendance Reports', href: '/reports/attendance' },
    ],
  },
  {
    title: 'Settings',
    icon: Settings,
    children: [
      { title: 'General Settings', href: '/settings/general' },
      { title: 'Theme Settings', href: '/settings/theme' },
      { title: 'Email Settings', href: '/settings/email' },
      { title: 'SMS Settings', href: '/settings/sms' },
      { title: 'Payment Gateway', href: '/settings/payment-gateway' },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    const matchedParent = navigation.find((item) => {
      if (item.children) {
        return item.children.some((child) => location.pathname.startsWith(child.href));
      }
      return false;
    });

    if (matchedParent) {
      setOpenMenu(matchedParent.title);
    } else {
      setOpenMenu(null);
    }
  }, [location.pathname]);

  const toggleMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  const toggleSidebar = () => {
    setMobileOpen((prev) => !prev);
  };

  const isParentActive = (item: NavItem) => {
    if (item.href) {
      return location.pathname === item.href;
    }
    if (item.children) {
      return openMenu === item.title || item.children.some((child) => location.pathname.startsWith(child.href));
    }
    return false;
  };

  return (
    <>
      {/* Toggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-sidebar-background p-2 border border-sidebar-border rounded-md shadow-sm"
        onClick={toggleSidebar}
        aria-label={mobileOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {mobileOpen ? <X className="h-5 w-5 text-sidebar-foreground" /> : <Menu className="h-5 w-5 text-sidebar-foreground" />}
      </button>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-screen w-64 bg-sidebar-background border-r border-sidebar-border shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out',
          mobileOpen ? 'translate-x-0 z-50' : '-translate-x-full z-40',
          'lg:static lg:translate-x-0 lg:shadow-none lg:z-auto'
        )}
        aria-hidden={!mobileOpen && window.innerWidth < 1024}
      >
        {/* Mobile close button */}
        <div className="lg:hidden absolute top-4 right-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-md hover:bg-sidebar-accent/50 transition"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5 text-sidebar-foreground" />
          </button>
        </div>

        {/* Header */}
        <div className="p-6 border-b border-sidebar-border flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">School</h1>
            <p className="text-xs text-sidebar-foreground/70">Management System</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <div key={item.title}>
              {item.href ? (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent',
                      isActive || isParentActive(item)
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
                    )
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </NavLink>
              ) : (
                <>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={cn(
                      'flex items-center justify-between w-full gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent hover:border-sidebar-border/40',
                      isParentActive(item)
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </div>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        openMenu === item.title && 'rotate-180'
                      )}
                    />
                  </button>

                  {openMenu === item.title && item.children && (
                    <div className="ml-8 mt-1 space-y-1 border-l border-sidebar-border/40 pl-4">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            cn(
                              'block px-3 py-2 rounded-lg text-sm transition-colors border border-transparent',
                              isActive
                                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium border-sidebar-border/50'
                                : 'text-sidebar-foreground/90 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                            )
                          }
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
