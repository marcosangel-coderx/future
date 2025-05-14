import React, { useState } from 'react';
import { X, Shield, Check, AlertCircle } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

interface Permission {
  id: string;
  name: string;
  description: string;
  category: 'team' | 'modules' | 'billing' | 'reports';
}

interface CreateCustomRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateRole: (role: {
    name: string;
    description: string;
    permissions: string[];
    accessLevel: 'full' | 'standard' | 'limited';
  }) => void;
}

const CreateCustomRoleModal: React.FC<CreateCustomRoleModalProps> = ({
  isOpen,
  onClose,
  onCreateRole,
}) => {
  // Sample permissions
  const availablePermissions: Permission[] = [
    { id: 'manage_team', name: 'Manage team members', description: 'Add, edit, and remove team members', category: 'team' },
    { id: 'view_team', name: 'View team members', description: 'View team member details', category: 'team' },
    { id: 'assign_modules', name: 'Assign modules', description: 'Assign modules to team members', category: 'modules' },
    { id: 'use_modules', name: 'Use assigned modules', description: 'Access and use assigned modules', category: 'modules' },
    { id: 'manage_billing', name: 'Manage billing', description: 'Update billing information and subscription', category: 'billing' },
    { id: 'view_billing', name: 'View billing', description: 'View billing information and history', category: 'billing' },
    { id: 'create_reports', name: 'Create reports', description: 'Generate new reports', category: 'reports' },
    { id: 'view_reports', name: 'View reports', description: 'Access and view reports', category: 'reports' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    permissions: [] as string[],
    accessLevel: 'standard' as 'full' | 'standard' | 'limited',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePermissionToggle = (permissionId: string) => {
    setFormData(prev => {
      const permissions = [...prev.permissions];
      
      if (permissions.includes(permissionId)) {
        return {
          ...prev,
          permissions: permissions.filter(id => id !== permissionId),
        };
      } else {
        return {
          ...prev,
          permissions: [...permissions, permissionId],
        };
      }
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Role name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (formData.permissions.length === 0) {
      newErrors.permissions = 'At least one permission must be selected';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onCreateRole(formData);
      onClose();
    }
  };

  const getAccessLevelBadgeClasses = (level: string) => {
    switch (level) {
      case 'full':
        return 'bg-blue-100 text-blue-800';
      case 'standard':
        return 'bg-teal-100 text-teal-800';
      case 'limited':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <Card className="relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
          
          <div className="mb-4 flex items-center">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-900 mr-3">
              <Shield size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Create Custom Role</h2>
              <p className="text-sm text-gray-500">Define a new role with custom permissions</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Role Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                  placeholder="e.g. Project Manager"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className={`block w-full px-3 py-2 border ${errors.description ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                  placeholder="Describe the responsibilities and access level of this role"
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>
              
              <div>
                <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Access Level
                </label>
                <select
                  id="accessLevel"
                  name="accessLevel"
                  value={formData.accessLevel}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                >
                  <option value="full">Full Access</option>
                  <option value="standard">Standard Access</option>
                  <option value="limited">Limited Access</option>
                </select>
                
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getAccessLevelBadgeClasses(formData.accessLevel)}`}>
                    {formData.accessLevel.charAt(0).toUpperCase() + formData.accessLevel.slice(1)} Access
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Permissions
                </label>
                {errors.permissions && (
                  <div className="mb-3 flex items-center text-sm text-red-600">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.permissions}
                  </div>
                )}
                
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  {['team', 'modules', 'billing', 'reports'].map(category => (
                    <div key={category} className="border-b border-gray-200 last:border-b-0">
                      <div className="bg-gray-50 px-4 py-2">
                        <h4 className="text-sm font-medium text-gray-700 capitalize">{category}</h4>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {availablePermissions
                          .filter(permission => permission.category === category)
                          .map(permission => (
                            <div key={permission.id} className="px-4 py-3">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id={permission.id}
                                    type="checkbox"
                                    checked={formData.permissions.includes(permission.id)}
                                    onChange={() => handlePermissionToggle(permission.id)}
                                    className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor={permission.id} className="font-medium text-gray-700">
                                    {permission.name}
                                  </label>
                                  <p className="text-gray-500">{permission.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <Button variant="outline" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                Create Role
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateCustomRoleModal;