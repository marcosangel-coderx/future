import React from 'react';
import { Download, TrendingUp, Users, Package } from 'lucide-react';
import Card from '../../components/common/Card';

interface AnalyticsMetricsProps {
  timeRange: '7d' | '30d' | '90d' | '1y';
}

const AnalyticsMetrics: React.FC<AnalyticsMetricsProps> = ({ timeRange }) => {
  // In a real app, these values would be calculated based on the timeRange
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Download className="h-6 w-6 text-blue-800" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">Total Downloads</h3>
            <p className="text-2xl font-semibold text-gray-900">1,280</p>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12.5% from last period
            </p>
          </div>
        </div>
      </Card>
      
      <Card>
        <div className="flex items-center">
          <div className="p-3 bg-teal-100 rounded-lg">
            <Users className="h-6 w-6 text-teal-800" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
            <p className="text-2xl font-semibold text-gray-900">432</p>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8.2% from last period
            </p>
          </div>
        </div>
      </Card>
      
      <Card>
        <div className="flex items-center">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Package className="h-6 w-6 text-purple-800" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">Module Usage</h3>
            <p className="text-2xl font-semibold text-gray-900">85%</p>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +5.3% from last period
            </p>
          </div>
        </div>
      </Card>
      
      <Card>
        <div className="flex items-center">
          <div className="p-3 bg-amber-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-amber-800" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">Growth Rate</h3>
            <p className="text-2xl font-semibold text-gray-900">+24%</p>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +2.1% from last period
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsMetrics;