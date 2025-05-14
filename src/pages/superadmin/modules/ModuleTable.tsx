import React from 'react';
import { Module } from '../../../types';
import ModuleTableRow from '../../../components/modules/ModuleTableRow';

interface ModuleTableProps {
  modules: Module[];
  onEditClick: (moduleId: string) => void;
  onDeleteClick: (moduleId: string) => void;
}

const ModuleTable: React.FC<ModuleTableProps> = ({ 
  modules, 
  onEditClick, 
  onDeleteClick 
}) => {
  if (modules.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No modules found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Module
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Version
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Downloads
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Updated
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {modules.map((module) => (
            <ModuleTableRow 
              key={module.id} 
              module={module} 
              onEditClick={onEditClick} 
              onDeleteClick={onDeleteClick} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModuleTable;