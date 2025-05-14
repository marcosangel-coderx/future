import React from 'react';
import { Check, Edit, Trash2, Mail, Shield } from 'lucide-react';
import Card from '../common/Card';
import { Company } from '../../types/company';

interface CompanyTableProps {
  companies: Company[];
  onApprove: (company: Company) => void;
  onEdit: (company: Company) => void;
  onDelete: (company: Company) => void;
  onMessage: (company: Company) => void;
  onBlock: (company: Company) => void;
}

const CompanyTable: React.FC<CompanyTableProps> = ({
  companies,
  onApprove,
  onEdit,
  onDelete,
  onMessage,
  onBlock
}) => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Person
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registration Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Users
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr key={company.id} className={company.isBlocked ? 'bg-red-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-900 font-semibold">{company.name.charAt(0)}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{company.name}</div>
                      <div className="text-sm text-gray-500">{company.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{company.contactPerson}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${company.status === 'active' ? 'bg-green-100 text-green-800' : 
                      company.status === 'pending' ? 'bg-amber-100 text-amber-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
                  </span>
                  {company.isBlocked && (
                    <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Blocked
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(company.registrationDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {company.usersCount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {company.lastActive ? new Date(company.lastActive).toLocaleDateString() : 'Never'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    {company.status === 'pending' && (
                      <button 
                        className="text-green-600 hover:text-green-900"
                        onClick={() => onApprove(company)}
                        aria-label="Approve company"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                    )}
                    <button 
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => onEdit(company)}
                      aria-label="Edit company"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => onDelete(company)}
                      aria-label="Delete company"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button 
                      className="text-purple-600 hover:text-purple-900"
                      onClick={() => onMessage(company)}
                      aria-label="Message company"
                    >
                      <Mail className="h-4 w-4" />
                    </button>
                    <button 
                      className="text-gray-600 hover:text-gray-900"
                      onClick={() => onBlock(company)}
                      aria-label={company.isBlocked ? "Unblock company" : "Block company"}
                    >
                      <Shield className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CompanyTable;