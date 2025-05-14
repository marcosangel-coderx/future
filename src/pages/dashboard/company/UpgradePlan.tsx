import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft, CreditCard } from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';
import { PricingTier } from '../../../types';

// Mock pricing tiers
const mockPricingTiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    billingPeriod: 'monthly',
    features: [
      'Up to 3 team members',
      'Basic module library (5 modules)',
      'Standard support',
      'Basic analytics',
    ],
    limitations: {
      teamMembers: 3,
      moduleDownloads: 5,
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49.99,
    billingPeriod: 'monthly',
    features: [
      'Up to 10 team members',
      'Extended module library (15 modules)',
      'Priority support',
      'Advanced analytics',
      'Custom branding',
      'API access',
    ],
    limitations: {
      teamMembers: 10,
      moduleDownloads: 15,
    },
    recommended: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199.99,
    billingPeriod: 'monthly',
    features: [
      'Unlimited team members',
      'Full module library access',
      'Dedicated support',
      'Advanced analytics with AI insights',
      'Custom module development',
      'White-label solution',
      'SSO integration',
      'Dedicated account manager',
    ],
    limitations: {
      teamMembers: 999,
      moduleDownloads: 999,
    },
  },
];

const UpgradePlan: React.FC = () => {
  const { auth } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  // Get current plan from auth context or use a default
  const currentPlan = auth.company?.plan || 'free';
  
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };
  
  const handleBillingPeriodChange = (period: 'monthly' | 'annual') => {
    setBillingPeriod(period);
  };
  
  const getAnnualPrice = (monthlyPrice: number) => {
    // 20% discount for annual billing
    return (monthlyPrice * 12 * 0.8).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Upgrade Your Plan</h1>
        <Link to="/billing/manage">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subscription
          </Button>
        </Link>
      </div>
      
      {/* Billing Period Toggle */}
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Choose Billing Period</h2>
            <p className="text-sm text-gray-600 mt-1">
              Save 20% with annual billing
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center space-x-4 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => handleBillingPeriodChange('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${billingPeriod === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleBillingPeriodChange('annual')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${billingPeriod === 'annual' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
              >
                Annual
              </button>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockPricingTiers.map((tier) => {
          const isCurrentPlan = tier.id === currentPlan;
          const isSelected = tier.id === selectedPlan;
          const price = billingPeriod === 'monthly' ? tier.price : Number(getAnnualPrice(tier.price));
          
          return (
            <Card key={tier.id} className={`relative ${tier.recommended ? 'border-blue-500 border-2' : ''}`}>
              {tier.recommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                  Recommended
                </div>
              )}
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${price}</span>
                  <span className="text-gray-500 ml-2">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  {isCurrentPlan ? (
                    <Button fullWidth disabled>
                      Current Plan
                    </Button>
                  ) : (
                    <Button 
                      fullWidth 
                      variant={isSelected ? 'default' : 'outline'}
                      onClick={() => handlePlanSelect(tier.id)}
                    >
                      {isSelected ? 'Selected' : 'Select Plan'}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Checkout Section */}
      <Card>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Complete Your Upgrade</h2>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {mockPricingTiers.find(tier => tier.id === selectedPlan)?.name} Plan
                </h3>
                <p className="text-sm text-gray-600">
                  Billed {billingPeriod === 'monthly' ? 'monthly' : 'annually'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  ${billingPeriod === 'monthly' 
                    ? mockPricingTiers.find(tier => tier.id === selectedPlan)?.price
                    : getAnnualPrice(mockPricingTiers.find(tier => tier.id === selectedPlan)?.price || 0)
                  }
                </p>
                <p className="text-xs text-gray-500">
                  {billingPeriod === 'annual' && '(20% discount applied)'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <Button>
              <CreditCard className="mr-2 h-4 w-4" />
              Proceed to Payment
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UpgradePlan;