import { Module } from '../../../types';

// Operations Modules
export const operationsModules: Module[] = [
  {
    id: 'ops-001',
    title: 'Project Management System',
    description: 'Comprehensive project planning and tracking with task assignments, timeline visualization, and resource allocation tools.',
    category: 'Operations',
    version: '3.2.1',
    releaseDate: new Date('2023-02-05'),
    size: '45.7',
    downloadCount: 1532,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-12')
  },
  {
    id: 'ops-002',
    title: 'Inventory Management',
    description: 'Track inventory levels, manage stock movements, and optimize ordering with barcode scanning and supplier management.',
    category: 'Operations',
    version: '2.6.3',
    releaseDate: new Date('2022-11-20'),
    size: '38.9',
    downloadCount: 1247,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-04-08')
  },
  {
    id: 'ops-003',
    title: 'Supply Chain Optimizer',
    description: 'Streamline procurement, logistics, and distribution with demand forecasting, route optimization, and vendor performance analytics.',
    category: 'Operations',
    version: '2.0.5',
    releaseDate: new Date('2023-01-25'),
    size: '42.3',
    downloadCount: 865,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-03-30')
  },
  {
    id: 'ops-004',
    title: 'Quality Control System',
    description: 'Implement quality assurance processes with inspection checklists, defect tracking, and compliance documentation.',
    category: 'Operations',
    version: '1.8.2',
    releaseDate: new Date('2022-12-15'),
    size: '31.6',
    downloadCount: 723,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-02-28')
  },
  {
    id: 'ops-005',
    title: 'Facility Management Tool',
    description: 'Manage workplace facilities with maintenance scheduling, space utilization tracking, and service request management.',
    category: 'Operations',
    version: '2.2.0',
    releaseDate: new Date('2023-03-10'),
    size: '35.4',
    downloadCount: 598,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-05')
  }
];