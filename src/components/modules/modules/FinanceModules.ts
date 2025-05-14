import { Module } from '../../../types';

// Finance & Accounting Modules
export const financeModules: Module[] = [
  {
    id: 'fin-001',
    title: 'Financial Reporting Suite',
    description: 'Comprehensive financial reporting tools with customizable dashboards, automated report generation, and compliance frameworks for GAAP and IFRS standards.',
    category: 'Finance & Accounting',
    version: '2.3.1',
    releaseDate: new Date('2023-03-15'),
    size: '45.2',
    downloadCount: 1287,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-20')
  },
  {
    id: 'fin-002',
    title: 'Expense Management System',
    description: 'Streamline expense tracking, approval workflows, and reimbursement processes with receipt scanning, policy enforcement, and integration with accounting systems.',
    category: 'Finance & Accounting',
    version: '1.8.5',
    releaseDate: new Date('2023-01-10'),
    size: '32.7',
    downloadCount: 956,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-04-12')
  },
  {
    id: 'fin-003',
    title: 'Budget Planning Tool',
    description: 'Create, manage and track budgets with forecasting capabilities, variance analysis, and scenario modeling to optimize financial planning.',
    category: 'Finance & Accounting',
    version: '3.0.2',
    releaseDate: new Date('2023-02-28'),
    size: '28.5',
    downloadCount: 742,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-06-05')
  },
  {
    id: 'fin-004',
    title: 'Invoicing & Billing System',
    description: 'Automate invoice generation, payment tracking, and recurring billing with customizable templates and multi-currency support.',
    category: 'Finance & Accounting',
    version: '2.1.0',
    releaseDate: new Date('2022-11-15'),
    size: '36.8',
    downloadCount: 1105,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-05-10')
  },
  {
    id: 'fin-005',
    title: 'Tax Compliance Manager',
    description: 'Stay compliant with tax regulations across multiple jurisdictions with automated calculations, filing reminders, and audit trail documentation.',
    category: 'Finance & Accounting',
    version: '1.5.3',
    releaseDate: new Date('2022-12-05'),
    size: '41.2',
    downloadCount: 683,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-03-22')
  }
];