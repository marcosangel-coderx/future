import React from 'react';
import Card from '../../components/common/Card';

interface CompanyStatsProps {
  totalCompanies: number;
  activeCompanies: number;
  trialCompanies: number;
}

const CompanyStats: React.FC<CompanyStatsProps> = ({
  totalCompanies,
  activeCompanies,
  trialCompanies
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Total Companies</h3>
          <p className="mt-2 text-3xl font-bold text-blue-900">{totalCompanies}</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Active Companies</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">{activeCompanies}</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Trial Companies</h3>
          <p className="mt-2 text-3xl font-bold text-amber-500">{trialCompanies}</p>
        </div>
      </Card>
    </div>
  );
};

export default CompanyStats;