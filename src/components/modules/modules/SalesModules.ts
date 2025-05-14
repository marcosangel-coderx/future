import { Module } from '../../../types';

// Sales & Marketing Modules
export const salesModules: Module[] = [
  {
    id: 'sales-001',
    title: 'CRM Platform',
    description: 'Comprehensive customer relationship management system with contact management, deal tracking, and automated follow-ups.',
    category: 'Sales & Marketing',
    version: '3.5.2',
    releaseDate: new Date('2023-01-15'),
    size: '48.6',
    downloadCount: 1876,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-06-02')
  },
  {
    id: 'sales-002',
    title: 'Email Marketing Suite',
    description: 'Create, send, and analyze email campaigns with customizable templates, audience segmentation, and performance analytics.',
    category: 'Sales & Marketing',
    version: '2.8.1',
    releaseDate: new Date('2022-12-10'),
    size: '36.4',
    downloadCount: 1452,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-05-18')
  },
  {
    id: 'sales-003',
    title: 'Social Media Manager',
    description: 'Schedule, publish, and monitor social media content across multiple platforms with engagement analytics and trend reporting.',
    category: 'Sales & Marketing',
    version: '2.3.5',
    releaseDate: new Date('2023-02-20'),
    size: '32.8',
    downloadCount: 1124,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-04-15')
  },
  {
    id: 'sales-004',
    title: 'Lead Generation Tool',
    description: 'Identify and qualify potential customers with automated lead scoring, website visitor tracking, and form capture integration.',
    category: 'Sales & Marketing',
    version: '1.9.2',
    releaseDate: new Date('2022-11-05'),
    size: '29.5',
    downloadCount: 986,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-03-10')
  },
  {
    id: 'sales-005',
    title: 'Marketing Analytics Dashboard',
    description: 'Visualize and analyze marketing performance across channels with customizable KPIs, attribution modeling, and ROI calculation.',
    category: 'Sales & Marketing',
    version: '2.1.3',
    releaseDate: new Date('2023-03-01'),
    size: '38.2',
    downloadCount: 842,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-25')
  }
];