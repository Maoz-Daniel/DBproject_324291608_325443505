import React, { useState } from 'react';
import { Play, Download, Calendar, Database, TrendingUp, Users, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { useApi, useMutation } from '../../hooks/useApi';

interface ReportResult {
  data: any[];
  message?: string;
  executedAt: string;
}

interface ReportCardProps {
  title: string;
  description: string;
  endpoint: string;
  icon: React.ComponentType<any>;
  color: string;
  inputs?: Array<{
    name: string;
    label: string;
    type: 'text' | 'number' | 'date';
    placeholder?: string;
    required?: boolean;
  }>;
  onExecute: (endpoint: string, params?: any) => void;
  loading?: boolean;
}

function ReportCard({ title, description, endpoint, icon: Icon, color, inputs = [], onExecute, loading }: ReportCardProps) {
  const [params, setParams] = useState<Record<string, any>>({});

  const handleExecute = () => {
    onExecute(endpoint, Object.keys(params).length > 0 ? params : undefined);
  };

  const handleInputChange = (name: string, value: any) => {
    setParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>

      {inputs.length > 0 && (
        <div className="space-y-3 mb-4">
          {inputs.map((input) => (
            <div key={input.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {input.label}
              </label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                required={input.required}
                value={params[input.name] || ''}
                onChange={(e) => handleInputChange(input.name, input.type === 'number' ? Number(e.target.value) : e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleExecute}
        disabled={loading}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {loading ? (
          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
        ) : (
          <Play className="w-4 h-4" />
        )}
        <span>{loading ? 'Executing...' : 'Execute'}</span>
      </button>
    </div>
  );
}

export default function ReportsView() {
  const [results, setResults] = useState<Record<string, ReportResult>>({});
  const [activeReport, setActiveReport] = useState<string | null>(null);
  const { mutate, loading } = useMutation();

  const executeReport = async (endpoint: string, params?: any) => {
    setActiveReport(endpoint);
    
    try {
      let url = endpoint;
      if (params) {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== '') {
            queryParams.append(key, String(value));
          }
        });
        if (queryParams.toString()) {
          url += `?${queryParams.toString()}`;
        }
      }

      const result = await mutate('get', url);
      if (result) {
        setResults(prev => ({
          ...prev,
          [endpoint]: {
            data: Array.isArray(result) ? result : [result],
            executedAt: new Date().toLocaleString(),
          }
        }));
      }
    } catch (error) {
      console.error('Report execution failed:', error);
    } finally {
      setActiveReport(null);
    }
  };

  const functions = [
    {
      title: 'Long Visits Detection',
      description: 'Identify members with unusually long gym visits',
      endpoint: '/reports/long-visits',
      icon: Clock,
      color: 'bg-orange-500',
    },
    {
      title: 'Employee Salary Summary',
      description: 'Generate salary summaries for gym employees',
      endpoint: '/reports/salary-summary',
      icon: Users,
      color: 'bg-green-500',
    },
  ];

  const procedures = [
    {
      title: 'Deactivate Old Members',
      description: 'Deactivate members inactive for specified months',
      endpoint: '/reports/deactivate-old-members',
      icon: Users,
      color: 'bg-red-500',
      inputs: [
        {
          name: 'months',
          label: 'Inactive Months',
          type: 'number' as const,
          placeholder: 'Enter number of months',
          required: true,
        },
      ],
    },
    {
      title: 'Update Job Cost',
      description: 'Update job costs based on service type',
      endpoint: '/reports/update-job-cost',
      icon: Database,
      color: 'bg-purple-500',
      inputs: [
        {
          name: 'serviceType',
          label: 'Service Type',
          type: 'text' as const,
          placeholder: 'Enter service type',
          required: true,
        },
        {
          name: 'baseCost',
          label: 'Base Cost',
          type: 'number' as const,
          placeholder: 'Enter base cost',
          required: true,
        },
      ],
    },
  ];

  const queries = [
    {
      title: 'Gym Entry Summary',
      description: 'Entry counts per gym and zone',
      endpoint: '/reports/gym-entry-summary',
      icon: MapPin,
      color: 'bg-blue-500',
    },
    {
      title: 'Monthly Entry Summary',
      description: 'Monthly entry statistics and trends',
      endpoint: '/reports/monthly-entry-summary',
      icon: Calendar,
      color: 'bg-indigo-500',
    },
    {
      title: 'Entry/Exit Busy Zones',
      description: 'Identify the busiest zones by traffic',
      endpoint: '/reports/entry-exit-busy-zones',
      icon: TrendingUp,
      color: 'bg-yellow-500',
    },
    {
      title: 'Devices Below Average Exits',
      description: 'Find devices with unusually low exit counts',
      endpoint: '/reports/devices-below-avg-exits',
      icon: AlertTriangle,
      color: 'bg-orange-500',
    },
    {
      title: 'Inaccessible Zones',
      description: 'Identify zones with accessibility issues',
      endpoint: '/reports/inaccessible-zones',
      icon: MapPin,
      color: 'bg-red-500',
    },
    {
      title: 'Gyms Over 5 Repairs',
      description: 'Gyms with high maintenance frequency',
      endpoint: '/reports/gyms-over-5-repairs',
      icon: AlertTriangle,
      color: 'bg-red-600',
    },
    {
      title: 'Inactive Members',
      description: 'Active members who haven\'t visited recently',
      endpoint: '/reports/inactive-members',
      icon: Users,
      color: 'bg-gray-500',
    },
  ];

  const renderResults = (endpoint: string, result: ReportResult) => {
    if (!result.data || result.data.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          No data returned from this report
        </div>
      );
    }

    const columns = Object.keys(result.data[0]);

    return (
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Results</h4>
            <p className="text-sm text-gray-600">Executed at {result.executedAt}</p>
          </div>
          <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors flex items-center space-x-1">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  {column.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {result.data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column} className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                    {String(row[column] || '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Reports & Analytics</h3>
          <p className="text-gray-600">Execute stored procedures, functions, and queries</p>
        </div>
      </div>

      {/* Functions Section */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Database className="w-5 h-5 text-blue-600" />
          <span>Functions</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {functions.map((func) => (
            <ReportCard
              key={func.endpoint}
              {...func}
              onExecute={executeReport}
              loading={loading && activeReport === func.endpoint}
            />
          ))}
        </div>
      </div>

      {/* Procedures Section */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <span>Stored Procedures</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {procedures.map((proc) => (
            <ReportCard
              key={proc.endpoint}
              {...proc}
              onExecute={executeReport}
              loading={loading && activeReport === proc.endpoint}
            />
          ))}
        </div>
      </div>

      {/* Queries Section */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-green-600" />
          <span>Reports & Queries</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queries.map((query) => (
            <ReportCard
              key={query.endpoint}
              {...query}
              onExecute={executeReport}
              loading={loading && activeReport === query.endpoint}
            />
          ))}
        </div>
      </div>

      {/* Results Section */}
      {Object.keys(results).length > 0 && (
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900">Report Results</h4>
          {Object.entries(results).map(([endpoint, result]) => (
            <div key={endpoint} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h5 className="text-md font-semibold text-gray-900 mb-4">
                {endpoint.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h5>
              {renderResults(endpoint, result)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}