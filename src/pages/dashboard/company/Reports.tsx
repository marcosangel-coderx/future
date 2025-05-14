import React, { useState } from 'react';
import { BarChart3, PieChart, LineChart, Download, Filter, Calendar, ChevronRight } from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';
import { modules, moduleAssignments, monthlyStats } from '../../../data/mockData';

const Reports: React.FC = () => {
  const { auth } = useAuth();
  const [reportType, setReportType] = useState<string>('module-usage');
  const [timeRange, setTimeRange] = useState<string>('last-30-days');
  
  // Get company-specific data
  const companyModules = moduleAssignments.filter(ma => ma.userId.startsWith('3') || ma.userId.startsWith('4'));
  
  // Calculate module usage by category
  const categoryUsage = modules.reduce((acc: Record<string, number>, module) => {
    const category = module.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += 1;
    return acc;
  }, {});
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports Center</h1>
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Last updated:</span> {new Date().toLocaleString()}
        </div>
      </div>
      
      {/* Report Controls */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <BarChart3 size={18} className="text-gray-500 mr-2" />
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm rounded-md"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="module-usage">Module Usage</option>
                <option value="team-activity">Team Activity</option>
                <option value="download-trends">Download Trends</option>
                <option value="subscription-utilization">Subscription Utilization</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-500 mr-2" />
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm rounded-md"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="last-7-days">Last 7 Days</option>
                <option value="last-30-days">Last 30 Days</option>
                <option value="last-90-days">Last 90 Days</option>
                <option value="year-to-date">Year to Date</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <Filter size={16} className="mr-1" /> Advanced Filters
            </Button>
            <Button size="sm" className="flex items-center">
              <Download size={16} className="mr-1" /> Export Report
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Report Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Module Usage by Category */}
        <Card title="Module Usage by Category" className="h-full">
          <div className="h-64 flex items-end space-x-2">
            {Object.entries(categoryUsage).map(([category, count], index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className={`w-full rounded-t ${index % 4 === 0 ? 'bg-blue-900' : index % 4 === 1 ? 'bg-teal-700' : index % 4 === 2 ? 'bg-purple-700' : 'bg-amber-600'}`}
                  style={{ height: `${(count / Math.max(...Object.values(categoryUsage))) * 200}px` }}
                ></div>
                <div className="text-xs text-gray-500 mt-2 truncate w-full text-center">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
                <div className="text-xs font-medium text-gray-900">
                  {count} modules
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Chart 2: Download Trends */}
        <Card title="Download Trends" className="h-full">
          <div className="h-64 flex items-end space-x-2">
            {monthlyStats.downloads.map((count, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-900 to-blue-700 rounded-t"
                  style={{ height: `${(count / Math.max(...monthlyStats.downloads)) * 200}px` }}
                ></div>
                <div className="text-xs text-gray-500 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                </div>
                <div className="text-xs font-medium text-gray-900">
                  {count}
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Chart 3: Team Activity */}
        <Card title="Team Activity" className="h-full">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">John Developer</span>
                <span className="text-sm font-medium text-gray-900">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-blue-900" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Sarah Viewer</span>
                <span className="text-sm font-medium text-gray-900">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-teal-700" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Mike Developer</span>
                <span className="text-sm font-medium text-gray-900">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-purple-700" style={{ width: '92%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Company Admin</span>
                <span className="text-sm font-medium text-gray-900">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-amber-600" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Chart 4: Subscription Utilization */}
        <Card title="Subscription Utilization" className="h-full">
          <div className="flex items-center justify-center h-64">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1E3A8A"
                  strokeWidth="3"
                  strokeDasharray="75, 100"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-gray-900">75%</span>
                <span className="text-sm text-gray-500">Utilized</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center p-2 bg-gray-50 rounded">
              <p className="text-sm text-gray-500">Downloads Used</p>
              <p className="text-lg font-semibold text-gray-900">75 / 100</p>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded">
              <p className="text-sm text-gray-500">Active Modules</p>
              <p className="text-lg font-semibold text-gray-900">12 / 15</p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Custom Reports */}
      <Card title="Custom Reports" subtitle="Generate specialized reports for your team's needs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-900 transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                <BarChart3 size={24} className="text-blue-900" />
              </div>
              <h3 className="font-semibold text-gray-900">Module Performance</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Analyze which modules are most used and by whom in your organization.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Generate Report
            </Button>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-900 transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-teal-100 rounded-lg mr-3">
                <PieChart size={24} className="text-teal-700" />
              </div>
              <h3 className="font-semibold text-gray-900">Team Productivity</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Track team member engagement and productivity across modules.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Generate Report
            </Button>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-900 transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 rounded-lg mr-3">
                <LineChart size={24} className="text-purple-700" />
              </div>
              <h3 className="font-semibold text-gray-900">ROI Analysis</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Calculate the return on investment for your module subscriptions.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Generate Report
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Reports;