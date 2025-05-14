import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Calendar, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';

// Mock data for subscription
const mockSubscriptionData = {
  id: 'sub-001',
  plan: 'Pro',
  status: 'active',
  startDate: '2023-05-15',
  endDate: '2023-11-15',
  autoRenew: true,
  paymentMethod: {
    type: 'Credit Card',
    last4: '4242',
    expiry: '12/24',
  },
  billingCycle: 'Monthly',
  amount: 49.99,
};

const ManageSubscription: React.FC = () => {
  const { auth } = useAuth();
  const [autoRenew, setAutoRenew] = useState(mockSubscriptionData.autoRenew);

  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining(mockSubscriptionData.endDate);

  const toggleAutoRenew = () => {
    setAutoRenew(!autoRenew);
    // In a real app, this would call an API to update the subscription
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Manage Subscription</h1>
        <Link to="/billing">
          <Button variant="outline" size="sm">
            Back to Billing
          </Button>
        </Link>
      </div>

      {/* Subscription Overview */}
      <Card>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Current Plan: {mockSubscriptionData.plan}</h2>
              <p className="text-sm text-gray-600 mt-1">
                Billing {mockSubscriptionData.billingCycle.toLowerCase()} · ${mockSubscriptionData.amount}/month
              </p>
            </div>
            <Link to="/billing/upgrade">
              <Button>
                Upgrade Plan
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Subscription Period</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(mockSubscriptionData.startDate).toLocaleDateString()} - {new Date(mockSubscriptionData.endDate).toLocaleDateString()}
                  </p>
                  <div className="mt-1">
                    {daysRemaining <= 30 ? (
                      <span className="text-red-600 flex items-center text-sm">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        {daysRemaining} days left
                      </span>
                    ) : (
                      <span className="text-green-600 flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {daysRemaining} days left
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CreditCard className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Payment Method</h3>
                  <p className="text-sm text-gray-600">
                    {mockSubscriptionData.paymentMethod.type} ending in {mockSubscriptionData.paymentMethod.last4}
                  </p>
                  <p className="text-sm text-gray-600">
                    Expires {mockSubscriptionData.paymentMethod.expiry}
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1">
                    Update payment method
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Auto-Renewal Settings */}
      <Card title="Auto-Renewal Settings">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Auto-renew subscription</h3>
            <p className="text-sm text-gray-600 mt-1">
              Your subscription will {!autoRenew && "not"} automatically renew on {new Date(mockSubscriptionData.endDate).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleAutoRenew}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${autoRenew ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <span className="sr-only">Toggle auto-renewal</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${autoRenew ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* Cancellation Options */}
      <Card title="Cancellation Options">
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            If you cancel your subscription, you will lose access to all premium features at the end of your current billing period.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Cancel subscription</h3>
              <p className="text-sm text-gray-600 mt-1">
                Your subscription will remain active until {new Date(mockSubscriptionData.endDate).toLocaleDateString()}
              </p>
            </div>
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              Cancel Subscription
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ManageSubscription;