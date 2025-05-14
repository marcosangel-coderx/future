import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import Button from '../common/Button';
import { Company } from '../../types/company';
import { useNavigate } from 'react-router-dom';

interface EditModalProps {
  company: Company | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (company: Company) => void;
}

const EditCompanyModal: React.FC<EditModalProps> = ({ company, isOpen, onClose, onSave }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Company>(
    company || {
      id: '',
      name: '',
      email: '',
      contactPerson: '',
      registrationDate: new Date().toISOString(),
      status: 'pending',
      usersCount: 0,
      lastActive: null,
      isBlocked: false,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Company</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10"
                  required
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center text-blue-500 hover:text-blue-700"
                  onClick={() => navigate('/admin/users', { state: { searchTerm: formData.email } })}
                  title="View in User Manager"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">This email can be found in User Manager</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Person</label>
              <div className="relative">
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10"
                  required
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center text-blue-500 hover:text-blue-700"
                  onClick={() => navigate('/admin/users', { state: { searchTerm: formData.contactPerson } })}
                  title="View in User Manager"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">This contact person can be found in User Manager</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose} type="button">Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCompanyModal;