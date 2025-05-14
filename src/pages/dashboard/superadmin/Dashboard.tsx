import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp,
  Eye, 
  Download,
  ChevronRight 
} from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { companies, modules, getAllUsers, monthlyStats } from '../../../data/mockData';

const SuperAdminDashboard: React.FC = () => {
  // Get total users count
  const totalUsers = getAllUsers().length;
  
  // Get active modules count
  const activeModules = modules.filter(module => module.status === 'active').length;
  
  // Calculate total revenue
  const totalRevenue = companies.reduce((total, company) => {
    switch (company.plan) {
      case 'free': return total + 0;
      case 'pro': return total + 49;
      case 'enterprise': return total + 199;
      default: return total;
    }
  }, 0);
  
  // Calculate plan distribution
  const planDistribution = {
    free: companies.filter(c => c.plan === 'free').length,
    pro: companies.filter(c => c.plan === 'pro').length,
    enterprise: companies.filter(c => c.plan === 'enterprise').length,
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Last updated:</span> {new Date().toLocaleString()}
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-900 rounded-lg">
              <Building size={20} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Companies</h3>
              <p className="text-2xl font-semibold text-gray-900">{companies.length}</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-medium">+2</span> this week
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
          <div className="flex items-center">
            <div className="p-3 bg-teal-700 rounded-lg">
              <Users size={20} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Users</h3>
              <p className="text-2xl font-semibold text-gray-900">{totalUsers}</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-medium">+5</span> this week
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center">
            <div className="p-3 bg-purple-700 rounded-lg">
              <Package size={20} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Active Modules</h3>
              <p className="text-2xl font-semibold text-gray-900">{activeModules}</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-medium">+3</span> this month
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
          <div className="flex items-center">
            <div className="p-3 bg-emerald-700 rounded-lg">
              <DollarSign size={20} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
              <p className="text-2xl font-semibold text-gray-900">${totalRevenue}</p>
              <p className="text-xs text-gray-500 flex items-center">
                <TrendingUp size={14} className="mr-1 text-green-600" />
                <span className="text-green-600 font-medium">+12%</span> this month
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Revenue Chart */}
      <Card title="Revenue Overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="font-medium text-gray-900 mb-4 flex items-center">
              Monthly Revenue 
              <TrendingUp size={18} className="ml-2 text-green-600" />
            </h3>
            <div className="h-64 flex items-end space-x-2">
              {monthlyStats.revenues.map((revenue, index) => (
                <div key={index} className="flex-1 flex flex-col items-center group relative">
                  <div 
                    className="w-full bg-gradient-to-t from-emerald-700 to-emerald-500 rounded-t hover:from-emerald-800 hover:to-emerald-600 transition-colors duration-200 shadow-md"
                    style={{ height: `${(revenue / Math.max(...monthlyStats.revenues)) * 100}%` }}
                  ></div>
                  <div className="text-xs font-medium text-gray-700 mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                  </div>
                  {/* Tooltip showing the revenue value */}
                  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                    ${revenue.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <div className="text-xs text-gray-500 italic">Hover over bars to see exact values</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Subscription Plans</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Free</span>
                  <span className="text-sm font-medium text-gray-900">{planDistribution.free}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gray-500"
                    style={{ width: `${(planDistribution.free / companies.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Pro</span>
                  <span className="text-sm font-medium text-gray-900">{planDistribution.pro}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-blue-900"
                    style={{ width: `${(planDistribution.pro / companies.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Enterprise</span>
                  <span className="text-sm font-medium text-gray-900">{planDistribution.enterprise}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-teal-700"
                    style={{ width: `${(planDistribution.enterprise / companies.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Annual Projected</span>
                  <span className="text-sm font-bold text-gray-900">${totalRevenue * 12}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium text-gray-700">Renewal Rate</span>
                  <span className="text-sm font-bold text-gray-900">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Recent Companies and Popular Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Companies">
          <div className="space-y-4">
            {companies.slice(0, 5).map((company, index) => (
              <div key={index} className="flex items-center">
                <div className={`h-10 w-10 rounded bg-${index % 2 === 0 ? 'blue' : 'teal'}-100 flex items-center justify-center mr-3`}>
                  <span className={`text-${index % 2 === 0 ? 'blue-900' : 'teal-700'} font-bold`}>
                    {company.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {company.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {company.plan.charAt(0).toUpperCase() + company.plan.slice(1)} Plan • {company.teamCount} team members
                  </p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  company.plan === 'free' ? 'bg-gray-100 text-gray-800' : 
                  company.plan === 'pro' ? 'bg-blue-100 text-blue-800' : 
                  'bg-teal-100 text-teal-800'
                }`}>
                  {company.plan.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link to="/admin/companies" className="text-blue-900 hover:text-blue-700 font-medium flex items-center">
              View All Companies <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </Card>
        
        <Card title="Popular Modules">
          <div className="space-y-4">
            {modules
              .sort((a, b) => b.downloadCount - a.downloadCount)
              .slice(0, 5)
              .map((module, index) => (
                <div key={index} className="flex items-center">
                  <div className={`h-10 w-10 rounded bg-${index % 2 === 0 ? 'blue' : 'teal'}-100 flex items-center justify-center mr-3`}>
                    <span className={`text-${index % 2 === 0 ? 'blue-900' : 'teal-700'} font-bold`}>
                      {module.title.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {module.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {module.downloadCount} downloads • v{module.version}
                    </p>
                  </div>
                  <Link to={`/admin/modules/${module.id}`}>
                    <Button size="sm" variant="outline">Edit</Button>
                  </Link>
                </div>
              ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link to="/admin/modules" className="text-blue-900 hover:text-blue-700 font-medium flex items-center">
              View All Modules <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </Card>
      </div>
      
      {/* System Health */}
      <Card 
        title="System Health" 
        subtitle="Overview of system performance and uptime"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Server Uptime</h3>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Healthy</span>
            </div>
            <div className="bg-gray-100 rounded-full h-3 mb-2">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '99.8%' }}></div>
            </div>
            <span className="text-xs text-gray-500">99.8% uptime in last 30 days</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">API Response Time</h3>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Optimal</span>
            </div>
            <div className="bg-gray-100 rounded-full h-3 mb-2">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <span className="text-xs text-gray-500">Avg: 120ms (↓5% from last week)</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Database Load</h3>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Moderate</span>
            </div>
            <div className="bg-gray-100 rounded-full h-3 mb-2">
              <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <span className="text-xs text-gray-500">65% of capacity (↑10% from last week)</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Recent System Events</h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-500 w-32">Today, 08:12 AM</span>
              <span className="text-gray-700">Database backup completed successfully</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-500 w-32">Yesterday, 11:45 PM</span>
              <span className="text-gray-700">System updates deployed to production</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-500 w-32">Yesterday, 3:20 PM</span>
              <span className="text-gray-700">High traffic alert - scaled up resources</span>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-blue-900" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Add New Module</h3>
            <p className="text-gray-600 mb-6">
              Create a new module to expand your business offerings.
            </p>
            <Link to="/admin/modules">
              <Button>Create Module</Button>
            </Link>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">View Analytics</h3>
            <p className="text-gray-600 mb-6">
              Get detailed insights into platform usage and performance.
            </p>
            <Link to="/admin/analytics">
              <Button variant="outline">View Analytics</Button>
            </Link>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Export Reports</h3>
            <p className="text-gray-600 mb-6">
              Download comprehensive reports for your records.
            </p>
            <Link to="/admin/reports">
              <Button variant="outline">Generate Reports</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;