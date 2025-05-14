import React from 'react';
import { Package, FileText } from 'lucide-react';
import Button from '../common/Button';
import { ModuleCategory } from '../../types';

interface FormData {
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

interface FormErrors {
  title?: string;
  description?: string;
  version?: string;
  size?: string;
  file?: string;
}

interface ModuleFormProps {
  formData: FormData;
  formErrors: FormErrors;
  isEdit?: boolean;
  isSubmitting?: boolean;
  onClose: () => void;
  onChange: (field: keyof FormData, value: any) => void;
  onSubmit: () => void;
}

const ModuleForm: React.FC<ModuleFormProps> = ({
  formData,
  formErrors,
  isEdit = false,
  isSubmitting = false,
  onClose,
  onChange,
  onSubmit
}) => {
  const handleChange = (field: keyof FormData, value: any) => {
    onChange(field, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.size > 100 * 1024 * 1024) {
      onChange('file', null);
      // Clear the input
      e.target.value = '';
      return;
    }
    onChange('file', file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="p-6 space-y-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Module Title*
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Package className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="title"
                className={`block w-full pl-10 pr-3 py-2 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Enter module title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                aria-invalid={!!formErrors.title}
                aria-describedby={formErrors.title ? 'title-error' : undefined}
                required
              />
            </div>
            {formErrors.title && (
              <p id="title-error" className="mt-1 text-sm text-red-600">{formErrors.title}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="version" className="block text-sm font-medium text-gray-700 mb-1">
              Version*
            </label>
            <input
              type="text"
              id="version"
              className={`block w-full px-3 py-2 border ${formErrors.version ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="e.g. 1.0.0"
              value={formData.version}
              onChange={(e) => handleChange('version', e.target.value)}
              aria-invalid={!!formErrors.version}
              aria-describedby={formErrors.version ? 'version-error' : undefined}
              required
            />
            {formErrors.version && (
              <p id="version-error" className="mt-1 text-sm text-red-600">{formErrors.version}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description*
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="description"
              rows={3}
              className={`block w-full pl-10 pr-3 py-2 border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Enter module description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              aria-invalid={!!formErrors.description}
              aria-describedby={formErrors.description ? 'description-error' : undefined}
              required
            />
          </div>
          {formErrors.description && (
            <p id="description-error" className="mt-1 text-sm text-red-600">{formErrors.description}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category*
            </label>
            <select
              id="category"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value as ModuleCategory)}
              required
            >
              <option value="Finance & Accounting">Finance & Accounting</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="Operations">Operations</option>
              <option value="IT & Development">IT & Development</option>
              <option value="Legal & Compliance">Legal & Compliance</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
              Size (MB)*
            </label>
            <input
              type="text"
              id="size"
              className={`block w-full px-3 py-2 border ${formErrors.size ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="e.g. 24.5"
              value={formData.size}
              onChange={(e) => handleChange('size', e.target.value)}
              aria-invalid={!!formErrors.size}
              aria-describedby={formErrors.size ? 'size-error' : undefined}
              required
            />
            {formErrors.size && (
              <p id="size-error" className="mt-1 text-sm text-red-600">{formErrors.size}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="requiredRole" className="block text-sm font-medium text-gray-700 mb-1">
              Required Role*
            </label>
            <select
              id="requiredRole"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={formData.requiredRole}
              onChange={(e) => handleChange('requiredRole', e.target.value as 'developer' | 'company_admin' | 'viewer')}
              required
            >
              <option value="developer">Developer</option>
              <option value="company_admin">Company Admin</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status*
            </label>
            <select
              id="status"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value as 'active' | 'inactive' | 'draft' | 'archived')}
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
            {isEdit ? 'Upload New Module File (.zip, max 100MB)' : 'Upload Module (.zip, max 100MB)*'}
          </label>
          <input
            type="file"
            id="file"
            accept=".zip"
            className={`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${formErrors.file ? 'border border-red-500 rounded-md' : ''}`}
            onChange={handleFileChange}
            aria-invalid={!!formErrors.file}
            aria-describedby={formErrors.file ? 'file-error' : undefined}
            required={!isEdit}
          />
          {isEdit && <p className="mt-1 text-xs text-gray-500">Leave empty to keep the current file</p>}
          {formErrors.file && (
            <p id="file-error" className="mt-1 text-sm text-red-600">{formErrors.file}</p>
          )}
        </div>
      </form>
      
      <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3 rounded-b-lg">
        <Button variant="outline" onClick={onClose} type="button">
          Cancel
        </Button>
        <Button onClick={onSubmit} isLoading={isSubmitting}>
          {isEdit ? 'Update Module' : 'Add Module'}
        </Button>
      </div>
    </div>
  );
};

export default ModuleForm;