import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Package, 
  Calendar, 
  Download, 
  Users, 
  Clock,
  ArrowLeft,
  FileText,
  Tag,
  Shield
} from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { modules } from '../../../data/mockData';

const ModuleDetails: React.FC = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);

  // Find the module from our mock data
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900">Module not found</h2>
        <p className="mt-2 text-gray-600">The requested module could not be found.</p>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => navigate('/modules')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Module Library
        </Button>
      </div>
    );
  }

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDownloading(false);
    // In a real app, this would trigger the actual download
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={() => navigate('/modules')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Module Library
        </Button>
        <Button 
          onClick={handleDownload} 
          isLoading={isDownloading}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Module
        </Button>
      </div>

      {/* Module Overview */}
      <Card>
        <div className="flex items-start space-x-4">
          <div className="p-4 bg-blue-100 rounded-lg">
            <Package className="h-8 w-8 text-blue-900" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{module.title}</h1>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                v{module.version}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {module.status.charAt(0).toUpperCase() + module.status.slice(1)}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {module.category}
              </span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Module Stats */}
        <Card>
          <div className="space-y-4">
            <div className="flex items-center">
              <Download className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="text-lg font-semibold text-gray-900">{module.downloadCount}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Released</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(module.releaseDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(module.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Module Requirements */}
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Requirements</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Required Role</p>
                <p className="text-lg font-semibold text-gray-900">
                  {module.requiredRole.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Size</p>
                <p className="text-lg font-semibold text-gray-900">{module.size} MB</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Module Tags */}
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Tag className="h-4 w-4 mr-1" />
              {module.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <Users className="h-4 w-4 mr-1" />
              Team Collaboration
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <Shield className="h-4 w-4 mr-1" />
              Enterprise Ready
            </span>
          </div>
        </Card>
      </div>

      {/* Module Description */}
      <Card>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Description</h3>
        <div className="prose max-w-none">
          <p className="text-gray-600">{module.description}</p>
        </div>
      </Card>

      {/* Module Documentation */}
      <Card>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Documentation</h3>
        <div className="prose max-w-none">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-blue-900 font-medium mb-2">Getting Started</h4>
              <p className="text-blue-800">
                Follow our step-by-step guide to integrate this module into your workflow.
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                View Guide
              </Button>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-green-900 font-medium mb-2">API Reference</h4>
              <p className="text-green-800">
                Detailed documentation of all available APIs and integration points.
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                View API Docs
              </Button>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="text-purple-900 font-medium mb-2">Examples</h4>
              <p className="text-purple-800">
                Browse through example implementations and use cases.
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModuleDetails;