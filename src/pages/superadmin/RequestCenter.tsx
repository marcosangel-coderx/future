import React, { useState } from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import RequestStats from '../../components/requests/RequestStats';
import RequestFilters from '../../components/requests/RequestFilters';
import RequestList from '../../components/requests/RequestList';
import RequestDetail from '../../components/requests/RequestDetail';
import { 
  getStatusBadgeClass, 
  getPriorityBadgeClass, 
  getTypeBadgeClass, 
  formatStatus 
} from '../../components/requests/RequestUtils';

// Mock data for support requests
const mockRequests = [
  {
    id: '1',
    title: 'Need help with module assignment',
    description: 'We are trying to assign modules to our new team members but getting an error message.',
    type: 'support',
    status: 'open',
    priority: 'high',
    company: 'Acme Corporation',
    companyId: '1',
    submittedBy: 'John Smith',
    submittedAt: '2023-06-14T10:30:00',
    lastUpdated: '2023-06-14T14:45:00',
  },
  {
    id: '2',
    title: 'Feature request: Bulk module assignment',
    description: 'It would be helpful to have a feature to assign modules to multiple users at once.',
    type: 'feature',
    status: 'under_review',
    priority: 'medium',
    company: 'Globex Industries',
    companyId: '2',
    submittedBy: 'Sarah Johnson',
    submittedAt: '2023-06-10T09:15:00',
    lastUpdated: '2023-06-12T11:20:00',
  },
  {
    id: '3',
    title: 'Module download failing',
    description: 'Users are unable to download the HR Onboarding module. The download starts but then fails at 50%.',
    type: 'bug',
    status: 'in_progress',
    priority: 'critical',
    company: 'Umbrella Corp',
    companyId: '4',
    submittedBy: 'Emily Rodriguez',
    submittedAt: '2023-06-15T08:30:00',
    lastUpdated: '2023-06-15T10:15:00',
  },
  {
    id: '4',
    title: 'Account access issue',
    description: 'One of our admins cannot access certain settings in their account.',
    type: 'support',
    status: 'open',
    priority: 'medium',
    company: 'Stark Industries',
    companyId: '5',
    submittedBy: 'David Wilson',
    submittedAt: '2023-06-14T16:20:00',
    lastUpdated: '2023-06-14T16:20:00',
  },
  {
    id: '5',
    title: 'Feature request: Advanced analytics dashboard',
    description: 'We would like to see more detailed analytics about module usage and user engagement.',
    type: 'feature',
    status: 'planned',
    priority: 'low',
    company: 'Wayne Enterprises',
    companyId: '6',
    submittedBy: 'Jessica Lee',
    submittedAt: '2023-06-08T14:45:00',
    lastUpdated: '2023-06-13T09:30:00',
  },
  {
    id: '6',
    title: 'Billing discrepancy',
    description: 'Our latest invoice shows charges for modules we haven\'t used.',
    type: 'billing',
    status: 'resolved',
    priority: 'high',
    company: 'Acme Corporation',
    companyId: '1',
    submittedBy: 'Robert Taylor',
    submittedAt: '2023-06-12T11:10:00',
    lastUpdated: '2023-06-14T15:30:00',
  },
  {
    id: '7',
    title: 'Module content error',
    description: 'The Compliance Documentation Generator module has outdated information in section 3.2.',
    type: 'bug',
    status: 'open',
    priority: 'medium',
    company: 'Initech Solutions',
    companyId: '3',
    submittedBy: 'Michael Chen',
    submittedAt: '2023-06-13T10:20:00',
    lastUpdated: '2023-06-13T10:20:00',
  },
];

const RequestCenter: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  // Filter requests based on search and filters
  const filteredRequests = mockRequests.filter(request => {
    const matchesSearch = 
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || request.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || request.priority === priorityFilter;
    
    return matchesSearch && matchesType && matchesStatus && matchesPriority;
  });

  // Get the selected request details
  const selectedRequestDetails = selectedRequest 
    ? mockRequests.find(r => r.id === selectedRequest) || null
    : null;

  // Calculate stats
  const openRequests = mockRequests.filter(r => r.status === 'open').length;
  const criticalRequests = mockRequests.filter(r => r.priority === 'critical').length;
  const resolvedRequests = mockRequests.filter(r => r.status === 'resolved').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Request Center</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate('/admin/requests')}>
            <Clock className="mr-2 h-4 w-4" />
            View History
          </Button>
          <Button onClick={() => navigate('/admin/requests')}>
            <MessageCircle className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>
      </div>
      
      {/* Request Statistics */}
      <RequestStats
        totalRequests={mockRequests.length}
        openRequests={openRequests}
        criticalRequests={criticalRequests}
        resolvedRequests={resolvedRequests}
      />
      
      {/* Filters and Search */}
      <Card>
        <RequestFilters
          searchTerm={searchTerm}
          typeFilter={typeFilter}
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          onSearchChange={setSearchTerm}
          onTypeFilterChange={setTypeFilter}
          onStatusFilterChange={setStatusFilter}
          onPriorityFilterChange={setPriorityFilter}
        />
      </Card>
      
      {/* Request List and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Request List */}
        <div className="lg:col-span-1">
          <Card title="Requests" className="h-full">
            <RequestList
              requests={filteredRequests}
              selectedRequestId={selectedRequest}
              onSelectRequest={setSelectedRequest}
              getTypeBadgeClass={getTypeBadgeClass}
              getPriorityBadgeClass={getPriorityBadgeClass}
            />
          </Card>
        </div>
        
        {/* Request Details */}
        <div className="lg:col-span-2">
          <Card title="Request Details" className="h-full">
            <RequestDetail
              request={selectedRequestDetails}
              getStatusBadgeClass={getStatusBadgeClass}
              getPriorityBadgeClass={getPriorityBadgeClass}
              formatStatus={formatStatus}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestCenter;