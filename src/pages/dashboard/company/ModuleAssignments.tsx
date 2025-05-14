import React, { useState } from 'react';
import { moduleAssignments, modules, teamMembers } from '../../../data/mockData';
import { ModuleAssignment } from '../../../types';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import ManageModuleAccess from '../../../components/modals/ManageModuleAccess';
import { Package, Users, Clock, AlertTriangle, X } from 'lucide-react';

const ModuleAssignments: React.FC = () => {
  const [assignments, setAssignments] = useState(moduleAssignments);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<ModuleAssignment | null>(null);
  const [formData, setFormData] = useState({
    moduleId: '',
    userId: '',
    username: '',
    password: ''
  });
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle module assignment submission
  const handleAssignModule = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find the selected module and user
    const selectedModule = modules.find(module => module.id === formData.moduleId);
    const selectedUser = teamMembers.find(user => user.id === formData.userId);
    
    if (!selectedModule || !selectedUser) return;
    
    // Create new assignment
     const newAssignment: ModuleAssignment = {
       id: (assignments.length + 1).toString(),
       moduleId: formData.moduleId,
       moduleName: selectedModule.title,
       userId: formData.userId,
       userName: selectedUser.name,
       assignedAt: new Date(),
       status: 'active',
       credentials: {
         username: formData.username,
         password: formData.password,
       },
     };
    
    // Add new assignment to the list
    setAssignments([...assignments, newAssignment]);
    
    // Reset form and close modal
    setFormData({
      moduleId: '',
      userId: '',
      username: '',
      password: ''
    });
    setShowAssignModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Module Assignments</h1>
        <Button onClick={() => setShowAssignModal(true)}>
          <Package className="mr-2 h-4 w-4" />
          Assign New Module
        </Button>
      </div>

      {/* Assignment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="h-6 w-6 text-blue-900" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Assignments</h3>
              <p className="text-2xl font-semibold text-gray-900">{assignments.length}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
              <p className="text-2xl font-semibold text-gray-900">
                {assignments.filter(a => a.status === 'active').length}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Pending Access</h3>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Expired Access</h3>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Assignments Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Module
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Access
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="h-5 w-5 text-blue-900" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {assignment.moduleName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{assignment.userName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      assignment.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(assignment.assignedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {assignment.lastAccess 
                      ? new Date(assignment.lastAccess).toLocaleDateString()
                      : 'Never'
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setSelectedAssignment(assignment);
                        setShowManageModal(true);
                      }}
                    >
                      Manage Access
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      {/* Assign Module Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Assign New Module</h3>
              <button 
                onClick={() => setShowAssignModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleAssignModule}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Module
                  </label>
                  <select
                    name="moduleId"
                    value={formData.moduleId}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                    required
                  >
                    <option value="">-- Select a module --</option>
                    {modules.map(module => (
                      <option key={module.id} value={module.id}>
                        {module.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assign to User
                  </label>
                  <select
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                    required
                  >
                    <option value="">-- Select a user --</option>
                    {teamMembers.map(user => (
                      <option key={user.id} value={user.id}>
                        {user.name} ({user.role})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Module Access Credentials</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={() => setShowAssignModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Assign Module
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Manage Access Modal */}
      {showManageModal && selectedAssignment && (
        <ManageModuleAccess
          assignment={selectedAssignment}
          onClose={() => {
            setShowManageModal(false);
            setSelectedAssignment(null);
          }}
          onUpdate={(updatedAssignment) => {
            setAssignments(assignments.map(assignment => 
              assignment.id === updatedAssignment.id ? updatedAssignment : assignment
            ));
            setShowManageModal(false);
            setSelectedAssignment(null);
          }}
        />
      )}
    </div>
  );
};

export default ModuleAssignments;