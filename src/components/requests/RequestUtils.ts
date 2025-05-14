// Helper functions for request styling and formatting

export const getStatusBadgeClass = (status: string): string => {
  switch(status) {
    case 'open':
      return 'bg-blue-100 text-blue-800';
    case 'in_progress':
      return 'bg-yellow-100 text-yellow-800';
    case 'under_review':
      return 'bg-purple-100 text-purple-800';
    case 'planned':
      return 'bg-indigo-100 text-indigo-800';
    case 'resolved':
      return 'bg-green-100 text-green-800';
    case 'closed':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getPriorityBadgeClass = (priority: string): string => {
  switch(priority) {
    case 'critical':
      return 'bg-red-100 text-red-800';
    case 'high':
      return 'bg-orange-100 text-orange-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getTypeBadgeClass = (type: string): string => {
  switch(type) {
    case 'support':
      return 'bg-blue-100 text-blue-800';
    case 'feature':
      return 'bg-purple-100 text-purple-800';
    case 'bug':
      return 'bg-red-100 text-red-800';
    case 'billing':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const formatStatus = (status: string): string => {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};