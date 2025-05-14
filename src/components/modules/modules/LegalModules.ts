import { Module } from '../../../types';

// Legal & Compliance Modules
export const legalModules: Module[] = [
  {
    id: 'legal-001',
    title: 'Contract Management System',
    description: 'Centralize contract creation, storage, and lifecycle management with automated renewals, compliance tracking, and e-signature integration.',
    category: 'Legal & Compliance',
    version: '2.6.2',
    releaseDate: new Date('2023-01-12'),
    size: '39.8',
    downloadCount: 945,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-08')
  },
  {
    id: 'legal-002',
    title: 'Regulatory Compliance Tracker',
    description: 'Monitor and manage compliance requirements across jurisdictions with automated updates, risk assessments, and audit trails.',
    category: 'Legal & Compliance',
    version: '3.1.0',
    releaseDate: new Date('2023-02-25'),
    size: '44.5',
    downloadCount: 782,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-04-30')
  },
  {
    id: 'legal-003',
    title: 'Data Privacy Manager',
    description: 'Ensure GDPR, CCPA, and other privacy regulation compliance with data mapping, consent management, and subject access request handling.',
    category: 'Legal & Compliance',
    version: '2.4.3',
    releaseDate: new Date('2022-12-08'),
    size: '37.2',
    downloadCount: 1056,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-03-15')
  },
  {
    id: 'legal-004',
    title: 'Policy Management Platform',
    description: 'Create, distribute, and track company policies with version control, acknowledgment workflows, and compliance reporting.',
    category: 'Legal & Compliance',
    version: '1.9.7',
    releaseDate: new Date('2023-03-20'),
    size: '31.4',
    downloadCount: 624,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-25')
  },
  {
    id: 'legal-005',
    title: 'Intellectual Property Tracker',
    description: 'Manage patents, trademarks, and copyrights with filing deadlines, renewal reminders, and infringement monitoring tools.',
    category: 'Legal & Compliance',
    version: '2.0.1',
    releaseDate: new Date('2022-11-10'),
    size: '33.6',
    downloadCount: 518,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-02-08')
  }
];