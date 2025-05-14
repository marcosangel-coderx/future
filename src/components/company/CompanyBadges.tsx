import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface PlanBadgeProps {
  plan: string;
}

export const PlanBadge: React.FC<PlanBadgeProps> = ({ plan }) => {
  const getBadgeClass = () => {
    switch(plan) {
      case 'enterprise':
        return 'bg-purple-100 text-purple-800';
      case 'professional':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeClass()}`}>
      {plan.charAt(0).toUpperCase() + plan.slice(1)}
    </span>
  );
};

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getBadgeClass = () => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'trial':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeClass()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

interface SubscriptionStatusProps {
  endDate: string;
}

export const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ endDate }) => {
  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining(endDate);

  return (
    <div>
      <div className="text-sm text-gray-900">
        {new Date(endDate).toLocaleDateString()}
      </div>
      <div className="text-sm">
        {daysRemaining <= 30 ? (
          <span className="text-red-600 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-1" />
            {daysRemaining} days left
          </span>
        ) : (
          <span className="text-green-600 flex items-center">
            <CheckCircle className="h-4 w-4 mr-1" />
            {daysRemaining} days left
          </span>
        )}
      </div>
    </div>
  );
};