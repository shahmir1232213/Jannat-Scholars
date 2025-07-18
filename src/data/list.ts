
export interface NavItem {
  name: string;
  path: string;
}

export interface NavGroup {
  title: string;
  links: NavItem[];
}

export const adminLinks: NavGroup[] = [
  {
    title: 'Main',
    links: [
      { name: 'Dashboard', path: '/home/dashboard' },
    ],
  },
  {
    title: 'Management',
    links: [
      { name: 'Students', path: '/home/students' },
      { name: 'Teachers', path: '/home/teachers' },
      { name: 'Classes', path: '/home/classes' },
    ],
  },
  {
    title: 'Academic',
    links: [
      { name: 'Attendance', path: '/home/attendance' },
      { name: 'Exams', path: '/home/exams' },
      { name: 'Results', path: '/home/results' },
    ],
  },
  {
    title: 'Settings',
    links: [
      { name: 'Settings', path: '/home/settings' },
    ],
  },
];
