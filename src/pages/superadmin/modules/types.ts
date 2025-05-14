import { ModuleCategory } from '../../../types';

// Form validation types
export interface FormErrors {
  title?: string;
  description?: string;
  version?: string;
  size?: string;
  file?: string;
}

// Form data type
export interface ModuleFormData {
  id?: string;
  title: string;
  description: string;
  category: ModuleCategory;
  version: string;
  size: string;
  requiredRole: 'developer' | 'company_admin' | 'viewer';
  status: 'active' | 'inactive' | 'draft' | 'archived';
  file: File | null;
}

// Initial form state
export const initialFormState: ModuleFormData = {
  title: '',
  description: '',
  category: 'Finance & Accounting',
  version: '1.0.0',
  size: '0',
  requiredRole: 'developer',
  status: 'active',
  file: null,
};