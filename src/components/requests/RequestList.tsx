import React from 'react';

interface Request {
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  priority: string;
  company: string;
  submittedAt: string;
}

interface RequestListProps {
  requests: Request[];
  selectedRequestId: string | null;
  onSelectRequest: (id: string) => void;
  getTypeBadgeClass: (type: string) => string;
  getPriorityBadgeClass: (priority: string) => string;
}

const RequestList: React.FC<RequestListProps> = ({
  requests,
  selectedRequestId,
  onSelectRequest,
  getTypeBadgeClass,
  getPriorityBadgeClass
}) => {
  return (
    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
      {requests.map((request) => (
        <div 
          key={request.id}
          className={`p-4 rounded-lg border cursor-pointer transition-colors ${selectedRequestId === request.id ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
          onClick={() => onSelectRequest(request.id)}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{request.title}</h3>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityBadgeClass(request.priority)}`}>
              {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500 line-clamp-2">{request.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeBadgeClass(request.type)}`}>
              {request.type.charAt(0).toUpperCase() + request.type.slice(1)}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(request.submittedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
      
      {requests.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No requests found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default RequestList;