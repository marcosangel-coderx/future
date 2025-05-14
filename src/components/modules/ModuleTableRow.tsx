import React from 'react';
import { Edit, Trash2, Download, Tag } from 'lucide-react';
import { Module } from '../../types';

interface ModuleTableRowProps {
  module: Module;
  onEditClick: (moduleId: string) => void;
  onDeleteClick: (moduleId: string) => void;
}

const ModuleTableRow: React.FC<ModuleTableRowProps> = ({ 
  module, 
  onEditClick, 
  onDeleteClick 
}) => {
  // Format date for display
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get status badge styling
  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 rounded-md">
            <Tag className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{module.title}</div>
            <div className="text-sm text-gray-500 max-w-xs truncate">{module.description}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{module.category}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{module.version}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(module.status)}`}>
          {module.status.charAt(0).toUpperCase() + module.status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex items-center">
          <Download className="h-4 w-4 text-gray-400 mr-1" />
          {module.downloadCount}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(module.lastUpdated)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onEditClick(module.id)}
          className="text-blue-600 hover:text-blue-900 mr-4"
        >
          <Edit className="h-4 w-4" />
        </button>
        <button
          onClick={() => onDeleteClick(module.id)}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
};

export default ModuleTableRow;