import { MdDashboard, MdPeople, MdClass, MdSettings } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaUserCheck, FaFileAlt, FaPoll } from 'react-icons/fa';

export interface NavItem {
  name: string;
  path: string;
  icon: ElementType; 
}

export interface NavGroup {
  title: string;
  links: NavItem[];
}
interface Student {
  id: string;
  name: string;
  class: string;
  gender: 'Male' | 'Female'; // restricts to known values
}
export const students: Student[] = [
  { id: 'S001', name: 'Alice Johnson', class: '10A', gender: 'Female' },
  { id: 'S002', name: 'Bob Smith', class: '10B', gender: 'Male' },
  { id: 'S003', name: 'Charlie Kim', class: '10C', gender: 'Male' },
  { id: 'S004', name: 'Diana Prince', class: '10A', gender: 'Female' },
  { id: 'S005', name: 'Ethan Brown', class: '10B', gender: 'Male' },
  { id: 'S006', name: 'Fiona Davis', class: '10C', gender: 'Female' },
   { id: 'S001', name: 'Alice Johnson', class: '10A', gender: 'Female' },
  { id: 'S002', name: 'Bob Smith', class: '10B', gender: 'Male' },
  { id: 'S003', name: 'Charlie Kim', class: '10C', gender: 'Male' },
  { id: 'S004', name: 'Diana Prince', class: '10A', gender: 'Female' },
  { id: 'S005', name: 'Ethan Brown', class: '10B', gender: 'Male' },
  { id: 'S006', name: 'Fiona Davis', class: '10C', gender: 'Female' },
   { id: 'S001', name: 'Alice Johnson', class: '10A', gender: 'Female' },
  { id: 'S002', name: 'Bob Smith', class: '10B', gender: 'Male' },
  { id: 'S003', name: 'Charlie Kim', class: '10C', gender: 'Male' },
  { id: 'S004', name: 'Diana Prince', class: '10A', gender: 'Female' },
  { id: 'S005', name: 'Ethan Brown', class: '10B', gender: 'Male' },
  { id: 'S006', name: 'Fiona Davis', class: '10C', gender: 'Female' },
];

export const adminLinks: NavGroup[] = [
  {
    title: 'Main',
    links: [
      { name: 'Dashboard', path: '/home/dashboard', icon: MdDashboard },
    ],
  },
  {
    title: 'Management',
    links: [
      { name: 'Students', path: '/home/students', icon: MdPeople },
      { name: 'Teachers', path: '/home/teachers', icon: FaChalkboardTeacher },
      { name: 'Classes', path: '/home/classes', icon: MdClass },
    ],
  },
  {
    title: 'Academic',
    links: [
      { name: 'Attendance', path: '/home/attendance', icon: FaUserCheck },
      { name: 'Exams', path: '/home/exams', icon: FaFileAlt },
      { name: 'Results', path: '/home/results', icon: FaPoll },
    ],
  },
  {
    title: 'Settings',
    links: [
      { name: 'Settings', path: '/home/settings', icon: MdSettings },
    ],
  },
];