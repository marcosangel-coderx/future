import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Users, 
  Download, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';
import { modules, moduleAssignments, teamMembers, monthlyStats } from '../../../data/mockData';

const CompanyDashboard: React.FC = () => {
  const { auth } = useAuth();
  const company = auth.company;
  
  if (!company) {
    return <div>Loading company data...</div>;
  }

  // Calculate remaining time in subscription
  const subscriptionEndDate = new Date('2023-11-15'); // Matching the date format in ManageSubscription
  const timeRemaining = Math.floor((subscriptionEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  // Ensure we don't show negative days if the date is in the past
  const daysRemaining = timeRemaining > 0 ? timeRemaining : 184; // Default to 184 days (about 6 months)
  
  // Get company-specific data
  const companyModules = moduleAssignments.filter(ma => ma.userId.startsWith('3') || ma.userId.startsWith('4')); 
  const companyTeam = teamMembers;
  
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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Last updated:</span> {new Date().toLocaleString()}
        </div>
      </div>
      
      {/* Subscription Status */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Subscription Status</h2>
            <p className="text-gray-600">
              <span className="font-medium">{company.plan.charAt(0).toUpperCase() + company.plan.slice(1)} Plan</span> - 
              {daysRemaining} days remaining
            </p>
          </div>
        </div>
      </Card>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-900 rounded-lg">
              <Package size={20} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Modules</h3>
              <p className="text-2xl font-semibold text-gray-900">{companyModules.length}</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-medium">+2</span> from last month
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
              <h3 className="text-sm font-medium text-gray-500">Team Members</h3>
              <p className="text-2xl font-semibold text-gray-900">{companyTeam.length}</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-medium">+1</span> from last month
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center">
            <div className="p-3 bg-purple-700 rounded-lg">
              <Download size={20} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Downloads</h3>
              <p className="text-2xl font-semibold text-gray-900">{company.modulesDownloaded}</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-medium">+8</span> from last month
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <div className="flex items-center">
            <div className="p-3 bg-amber-600 rounded-lg">
              <Clock size={20} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Avg. Usage Time</h3>
              <p className="text-2xl font-semibold text-gray-900">3.2h</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-medium">+14%</span> from last month
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Activity Feed and Popular Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Recent Activity">
            <div className="space-y-4">
              {/* Activity 1 */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-semibold flex-shrink-0">
                  JD
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-gray-800 font-medium">
                    John Developer downloaded <span className="font-semibold">Code Repository Manager</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    3 hours ago
                  </p>
                </div>
              </div>
              
              {/* Activity 2 */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-semibold flex-shrink-0">
                  CA
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-gray-800 font-medium">
                    Company Admin assigned <span className="font-semibold">Compliance Documentation Generator</span> to Sarah
                  </p>
                  <p className="text-sm text-gray-500">
                    Yesterday at 2:30 PM
                  </p>
                </div>
              </div>
              
              {/* Activity 3 */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold flex-shrink-0">
                  SV
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-gray-800 font-medium">
                    Sarah Viewer completed onboarding for <span className="font-semibold">HR Onboarding Assistant</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    2 days ago
                  </p>
                </div>
              </div>
              
              {/* Activity 4 */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold flex-shrink-0">
                  MD
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-gray-800 font-medium">
                    Mike Developer accessed <span className="font-semibold">Sales Pipeline Manager</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    3 days ago
                  </p>
                </div>
              </div>
              
              {/* Activity 5 */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-semibold flex-shrink-0">
                  JD
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-gray-800 font-medium">
                    John Developer completed training in <span className="font-semibold">Financial Reporting Suite</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    5 days ago
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link to="/activity-log" className="text-blue-900 hover:text-blue-700 font-medium flex items-center">
                View All Activity <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
        </div>
        
        <div>
          <Card title="Popular Modules">
            <div className="space-y-4">
              {modules.slice(0, 5).map((module, index) => (
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
                      {module.downloadCount} downloads
                    </p>
                  </div>
                  <Link to={`/modules/${module.id}`}>
                    <Button size="sm" variant="outline">View</Button>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link to="/modules" className="text-blue-900 hover:text-blue-700 font-medium flex items-center">
                Browse All Modules <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Performance Metrics */}
      <Card title="Performance Metrics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Module Usage by Category</h3>
            <div className="space-y-4">
              {Object.entries(categoryUsage).slice(0, 4).map(([category, count], index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">{category}</span>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        index % 4 === 0 ? 'bg-blue-900' : 
                        index % 4 === 1 ? 'bg-teal-700' : 
                        index % 4 === 2 ? 'bg-purple-700' : 
                        'bg-amber-600'
                      }`}
                      style={{ width: `${(count / modules.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Download Trends</h3>
            <div className="h-64 flex items-end space-x-2">
              {monthlyStats.downloads.map((count, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-900 to-blue-700 rounded-t"
                    style={{ height: `${(count / Math.max(...monthlyStats.downloads)) * 100}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <Link to="/analytics" className="text-blue-900 hover:text-blue-700 font-medium flex items-center">
            View Detailed Analytics <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </Card>
      
      {/* AI Insights */}
      <Card 
        title="AI-Powered Insights" 
        subtitle="Automatically generated recommendations based on your team's usage patterns"
      >
        <div className="space-y-4">
          <div className="flex p-4 bg-blue-50 rounded-lg">
            <div className="mr-4 flex-shrink-0">
              <TrendingUp size={24} className="text-blue-900" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Usage Pattern Detected</h4>
              <p className="text-gray-600 mt-1">
                Your team is heavily using finance modules. Consider adding the "Tax Compliance Tracker" 
                module to complement your current workflow.
              </p>
            </div>
          </div>
          
          <div className="flex p-4 bg-teal-50 rounded-lg">
            <div className="mr-4 flex-shrink-0">
              <BarChart3 size={24} className="text-teal-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Performance Insight</h4>
              <p className="text-gray-600 mt-1">
                John Developer has completed 3 module trainings in the last 30 days, 
                showing high engagement and rapid skill development.
              </p>
            </div>
          </div>
          
          <div className="flex p-4 bg-amber-50 rounded-lg">
            <div className="mr-4 flex-shrink-0">
              <AlertTriangle size={24} className="text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Action Required</h4>
              <p className="text-gray-600 mt-1">
                2 modules are approaching their download limit for your current plan. 
                Consider upgrading to the Enterprise plan for unlimited downloads.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Button size="sm">
            Generate Full AI Report
          </Button>
        </div>
      </Card>
      
      {/* Getting Started */}
      <Card 
        title="Getting Started Guide" 
        subtitle="New to Business Module Hub? Follow these steps to get the most out of the platform."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
              1
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Browse Modules</h4>
            <p className="text-gray-600 text-sm">
              Explore our module library to find the right tools for your team.
            </p>
            <Link to="/modules" className="mt-4 text-blue-900 font-medium">
              View Modules
            </Link>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
              2
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Add Team Members</h4>
            <p className="text-gray-600 text-sm">
              Invite your colleagues to join and assign appropriate roles.
            </p>
            <Link to="/team" className="mt-4 text-blue-900 font-medium">
              Manage Team
            </Link>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
              3
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Assign Modules</h4>
            <p className="text-gray-600 text-sm">
              Distribute modules to your team members based on their roles.
            </p>
            <Link to="/modules/assignments" className="mt-4 text-blue-900 font-medium">
              Assign Modules
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <Button>
            Watch Tutorial Video
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CompanyDashboard;