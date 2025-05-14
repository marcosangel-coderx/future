import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, ChevronRight, X } from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';
import { modules } from '../../../data/mockData';

// Helper functions for category styling
const getCategoryBgColor = (category: string): string => {
  switch (category) {
    case 'finance': return 'bg-blue-100';
    case 'hr': return 'bg-teal-100';
    case 'sales': return 'bg-purple-100';
    default: return 'bg-amber-100';
  }
};

const getCategoryTextColor = (category: string): string => {
  switch (category) {
    case 'finance': return 'text-blue-900';
    case 'hr': return 'text-teal-700';
    case 'sales': return 'text-purple-700';
    default: return 'text-amber-600';
  }
};

const ModuleLibrary: React.FC = () => {
  const { auth } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredModules, setFilteredModules] = useState(modules);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    minDownloads: 0,
    maxSize: 100,
    requiredRole: 'all',
    status: 'all',
    minVersion: ''
  });
  
  // Get unique categories
  const categories = ['all', ...new Set(modules.map(module => module.category))];
  
  // Filter modules based on search term, category, and advanced filters
  useEffect(() => {
    let result = modules;
    
    if (searchTerm) {
      result = result.filter(module => 
        module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      result = result.filter(module => module.category === selectedCategory);
    }
    
    // Apply advanced filters
    if (advancedFilters.minDownloads > 0) {
      result = result.filter(module => module.downloadCount >= advancedFilters.minDownloads);
    }
    
    if (advancedFilters.maxSize < 100) {
      result = result.filter(module => parseFloat(module.size) <= advancedFilters.maxSize);
    }
    
    if (advancedFilters.requiredRole !== 'all') {
      result = result.filter(module => module.requiredRole === advancedFilters.requiredRole);
    }
    
    if (advancedFilters.status !== 'all') {
      result = result.filter(module => module.status === advancedFilters.status);
    }
    
    if (advancedFilters.minVersion) {
      result = result.filter(module => {
        const moduleVersion = module.version.split('.').map(Number);
        const minVersion = advancedFilters.minVersion.split('.').map(Number);
        
        for (let i = 0; i < Math.max(moduleVersion.length, minVersion.length); i++) {
          const modVer = moduleVersion[i] || 0;
          const minVer = minVersion[i] || 0;
          
          if (modVer > minVer) return true;
          if (modVer < minVer) return false;
        }
        
        return true; // Versions are equal
      });
    }
    
    setFilteredModules(result);
  }, [searchTerm, selectedCategory, advancedFilters]);

  // Format date for display
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Module Library</h1>
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Total Modules:</span> {filteredModules.length}
        </div>
      </div>
      
      {/* Search and Filter */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
              placeholder="Search modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Filter size={18} className="text-gray-500 mr-2" />
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <Button 
              size="sm" 
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              Advanced Filters
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Advanced Filters Panel */}
      {showAdvancedFilters && (
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Advanced Filters</h3>
            <button 
              onClick={() => setShowAdvancedFilters(false)} 
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Downloads
              </label>
              <input
                type="number"
                min="0"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                value={advancedFilters.minDownloads}
                onChange={(e) => setAdvancedFilters({
                  ...advancedFilters,
                  minDownloads: parseInt(e.target.value) || 0
                })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Size (MB)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                value={advancedFilters.maxSize}
                onChange={(e) => setAdvancedFilters({
                  ...advancedFilters,
                  maxSize: parseInt(e.target.value) || 0
                })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required Role
              </label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                value={advancedFilters.requiredRole}
                onChange={(e) => setAdvancedFilters({
                  ...advancedFilters,
                  requiredRole: e.target.value
                })}
              >
                <option value="all">All Roles</option>
                <option value="company_admin">Company Admin</option>
                <option value="developer">Developer</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                value={advancedFilters.status}
                onChange={(e) => setAdvancedFilters({
                  ...advancedFilters,
                  status: e.target.value
                })}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="deprecated">Deprecated</option>
                <option value="beta">Beta</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Version
              </label>
              <input
                type="text"
                placeholder="e.g. 1.0.0"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                value={advancedFilters.minVersion}
                onChange={(e) => setAdvancedFilters({
                  ...advancedFilters,
                  minVersion: e.target.value
                })}
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setAdvancedFilters({
                minDownloads: 0,
                maxSize: 100,
                requiredRole: 'all',
                status: 'all',
                minVersion: ''
              })}
            >
              Reset Filters
            </Button>
            <Button 
              size="sm"
              onClick={() => setShowAdvancedFilters(false)}
            >
              Apply Filters
            </Button>
          </div>
        </Card>
      )}
      
      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <Card key={module.id} className="h-full flex flex-col">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className={`h-10 w-10 rounded flex items-center justify-center mr-3 ${getCategoryBgColor(module.category)}`}>
                    <span className={`font-bold ${getCategoryTextColor(module.category)}`}>
                      {module.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {module.category.charAt(0).toUpperCase() + module.category.slice(1)}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  v{module.version}
                </span>
              </div>
              
              <p className="mt-4 text-sm text-gray-600">{module.description}</p>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Downloads</p>
                  <p className="text-sm font-medium text-gray-900">{module.downloadCount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Last Updated</p>
                  <p className="text-sm font-medium text-gray-900">{formatDate(module.lastUpdated)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Size</p>
                  <p className="text-sm font-medium text-gray-900">{module.size} MB</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Required Role</p>
                  <p className="text-sm font-medium text-gray-900">{module.requiredRole || 'Any'}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
              <Link to={`/modules/${module.id}`} className="text-blue-900 hover:text-blue-700 text-sm font-medium flex items-center">
                View Details <ChevronRight size={16} className="ml-1" />
              </Link>
              <Button size="sm" className="flex items-center">
                <Download size={16} className="mr-1" /> Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No modules found matching your criteria.</p>
          <Button className="mt-4" onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ModuleLibrary;