import React from 'react';
import { Brain, TrendingUp, AlertTriangle, Zap } from 'lucide-react';

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
  generatedAt: string;
}

interface AIInsightCardProps {
  insight: AIInsight;
}

const AIInsightCard: React.FC<AIInsightCardProps> = ({ insight }) => {
  // Format the date
  const formattedDate = new Date(insight.generatedAt).toLocaleString();
  
  // Determine icon and color based on category
  const getIconAndColor = () => {
    switch (insight.category) {
      case 'usage':
        return { icon: <TrendingUp size={16} />, color: 'text-blue-600 bg-blue-100' };
      case 'retention':
        return { icon: <AlertTriangle size={16} />, color: 'text-red-600 bg-red-100' };
      case 'adoption':
        return { icon: <Zap size={16} />, color: 'text-amber-600 bg-amber-100' };
      default:
        return { icon: <Brain size={16} />, color: 'text-purple-600 bg-purple-100' };
    }
  };
  
  // Determine impact badge color
  const getImpactColor = () => {
    switch (insight.impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const { icon, color } = getIconAndColor();
  const impactColor = getImpactColor();
  
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className={`p-2 rounded-lg ${color} mr-3`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900">{insight.title}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${impactColor} ml-2`}>
              {insight.impact.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
          <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
            <span>Generated: {formattedDate}</span>
            <span className="capitalize">{insight.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightCard;