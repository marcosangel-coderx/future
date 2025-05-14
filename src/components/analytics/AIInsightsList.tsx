import React from 'react';
import Card from '../../components/common/Card';
import AIInsightCard, { AIInsight } from './AIInsightCard';

interface AIInsightsListProps {
  insights: AIInsight[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

const AIInsightsList: React.FC<AIInsightsListProps> = ({ 
  insights, 
  filter, 
  onFilterChange 
}) => {
  return (
    <Card title="AI-Generated Insights">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Latest Insights</h3>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 text-xs rounded-md ${filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => onFilterChange('all')}
            >
              All
            </button>
            <button
              className={`px-3 py-1 text-xs rounded-md ${filter === 'usage' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => onFilterChange('usage')}
            >
              Usage
            </button>
            <button
              className={`px-3 py-1 text-xs rounded-md ${filter === 'adoption' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => onFilterChange('adoption')}
            >
              Adoption
            </button>
            <button
              className={`px-3 py-1 text-xs rounded-md ${filter === 'retention' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => onFilterChange('retention')}
            >
              Retention
            </button>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {insights.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No insights found for the selected filter.</p>
        ) : (
          insights.map(insight => (
            <AIInsightCard key={insight.id} insight={insight} />
          ))
        )}
      </div>
    </Card>
  );
};

export default AIInsightsList;