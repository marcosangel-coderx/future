import React from 'react';
import { Edit, Trash2, ExternalLink, Lock, Unlock } from 'lucide-react';
import { PlanBadge, StatusBadge, SubscriptionStatus } from './CompanyBadges';
import { Company } from '../../types/company';

interface CompaniesTableProps {
  companies: Company[];
  onEdit: (company: Company) => void;
  onDelete: (company: Company) => void;
  onBlock: (company: Company) => void;
}

const CompaniesTable: React.FC<CompaniesTableProps> = ({ companies, onEdit, onDelete, onBlock }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Plan
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Users
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Modules
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subscription
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company) => (
            <tr key={company.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-900 font-semibold">{company.name.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{company.name}</div>
                    <div className="text-sm text-gray-500">
                      Last active: {new Date(company.lastActive).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <PlanBadge plan={company.plan} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={company.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {company.users}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {company.modulesAssigned}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <SubscriptionStatus endDate={company.subscriptionEnd} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button 
                    className="text-blue-600 hover:text-blue-900" 
                    onClick={() => onEdit(company)}
                    title="Edit company"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete(company)}
                    title="Delete company"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button 
                    className={company.isBlocked ? "text-amber-600 hover:text-amber-900" : "text-gray-600 hover:text-gray-900"}
                    onClick={() => onBlock(company)}
                    title={company.isBlocked ? "Unblock company" : "Block company"}
                  >
                    {company.isBlocked ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {companies.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No companies found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CompaniesTable;