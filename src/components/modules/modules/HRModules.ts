import { Module } from '../../../types';

// Human Resources Modules
export const hrModules: Module[] = [
  {
    id: 'hr-001',
    title: 'Employee Onboarding System',
    description: 'Streamline the onboarding process with automated workflows, document management, and training schedules for new hires.',
    category: 'Human Resources',
    version: '2.4.0',
    releaseDate: new Date('2023-02-10'),
    size: '38.5',
    downloadCount: 1142,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-15')
  },
  {
    id: 'hr-002',
    title: 'Performance Management Suite',
    description: 'Comprehensive tools for goal setting, continuous feedback, performance reviews, and development planning to drive employee growth.',
    category: 'Human Resources',
    version: '3.1.2',
    releaseDate: new Date('2023-01-20'),
    size: '42.3',
    downloadCount: 876,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-04-28')
  },
  {
    id: 'hr-003',
    title: 'Time & Attendance Tracker',
    description: 'Monitor employee attendance, manage time-off requests, and track work hours with scheduling tools and compliance reporting.',
    category: 'Human Resources',
    version: '1.9.5',
    releaseDate: new Date('2022-11-30'),
    size: '29.7',
    downloadCount: 1320,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-03-18')
  },
  {
    id: 'hr-004',
    title: 'Recruitment & Applicant Tracking',
    description: 'Manage the entire recruitment lifecycle from job posting to candidate evaluation and hiring with collaborative assessment tools.',
    category: 'Human Resources',
    version: '2.6.1',
    releaseDate: new Date('2023-03-05'),
    size: '36.2',
    downloadCount: 754,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-06-10')
  },
  {
    id: 'hr-005',
    title: 'Employee Benefits Administration',
    description: 'Simplify benefits enrollment, management, and communication with automated eligibility tracking and self-service portals.',
    category: 'Human Resources',
    version: '1.7.3',
    releaseDate: new Date('2022-12-15'),
    size: '33.8',
    downloadCount: 692,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-04-05')
  }
];