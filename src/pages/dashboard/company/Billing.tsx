import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, DollarSign, Calendar, Package, ChevronRight } from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';

// Mock data for billing
const mockBillingData = {
  currentPlan: 'Pro',
  billingCycle: 'Monthly',
  nextBillingDate: '2023-06-15',
  amount: 49.99,
  paymentMethod: {
    type: 'Credit Card',
    last4: '4242',
    expiry: '12/24',
  },
  recentInvoices: [
    {
      id: 'INV-001',
      date: '2023-05-15',
      amount: 49.99,
      status: 'paid',
    },
    {
      id: 'INV-002',
      date: '2023-04-15',
      amount: 49.99,
      status: 'paid',
    },
    {
      id: 'INV-003',
      date: '2023-03-15',
      amount: 49.99,
      status: 'paid',
    },
  ],
  usage: {
    modules: 3,
    maxModules: 15,
    users: 3,
    maxUsers: 10,
    storage: 45,
    maxStorage: 50,
  },
};

const Billing: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Billing & Subscription</h1>
        <div className="flex space-x-3">
          <Link to="/billing/manage">
            <Button variant="outline">
              Manage Subscription
            </Button>
          </Link>
          <Link to="/billing/payment">
            <Button>
              <CreditCard className="mr-2 h-4 w-4" />
              Update Payment Method
            </Button>
          </Link>
        </div>
      </div>

      {/* Current Plan */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Current Plan: {mockBillingData.currentPlan}</h2>
            <p className="text-sm text-gray-600 mt-1">
              Billing {mockBillingData.billingCycle.toLowerCase()} · Next payment on {mockBillingData.nextBillingDate}
            </p>
          </div>
          <Link to="/billing/upgrade">
            <Button variant="outline">
              Change Plan
            </Button>
          </Link>
        </div>
      </Card>

      {/* Billing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <Card>
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-900" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Monthly Cost</h3>
              <p className="text-xl font-semibold text-gray-900">${mockBillingData.amount}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="h-6 w-6 text-green-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Next Payment</h3>
              <p className="text-xl font-semibold text-gray-900">{mockBillingData.nextBillingDate}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="h-6 w-6 text-purple-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Active Modules</h3>
              <p className="text-xl font-semibold text-gray-900">
                {mockBillingData.usage.modules}/{mockBillingData.usage.maxModules}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-2 bg-amber-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-amber-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
              <p className="text-sm font-medium text-gray-900">
                •••• {mockBillingData.paymentMethod.last4}
              </p>
              <p className="text-xs text-gray-500">
                Expires {mockBillingData.paymentMethod.expiry}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Usage Overview */}
      <Card title="Usage Overview">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Modules Used</span>
              <span className="text-sm font-medium text-gray-900">
                {mockBillingData.usage.modules}/{mockBillingData.usage.maxModules}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-blue-900"
                style={{ width: `${(mockBillingData.usage.modules / mockBillingData.usage.maxModules) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Team Members</span>
              <span className="text-sm font-medium text-gray-900">
                {mockBillingData.usage.users}/{mockBillingData.usage.maxUsers}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-green-700"
                style={{ width: `${(mockBillingData.usage.users / mockBillingData.usage.maxUsers) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Storage Used (GB)</span>
              <span className="text-sm font-medium text-gray-900">
                {mockBillingData.usage.storage}/{mockBillingData.usage.maxStorage}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-purple-700"
                style={{ width: `${(mockBillingData.usage.storage / mockBillingData.usage.maxStorage) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Invoices */}
      <Card title="Recent Invoices">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockBillingData.recentInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${invoice.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      invoice.status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button variant="outline" className="flex items-center">
            View All Invoices <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Billing;