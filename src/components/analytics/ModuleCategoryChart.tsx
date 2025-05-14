import React, { useState } from 'react';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';
import Card from '../../components/common/Card';

interface ModuleCategory {
  category: string;
  count: number;
}

interface ModuleCategoryChartProps {
  data: ModuleCategory[];
}

// Custom active shape for pie chart
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-20} textAnchor="middle" fill={fill} className="text-lg font-medium">
        {payload.category}
      </text>
      <text x={cx} y={cy} dy={10} textAnchor="middle" fill="#333" className="text-sm">
        {`${value} modules`}
      </text>
      <text x={cx} y={cy} dy={30} textAnchor="middle" fill="#999" className="text-xs">
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const ModuleCategoryChart: React.FC<ModuleCategoryChartProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Colors for pie chart
  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#6366F1', '#EC4899'];

  return (
    <Card title="Module Categories">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Category Distribution</h3>
        <div className="grid grid-cols-2 gap-2">
          {data.map((category, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-xs text-gray-600">{category.category}</span>
              <span className="text-xs font-medium text-gray-900 ml-auto">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ModuleCategoryChart;