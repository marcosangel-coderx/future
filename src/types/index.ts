export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'company_admin' | 'developer' | 'viewer';
  companyId?: string;
  lastLogin?: Date;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  size: string;
  plan: 'free' | 'pro' | 'enterprise';
  logo?: string;
  locations: GeoLocation[];
  createdAt: Date;
  lastActivity?: Date;
  teamCount: number;
  modulesDownloaded: number;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
  radius: number; // in meters
}

export interface Module {
  id: string;
  title: string;
  description: string;
  category: ModuleCategory;
  version: string;
  releaseDate: Date;
  size: string; // in MB
  downloadCount: number;
  requiredRole: 'developer' | 'company_admin' | 'viewer';
  status: 'active' | 'inactive';
  lastUpdated: Date;
}

export type ModuleCategory = 
  | 'Finance & Accounting'
  | 'Human Resources'
  | 'Sales & Marketing'
  | 'Operations'
  | 'IT & Development'
  | 'Legal & Compliance';

export interface ModuleAssignment {
  id: string;
  moduleId: string;
  moduleName: string;
  userId: string;
  userName: string;
  assignedAt: Date;
  lastAccess?: Date;
  status: 'active' | 'inactive';
  credentials: {
    username: string;
    password: string;
  };
}

export interface Subscription {
  id: string;
  companyId: string;
  plan: 'free' | 'pro' | 'enterprise';
  startDate: Date;
  endDate: Date;
  status: 'active' | 'expired' | 'canceled';
  paymentHistory: Payment[];
}

export interface Payment {
  id: string;
  amount: number;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

export interface Report {
  id: string;
  title: string;
  description: string;
  type: 'weekly' | 'monthly' | 'quarterly' | 'custom';
  createdAt: Date;
  metrics: string[];
  recipients: string[];
  schedule?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
    day?: number;
    time?: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'annual';
  features: string[];
  limitations: {
    teamMembers: number;
    moduleDownloads: number;
  };
  recommended?: boolean;
}

export interface AuthState {
  user: User | null;
  company: Company | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}