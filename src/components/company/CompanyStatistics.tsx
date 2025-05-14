import React from 'react';
import Card from '../common/Card';
import { Company } from '../../types/company';

interface CompanyStatisticsProps {
  companies: Company[];
}

const CompanyStatistics: React.FC<CompanyStatisticsProps> = ({ companies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Total Companies</h3>
          <p className="mt-2 text-3xl font-bold text-blue-900">{companies.length}</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Active Companies</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">
            {companies.filter(c => c.status === 'active').length}
          </p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Pending Registrations</h3>
          <p className="mt-2 text-3xl font-bold text-amber-500">
            {companies.filter(c => c.status === 'pending').length}
          </p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Blocked Companies</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">
            {companies.filter(c => c.isBlocked).length}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CompanyStatistics;