import { User, Company, Module, ModuleAssignment, PricingTier } from '../types';

// Sample Super Admin User
export const superAdminUser: User = {
  id: '1',
  name: 'Admin User',
  email: 'admin@businessmodulehub.com',
  role: 'super_admin',
  lastLogin: new Date('2023-07-15T09:23:17'),
};

// Sample Company Admin User
export const companyAdminUser: User = {
  id: '2',
  name: 'Company Admin',
  email: 'company@example.com',
  role: 'company_admin',
  companyId: '1',
  lastLogin: new Date('2023-07-14T14:32:11'),
  department: 'Management',
};

// Sample Team Members
export const teamMembers: User[] = [
  {
    id: '3',
    name: 'John Developer',
    email: 'john@example.com',
    role: 'developer',
    companyId: '1',
    lastLogin: new Date('2023-07-13T10:45:22'),
    department: 'Engineering',
  },
  {
    id: '4',
    name: 'Sarah Viewer',
    email: 'sarah@example.com',
    role: 'viewer',
    companyId: '1',
    lastLogin: new Date('2023-07-10T16:12:45'),
    department: 'Marketing',
  },
  {
    id: '5',
    name: 'Mike Developer',
    email: 'mike@example.com',
    role: 'developer',
    companyId: '1',
    lastLogin: new Date('2023-07-12T09:18:36'),
    department: 'Engineering',
  },
];

// Sample Companies
export const companies: Company[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    industry: 'Technology',
    size: '50-100',
    plan: 'pro',
    locations: [
      {
        latitude: 37.7749,
        longitude: -122.4194,
        radius: 5000,
      },
    ],
    createdAt: new Date('2023-01-15'),
    lastActivity: new Date('2023-07-15'),
    teamCount: 8,
    modulesDownloaded: 12,
  },
  {
    id: '2',
    name: 'TechSolutions Inc',
    industry: 'IT Services',
    size: '10-50',
    plan: 'free',
    locations: [
      {
        latitude: 40.7128,
        longitude: -74.006,
        radius: 3000,
      },
    ],
    createdAt: new Date('2023-03-22'),
    lastActivity: new Date('2023-07-14'),
    teamCount: 3,
    modulesDownloaded: 5,
  },
  {
    id: '3',
    name: 'Global Enterprises',
    industry: 'Finance',
    size: '500+',
    plan: 'enterprise',
    locations: [
      {
        latitude: 51.5074,
        longitude: -0.1278,
        radius: 10000,
      },
      {
        latitude: 48.8566,
        longitude: 2.3522,
        radius: 8000,
      },
    ],
    createdAt: new Date('2023-02-05'),
    lastActivity: new Date('2023-07-15'),
    teamCount: 25,
    modulesDownloaded: 35,
  },
];

// Sample Modules
export const modules: Module[] = [
  {
    id: '1',
    title: 'Financial Reporting Suite',
    description: 'Comprehensive financial reporting tools for accounting departments.',
    category: 'Finance & Accounting',
    version: '2.3.1',
    releaseDate: new Date('2023-04-10'),
    size: '24.5',
    downloadCount: 156,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-06-15'),
  },
  {
    id: '2',
    title: 'HR Onboarding Assistant',
    description: 'Streamline your employee onboarding process with automated workflows.',
    category: 'Human Resources',
    version: '1.8.0',
    releaseDate: new Date('2023-03-22'),
    size: '18.2',
    downloadCount: 203,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-07-01'),
  },
  {
    id: '3',
    title: 'Sales Pipeline Manager',
    description: 'Track and optimize your sales pipeline with advanced analytics.',
    category: 'Sales & Marketing',
    version: '3.1.2',
    releaseDate: new Date('2023-01-15'),
    size: '32.1',
    downloadCount: 287,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-06-28'),
  },
  {
    id: '4',
    title: 'Inventory Control System',
    description: 'Real-time inventory management with predictive stock ordering.',
    category: 'Operations',
    version: '2.0.5',
    releaseDate: new Date('2023-02-08'),
    size: '29.8',
    downloadCount: 175,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-05-20'),
  },
  {
    id: '5',
    title: 'Code Repository Manager',
    description: 'Secure code management with integrated CI/CD capabilities.',
    category: 'IT & Development',
    version: '4.2.0',
    releaseDate: new Date('2023-05-12'),
    size: '42.3',
    downloadCount: 198,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-07-10'),
  },
  {
    id: '6',
    title: 'Compliance Documentation Generator',
    description: 'Automatically generate compliance documentation based on industry standards.',
    category: 'Legal & Compliance',
    version: '1.5.3',
    releaseDate: new Date('2023-06-01'),
    size: '15.7',
    downloadCount: 112,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-07-05'),
  },
  {
    id: '7',
    title: 'Expense Tracker Pro',
    description: 'Streamline expense reporting and approval processes.',
    category: 'Finance & Accounting',
    version: '2.1.0',
    releaseDate: new Date('2023-04-25'),
    size: '22.4',
    downloadCount: 143,
    requiredRole: 'viewer',
    status: 'active',
    lastUpdated: new Date('2023-06-18'),
  },
  {
    id: '8',
    title: 'Performance Review System',
    description: 'Comprehensive employee performance management and review tools.',
    category: 'Human Resources',
    version: '3.0.2',
    releaseDate: new Date('2023-03-05'),
    size: '28.9',
    downloadCount: 165,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-30'),
  },
  {
    id: '9',
    title: 'Digital Marketing Analytics',
    description: 'Track and analyze marketing campaigns across multiple channels.',
    category: 'Sales & Marketing',
    version: '2.4.1',
    releaseDate: new Date('2023-02-18'),
    size: '36.2',
    downloadCount: 221,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-06-10'),
  },
  {
    id: '10',
    title: 'Supply Chain Optimizer',
    description: 'Optimize your supply chain with AI-powered predictions and recommendations.',
    category: 'Operations',
    version: '1.9.5',
    releaseDate: new Date('2023-01-30'),
    size: '33.7',
    downloadCount: 132,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-05-15'),
  },
  {
    id: '11',
    title: 'Infrastructure Monitoring Suite',
    description: 'Comprehensive monitoring for cloud and on-premise infrastructure.',
    category: 'IT & Development',
    version: '3.5.0',
    releaseDate: new Date('2023-05-05'),
    size: '38.9',
    downloadCount: 178,
    requiredRole: 'developer',
    status: 'active',
    lastUpdated: new Date('2023-07-08'),
  },
  {
    id: '12',
    title: 'GDPR Compliance Toolkit',
    description: 'Tools and templates for ensuring GDPR compliance across your organization.',
    category: 'Legal & Compliance',
    version: '2.2.4',
    releaseDate: new Date('2023-06-15'),
    size: '19.8',
    downloadCount: 98,
    requiredRole: 'company_admin',
    status: 'active',
    lastUpdated: new Date('2023-07-12'),
  },
];

// Sample Module Assignments
export const moduleAssignments: ModuleAssignment[] = [
  {
    id: '1',
    moduleId: '1',
    moduleName: 'Financial Reporting Suite',
    userId: '2',
    userName: 'Company Admin',
    assignedAt: new Date('2023-06-20'),
    lastAccess: new Date('2023-07-15'),
    status: 'active',
    credentials: {
      username: 'company_admin',
      password: 'password123',
    },
  },
  {
    id: '2',
    moduleId: '3',
    moduleName: 'Sales Pipeline Manager',
    userId: '3',
    userName: 'John Developer',
    assignedAt: new Date('2023-06-25'),
    lastAccess: new Date('2023-07-14'),
    status: 'active',
    credentials: {
      username: 'john_dev',
      password: 'password123',
    },
  },
  {
    id: '3',
    moduleId: '5',
    moduleName: 'Code Repository Manager',
    userId: '3',
    userName: 'John Developer',
    assignedAt: new Date('2023-07-01'),
    lastAccess: new Date('2023-07-13'),
    status: 'active',
    credentials: {
      username: 'john_dev',
      password: 'password123',
    },
  },
  {
    id: '4',
    moduleId: '6',
    moduleName: 'Compliance Documentation Generator',
    userId: '4',
    userName: 'Sarah Viewer',
    assignedAt: new Date('2023-07-05'),
    status: 'active',
    credentials: {
      username: 'sarah_view',
      password: 'password123',
    },
  },
];

// Pricing Tiers
export const pricingTiers: PricingTier[] = [
  {
    id: '1',
    name: 'Free',
    price: 0,
    billingPeriod: 'monthly',
    features: [
      'Basic module library access',
      'Up to 3 team members',
      'Single location geofencing',
      'Email support',
      'Basic reporting',
    ],
    limitations: {
      teamMembers: 3,
      moduleDownloads: 5,
    },
  },
  {
    id: '2',
    name: 'Pro',
    price: 49,
    billingPeriod: 'monthly',
    features: [
      'Full module library access',
      'Up to 10 team members',
      'Single location geofencing',
      'Priority support',
      'Advanced reporting',
      'API access',
      'Custom branding',
    ],
    limitations: {
      teamMembers: 10,
      moduleDownloads: 20,
    },
    recommended: true,
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 199,
    billingPeriod: 'monthly',
    features: [
      'Full module library access',
      'Unlimited team members',
      'Multi-location geofencing',
      'Dedicated support',
      'Custom module development',
      'White labeling',
      'SSO integration',
      'Advanced security features',
    ],
    limitations: {
      teamMembers: 999999,
      moduleDownloads: 999999,
    },
  },
];

// Monthly statistics for dashboard charts
export const monthlyStats = {
  revenues: [15000, 17500, 21000, 20000, 23000, 25000],
  downloads: [85, 120, 130, 110, 150, 170],
  newCompanies: [5, 8, 12, 10, 14, 15],
  activeUsers: [120, 150, 180, 210, 250, 280],
};

// Get all users including admins and team members
export const getAllUsers = (): User[] => {
  return [superAdminUser, companyAdminUser, ...teamMembers];
};

// Get users for a specific company
export const getCompanyUsers = (companyId: string): User[] => {
  return getAllUsers().filter(user => user.companyId === companyId);
};

// Helper function to simulate API calls with delay
export const simulateApiCall = <T>(data: T, delay = 500): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};