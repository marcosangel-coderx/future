import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../../components/common/Card';
interface UsageData {
  month: string;
  downloads: number;
  users: number;
  activeModules: number;
}

interface UsageChartProps {
  data: UsageData[];
}

// Custom tooltip for bar chart
const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-blue-600">
          <span className="font-medium">Downloads:</span> {payload[0].value}
        </p>
        <p className="text-green-600">
          <span className="font-medium">Users:</span> {payload[1].value}
        </p>
      </div>
    );
  }

  return null;
};

const UsageChart: React.FC<UsageChartProps> = ({ data }) => {
  return (
    <Card title="Usage Statistics">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomBarTooltip />} />
            <Bar dataKey="downloads" fill="#4F46E5" name="Downloads" />
            <Bar dataKey="users" fill="#10B981" name="Users" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-end mt-4">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2" />
            <span className="text-xs text-gray-600">Downloads</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-600 rounded-full mr-2" />
            <span className="text-xs text-gray-600">Users</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UsageChart;