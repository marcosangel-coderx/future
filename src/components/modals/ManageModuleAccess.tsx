import React, { useState } from 'react';
import { ModuleAssignment } from '../../types';
import Button from '../common/Button';
import Card from '../common/Card';
import { X, Shield, Clock, RefreshCw, Key, UserCheck, AlertTriangle } from 'lucide-react';

interface ManageModuleAccessProps {
  assignment: ModuleAssignment;
  onClose: () => void;
  onUpdate: (updatedAssignment: ModuleAssignment) => void;
}

const ManageModuleAccess: React.FC<ManageModuleAccessProps> = ({
  assignment,
  onClose,
  onUpdate,
}) => {
  const [credentials, setCredentials] = useState({
    username: assignment.credentials?.username || '',
    password: assignment.credentials?.password || '',
  });
  const [status, setStatus] = useState(assignment.status);
  
  // Mock access history data
  const accessHistory = [
    { id: '1', date: new Date(Date.now() - 86400000 * 2), action: 'Login', ip: '192.168.1.105' },
    { id: '2', date: new Date(Date.now() - 86400000 * 5), action: 'Password Reset', ip: '192.168.1.105' },
    { id: '3', date: new Date(Date.now() - 86400000 * 10), action: 'Login', ip: '192.168.1.105' },
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'status') {
      setStatus(value as 'active' | 'inactive' | 'suspended');
    } else {
      setCredentials(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const handleSave = () => {
    const updatedAssignment = {
      ...assignment,
      status,
      credentials: {
        username: credentials.username,
        password: credentials.password,
      },
    };
    onUpdate(updatedAssignment);
    onClose();
  };
  
  const handleResetPassword = () => {
    // Generate a random password
    const newPassword = Math.random().toString(36).slice(-8);
    setCredentials(prev => ({
      ...prev,
      password: newPassword,
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Manage Module Access</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Shield className="h-5 w-5 text-blue-900" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className="text-lg font-semibold text-gray-900">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <UserCheck className="h-5 w-5 text-green-700" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">User</h3>
                <p className="text-lg font-semibold text-gray-900">{assignment.userName}</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-700" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Last Access</h3>
                <p className="text-lg font-semibold text-gray-900">
                  {assignment.lastAccess 
                    ? new Date(assignment.lastAccess).toLocaleDateString()
                    : 'Never'}
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Access Settings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={status}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-700">Access Credentials</h4>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleResetPassword}
                leftIcon={<RefreshCw size={14} />}
              >
                Reset Password
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Key size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Access History</h4>
            
            {accessHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IP Address
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {accessHistory.map((entry) => (
                      <tr key={entry.id}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                          {entry.date.toLocaleDateString()} {entry.date.toLocaleTimeString()}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                          {entry.action}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                          {entry.ip}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex items-center justify-center p-4 border border-gray-200 rounded-md">
                <AlertTriangle size={16} className="text-yellow-500 mr-2" />
                <p className="text-sm text-gray-500">No access history available</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 flex justify-end space-x-3">
          <Button 
            variant="outline" 
            type="button" 
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageModuleAccess;