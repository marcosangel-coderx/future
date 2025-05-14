import React from 'react';
import Card from '../../components/common/Card';

interface RequestStatsProps {
  totalRequests: number;
  openRequests: number;
  criticalRequests: number;
  resolvedRequests: number;
}

const RequestStats: React.FC<RequestStatsProps> = ({
  totalRequests,
  openRequests,
  criticalRequests,
  resolvedRequests
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Total Requests</h3>
          <p className="mt-2 text-3xl font-bold text-blue-900">{totalRequests}</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Open Requests</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">
            {openRequests}
          </p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Critical Issues</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">
            {criticalRequests}
          </p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Resolved</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">
            {resolvedRequests}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RequestStats;