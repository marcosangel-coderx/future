import React from 'react';
import { Calendar } from 'lucide-react';
import Card from '../../components/common/Card';
interface TimeRangeSelectorProps {
  timeRange: '7d' | '30d' | '90d' | '1y';
  onTimeRangeChange: (range: '7d' | '30d' | '90d' | '1y') => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ 
  timeRange, 
  onTimeRangeChange 
}) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">Time Range:</span>
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '7d' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => onTimeRangeChange('7d')}
          >
            7 Days
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '30d' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => onTimeRangeChange('30d')}
          >
            30 Days
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '90d' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => onTimeRangeChange('90d')}
          >
            90 Days
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '1y' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => onTimeRangeChange('1y')}
          >
            1 Year
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TimeRangeSelector;