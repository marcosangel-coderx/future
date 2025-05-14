import React, { useState } from 'react';
import { Download, Filter, Calendar, FileText, AlertTriangle, Package } from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';

// Mock data for download logs
const mockDownloadLogs = [
  {
    id: '1',
    moduleName: 'Financial Reporting Suite',
    userName: 'John Developer',
    downloadDate: '2023-06-15T10:30:00',
    status: 'completed',
    fileSize: '24.5 MB',
  },
  {
    id: '2',
    moduleName: 'HR Onboarding Assistant',
    userName: 'Sarah Viewer',
    downloadDate: '2023-06-14T15:45:00',
    status: 'completed',
    fileSize: '18.2 MB',
  },
  {
    id: '3',
    moduleName: 'Sales Pipeline Manager',
    userName: 'Mike Developer',
    downloadDate: '2023-06-14T09:20:00',
    status: 'failed',
    fileSize: '32.1 MB',
  },
  {
    id: '4',
    moduleName: 'Inventory Control System',
    userName: 'John Developer',
    downloadDate: '2023-06-13T16:15:00',
    status: 'completed',
    fileSize: '29.8 MB',
  },
  {
    id: '5',
    moduleName: 'Code Repository Manager',
    userName: 'Mike Developer',
    downloadDate: '2023-06-13T11:30:00',
    status: 'completed',
    fileSize: '42.3 MB',
  },
];

const DownloadLogs: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | 'all'>('7d');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'failed'>('all');

  // Filter logs based on time range and status
  const filteredLogs = mockDownloadLogs.filter(log => {
    const matchesStatus = statusFilter === 'all' || log.status === statusFilter;
    // In a real app, we would properly filter by date
    return matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Download Logs</h1>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Export Logs
        </Button>
      </div>

      {/* Download Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Download className="h-6 w-6 text-blue-900" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Downloads</h3>
              <p className="text-2xl font-semibold text-gray-900">{filteredLogs.length}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <FileText className="h-6 w-6 text-green-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Successful</h3>
              <p className="text-2xl font-semibold text-gray-900">
                {filteredLogs.filter(log => log.status === 'completed').length}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Failed</h3>
              <p className="text-2xl font-semibold text-gray-900">
                {filteredLogs.filter(log => log.status === 'failed').length}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Time Range</h3>
              <p className="text-2xl font-semibold text-gray-900">Last {timeRange}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as '24h' | '7d' | '30d' | 'all')}
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="all">All Time</option>
              </select>
            </div>

            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'completed' | 'failed')}
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Download Logs Table */}
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
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File Size
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="h-5 w-5 text-blue-900" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {log.moduleName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{log.userName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(log.downloadDate).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      log.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.fileSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={log.status === 'failed'}
                    >
                      Download Again
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DownloadLogs;