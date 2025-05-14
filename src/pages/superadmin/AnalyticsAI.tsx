import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, RefreshCw, FileText, FileSpreadsheet, ChevronDown } from 'lucide-react';
import Button from '../../components/common/Button';

// Import refactored components
import TimeRangeSelector from '../../components/analytics/TimeRangeSelector';
import AnalyticsMetrics from '../../components/analytics/AnalyticsMetrics';
import UsageChart from '../../components/analytics/UsageChart';
import ModuleCategoryChart from '../../components/analytics/ModuleCategoryChart';
import AIInsightsList from '../../components/analytics/AIInsightsList';
import { AIInsight } from '../../components/analytics/AIInsightCard';

// Mock data for analytics
const mockMonthlyData = [
  { month: 'Jan', downloads: 120, users: 45, activeModules: 18 },
  { month: 'Feb', downloads: 150, users: 48, activeModules: 20 },
  { month: 'Mar', downloads: 200, users: 52, activeModules: 22 },
  { month: 'Apr', downloads: 180, users: 55, activeModules: 24 },
  { month: 'May', downloads: 250, users: 60, activeModules: 26 },
  { month: 'Jun', downloads: 280, users: 65, activeModules: 28 },
  { month: 'Jul', downloads: 310, users: 72, activeModules: 30 },
  { month: 'Aug', downloads: 290, users: 68, activeModules: 32 },
  { month: 'Sep', downloads: 320, users: 75, activeModules: 34 },
  { month: 'Oct', downloads: 350, users: 80, activeModules: 36 },
  { month: 'Nov', downloads: 380, users: 85, activeModules: 38 },
  { month: 'Dec', downloads: 420, users: 90, activeModules: 40 },
];

const mockModuleUsage = [
  { category: 'HR', count: 35 },
  { category: 'Finance', count: 25 },
  { category: 'Sales', count: 20 },
  { category: 'Operations', count: 15 },
  { category: 'IT', count: 5 },
];

const mockAIInsights: AIInsight[] = [
  {
    id: '1',
    title: 'User Engagement Patterns',
    description: 'Users are most active on Tuesdays and Wednesdays, with peak usage between 10am-2pm.',
    impact: 'high',
    category: 'usage',
    generatedAt: '2023-06-14T10:30:00',
  },
  {
    id: '2',
    title: 'Module Adoption Trend',
    description: 'HR modules have seen a 24% increase in adoption over the last month, particularly among enterprise clients.',
    impact: 'medium',
    category: 'adoption',
    generatedAt: '2023-06-13T14:45:00',
  },
  {
    id: '3',
    title: 'Potential Churn Risk',
    description: 'Three companies have shown decreased activity in the past two weeks, suggesting potential churn risk.',
    impact: 'high',
    category: 'retention',
    generatedAt: '2023-06-15T09:15:00',
  },
  {
    id: '4',
    title: 'Feature Utilization Gap',
    description: 'The advanced reporting features in Finance modules are underutilized, with only 15% of eligible users accessing them.',
    impact: 'medium',
    category: 'features',
    generatedAt: '2023-06-12T11:20:00',
  },
  {
    id: '5',
    title: 'Cross-Selling Opportunity',
    description: 'Companies using HR modules are highly likely to benefit from the Compliance Documentation Generator module.',
    impact: 'medium',
    category: 'sales',
    generatedAt: '2023-06-14T16:30:00',
  },
];

const AnalyticsAI: React.FC = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [insightFilter, setInsightFilter] = useState<string>('all');
  const [showExportMenu, setShowExportMenu] = useState<boolean>(false);
  const exportMenuRef = useRef<HTMLDivElement>(null);

  // Filter insights based on category
  const filteredInsights = insightFilter === 'all' 
    ? mockAIInsights 
    : mockAIInsights.filter(insight => insight.category === insightFilter);

  // Filter monthly data based on time range
  const getFilteredMonthlyData = () => {
    // In a real app, this would fetch data from an API based on the time range
    // For now, we'll simulate filtering the mock data based on days
    
    // Create a mapping of month names to their numerical values
    const monthToIndex = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    // Get current date for comparison
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Filter data based on time range
    switch(timeRange) {
      case '7d':
        // Filter data from the last 7 days (simulate with most recent data)
        return mockMonthlyData.filter(item => {
          const itemMonth = monthToIndex[item.month];
          // If it's the current month or the previous month (if we're early in the month)
          return (itemMonth === currentMonth) || 
                 (currentMonth === 0 && itemMonth === 11) || // January case
                 (itemMonth === currentMonth - 1);
        }).slice(-1); // Take only the most recent entry to simulate 7 days
      
      case '30d':
        // Filter data from the last 30 days (approximately 1 month)
        return mockMonthlyData.filter(item => {
          const itemMonth = monthToIndex[item.month];
          // Current month or the previous month
          return (itemMonth === currentMonth) || 
                 (currentMonth === 0 && itemMonth === 11) || // January case
                 (itemMonth === currentMonth - 1);
        });
      
      case '90d':
        // Filter data from the last 90 days (approximately 3 months)
        return mockMonthlyData.filter(item => {
          const itemMonth = monthToIndex[item.month];
          // Current month or up to 3 months back
          return (itemMonth === currentMonth) || 
                 (itemMonth === ((currentMonth - 1 + 12) % 12)) || 
                 (itemMonth === ((currentMonth - 2 + 12) % 12)) || 
                 (itemMonth === ((currentMonth - 3 + 12) % 12));
        });
      
      case '1y':
        // All data for the last year
        return mockMonthlyData;
      
      default:
        return mockMonthlyData;
    }
  };

  // Get filtered data for charts
  const filteredMonthlyData = getFilteredMonthlyData();

  // Handle time range change
  const handleTimeRangeChange = (range: '7d' | '30d' | '90d' | '1y') => {
    setTimeRange(range);
    // In a real app, this would trigger data fetching for the new time range
    console.log(`Time range changed to ${range}, would fetch new data in production`);
  };

  // Handle export to PDF
  const handleExportPDF = async () => {
    console.log('Exporting analytics data to PDF...');
    const fileName = `analytics_report_${timeRange}_${new Date().toISOString().split('T')[0]}.pdf`;
    
    try {
      // Use the File System Access API to show a native save dialog
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [{
          description: 'PDF Document',
          accept: {'application/pdf': ['.pdf']},
        }],
      });
      
      // In a real app, this would generate the PDF content
      const dummyContent = new Uint8Array([80, 68, 70]); // PDF header bytes as dummy content
      
      // Write the file content
      const writable = await fileHandle.createWritable();
      await writable.write(dummyContent);
      await writable.close();
      
      alert('Analytics report PDF saved successfully');
    } catch (err) {
      // User cancelled or error occurred
      console.error('Error saving PDF:', err);
      if (err.name !== 'AbortError') {
        alert('Failed to save PDF. Please try again.');
      }
    }
    
    setShowExportMenu(false);
  };

  // Handle export to Excel
  const handleExportExcel = async () => {
    console.log('Exporting analytics data to Excel...');
    const fileName = `analytics_report_${timeRange}_${new Date().toISOString().split('T')[0]}.xlsx`;
    
    try {
      // Use the File System Access API to show a native save dialog
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [{
          description: 'Excel Spreadsheet',
          accept: {'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']},
        }],
      });
      
      // In a real app, this would generate the Excel content
      const dummyContent = new Uint8Array([80, 75, 3, 4]); // XLSX header bytes as dummy content
      
      // Write the file content
      const writable = await fileHandle.createWritable();
      await writable.write(dummyContent);
      await writable.close();
      
      alert('Analytics report Excel file saved successfully');
    } catch (err) {
      // User cancelled or error occurred
      console.error('Error saving Excel file:', err);
      if (err.name !== 'AbortError') {
        alert('Failed to save Excel file. Please try again.');
      }
    }
    
    setShowExportMenu(false);
  };

  // Close export menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target as Node)) {
        setShowExportMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics & AI Insights</h1>
        <div className="flex space-x-2">
          <div className="relative" ref={exportMenuRef}>
            <Button 
              variant="outline" 
              onClick={() => setShowExportMenu(!showExportMenu)}
            >
              <Download className="mr-2 h-4 w-4" />
              Export Data
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            {showExportMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="py-1">
                  <button
                    onClick={handleExportPDF}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4 text-gray-500" />
                    Export as PDF
                  </button>
                  <button
                    onClick={handleExportExcel}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FileSpreadsheet className="mr-2 h-4 w-4 text-gray-500" />
                    Export as Excel
                  </button>
                </div>
              </div>
            )}
          </div>
          <Button onClick={() => navigate('/admin/analytics')}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>
      
      {/* Time Range Selector Component */}
      <TimeRangeSelector 
        timeRange={timeRange} 
        onTimeRangeChange={handleTimeRangeChange} 
      />
      
      {/* Key Metrics Component */}
      <AnalyticsMetrics timeRange={timeRange} />
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsageChart data={filteredMonthlyData} />
        <ModuleCategoryChart data={mockModuleUsage} />
      </div>
      
      {/* AI Insights Component */}
      <AIInsightsList 
        insights={filteredInsights} 
        filter={insightFilter} 
        onFilterChange={setInsightFilter} 
      />
    </div>
  );
};

export default AnalyticsAI;