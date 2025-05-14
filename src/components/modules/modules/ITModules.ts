import { Module } from '../../../types';

// IT & Development Modules
export const itModules: Module[] = [
  {
    id: 'it-001',
    title: 'DevOps Automation Suite',
    description: 'Streamline development and operations with CI/CD pipelines, infrastructure as code, and automated testing frameworks.',
    category: 'IT & Development',
    version: '3.4.2',
    releaseDate: new Date('2023-02-18'),
    size: '52.3',
    downloadCount: 1876,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-05-30')
  },
  {
    id: 'it-002',
    title: 'API Management Platform',
    description: 'Design, publish, document, and monitor APIs with security controls, rate limiting, and analytics dashboards.',
    category: 'IT & Development',
    version: '2.7.1',
    releaseDate: new Date('2023-01-05'),
    size: '43.8',
    downloadCount: 1542,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-04-22')
  },
  {
    id: 'it-003',
    title: 'Database Administration Tool',
    description: 'Manage database instances with performance monitoring, query optimization, backup scheduling, and security auditing.',
    category: 'IT & Development',
    version: '2.2.5',
    releaseDate: new Date('2022-12-12'),
    size: '38.6',
    downloadCount: 1124,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-03-18')
  },
  {
    id: 'it-004',
    title: 'Cloud Resource Manager',
    description: 'Provision and manage cloud infrastructure with cost optimization, resource tagging, and compliance monitoring.',
    category: 'IT & Development',
    version: '3.0.2',
    releaseDate: new Date('2023-03-08'),
    size: '46.2',
    downloadCount: 986,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-06-01')
  },
  {
    id: 'it-005',
    title: 'Security Testing Framework',
    description: 'Identify and remediate security vulnerabilities with penetration testing, code scanning, and compliance checking tools.',
    category: 'IT & Development',
    version: '1.9.3',
    releaseDate: new Date('2022-11-25'),
    size: '41.5',
    downloadCount: 842,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-02-15')
  }
];