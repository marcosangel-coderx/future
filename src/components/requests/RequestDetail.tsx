import React from 'react';
import { MessageCircle, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Button from '../../components/common/Button';

interface Request {
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  priority: string;
  company: string;
  submittedBy: string;
  submittedAt: string;
  lastUpdated: string;
}

interface RequestDetailProps {
  request: Request | null;
  getStatusBadgeClass: (status: string) => string;
  getPriorityBadgeClass: (priority: string) => string;
  formatStatus: (status: string) => string;
}

const RequestDetail: React.FC<RequestDetailProps> = ({
  request,
  getStatusBadgeClass,
  getPriorityBadgeClass,
  formatStatus
}) => {
  if (!request) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] text-center">
        <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <MessageCircle className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No Request Selected</h3>
        <p className="text-gray-500 max-w-md">
          Select a request from the list to view its details, or use the filters to find specific requests.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-900">{request.title}</h2>
          <div className="flex space-x-2">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(request.status)}`}>
              {formatStatus(request.status)}
            </span>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityBadgeClass(request.priority)}`}>
              {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <span className="mr-4">ID: #{request.id}</span>
          <span className="mr-4">Submitted: {new Date(request.submittedAt).toLocaleString()}</span>
          <span>Updated: {new Date(request.lastUpdated).toLocaleString()}</span>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-900 font-semibold">{request.submittedBy.charAt(0)}</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{request.submittedBy}</p>
            <p className="text-xs text-gray-500">{request.company}</p>
          </div>
        </div>
        <p className="text-gray-700 whitespace-pre-line">{request.description}</p>
      </div>
      
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <MessageCircle className="mr-2 h-4 w-4" />
            Reply
          </Button>
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Change Status
          </Button>
          {request.status !== 'resolved' ? (
            <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
              <CheckCircle className="mr-2 h-4 w-4" />
              Mark as Resolved
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
              <XCircle className="mr-2 h-4 w-4" />
              Reopen
            </Button>
          )}
          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Escalate
          </Button>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Activity Log</h3>
        <div className="space-y-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-900 font-semibold">S</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">System</p>
              <p className="text-sm text-gray-500">Status changed to <span className="font-medium">In Progress</span></p>
              <p className="text-xs text-gray-400">{new Date(request.lastUpdated).toLocaleString()}</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-900 font-semibold">A</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Admin</p>
              <p className="text-sm text-gray-500">Request received and assigned to support team</p>
              <p className="text-xs text-gray-400">{new Date(request.submittedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetail;