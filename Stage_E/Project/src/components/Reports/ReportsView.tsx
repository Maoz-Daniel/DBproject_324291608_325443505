import React, { useState } from 'react';
import {
  Play,
  Download,
  Calendar,
  Database,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { useApi, useMutation } from '../../hooks/useApi';

/* ---------- types ---------- */
interface ReportResult {
  data: any[];
  executedAt: string;
}

interface ReportCardProps {
  title: string;
  description: string;
  endpoint: string;
  icon: React.ComponentType<any>;
  color: string;
  method?: 'get' | 'post';
  inputs?: Array<{
    name: string;
    label: string;
    type: 'text' | 'number' | 'date';
    placeholder?: string;
    required?: boolean;
  }>;
  onExecute: (ep: string, params?: any, method?: 'get' | 'post') => void;
  loading?: boolean;
}

/* ---------- small card ---------- */
function ReportCard({
  title,
  description,
  endpoint,
  icon: Icon,
  color,
  inputs = [],
  method = 'get',
  onExecute,
  loading,
}: ReportCardProps) {
  const [params, setParams] = useState<Record<string, any>>({});

  const handleExecute = () => {
    onExecute(endpoint, Object.keys(params).length ? params : undefined, method);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start space-x-3 mb-4">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
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
                value={params[input.name] ?? ''}
                onChange={(e) =>
                  setParams((prev) => ({
                    ...prev,
                    [input.name]:
                      input.type === 'number' ? Number(e.target.value) : e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleExecute}
        disabled={loading}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
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

/* ---------- main view ---------- */
export default function ReportsView() {
  /* show רק דוח אחד */
  const [lastResult, setLastResult] = useState<ReportResult | null>(null);
  const [lastReportName, setLastReportName] = useState<string | null>(null);
  const [activeReport, setActiveReport] = useState<string | null>(null);
  const { mutate, loading } = useMutation();

  /* ---------- run report ---------- */
  const executeReport = async (
    endpoint: string,
    params?: any,
    method: 'get' | 'post' = 'get'
  ) => {
    endpoint = endpoint.replace(/\/+$/, '');
    setActiveReport(endpoint);

    try {
      let result: any;

      if (method === 'get') {
        let url = endpoint;
        if (params) {
          const qs = new URLSearchParams();
          Object.entries(params).forEach(
            ([k, v]) => v !== '' && v !== undefined && qs.append(k, String(v))
          );
          if (qs.toString()) url += `?${qs.toString()}`;
        }
        result = await mutate('get', url);
      } else {
        result = await mutate('post', endpoint, params);
      }

      if (result) {
        setLastReportName(endpoint);
        setLastResult({
          data: Array.isArray(result) ? result : [result],
          executedAt: new Date().toLocaleString(),
        });
      }
    } catch (err) {
      console.error('Report execution failed:', err);
    } finally {
      setActiveReport(null);
    }
  };

  /* ---------- table renderer ---------- */
  const renderResults = (r: ReportResult) => {
    if (!r.data?.length) {
      return <div className="text-center py-8 text-gray-500">No data returned</div>;
    }

    const first = r.data[0];
    const isArrayOfArrays = Array.isArray(first);
    const rows = r.data;

    const columns = isArrayOfArrays
      ? (first as any[]).map((_, i) => `Column ${i + 1}`)
      : Object.keys(first);

    return (
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Results</h4>
            <p className="text-sm text-gray-600">Executed at {r.executedAt}</p>
          </div>
          <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center space-x-1">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>

        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-gray-50">
                {columns.map((col, j) => (
                  <td
                    key={col + j}
                    className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200"
                  >
                    {String(isArrayOfArrays ? row[j] : row[col] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  /* ---------- static cards ---------- */
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
      method: 'post' as const,
      icon: Users,
      color: 'bg-red-500',
      inputs: [{ name: 'months', label: 'Inactive Months', type: 'number', required: true }],
    },
    {
      title: 'Update Job Cost',
      description: 'Update job costs based on service type',
      endpoint: '/reports/update-job-cost',
      method: 'post' as const,
      icon: Database,
      color: 'bg-purple-500',
      inputs: [
        { name: 'serviceType', label: 'Service Type', type: 'text', required: true },
        { name: 'baseCost', label: 'Base Cost', type: 'number', required: true },
      ],
    },
  ];

  const queries = [
    {
      title: 'Gym Entry Summary',
      description: 'Total entries per gym, city ,zone-count (only gyms with > 3 zones)',
      endpoint: '/reports/gym-entry-summary',
      icon: MapPin,
      color: 'bg-blue-500',
    },
    {
      title: 'Monthly Entry Summary',
      description: '2025 month-by-month entry totals for every gym (ID, name, city, month, count)',
      endpoint: '/reports/monthly-entry-summary',
      icon: Calendar,
      color: 'bg-indigo-500',
    },
    {
      title: 'Entry/Exit Busy Zones',
      description: 'Entry & exit records only from zones with > 80 entries – includes zone, member, times.',
      endpoint: '/reports/entry-exit-busy-zones',
      icon: TrendingUp,
      color: 'bg-yellow-500',
    },
    {
      title: 'Devices Below Average Exits',
      description: 'Device types whose exit count is below the overall average – shows type & exit total.',
      endpoint: '/reports/devices-below-avg-exits',
      icon: AlertTriangle,
      color: 'bg-orange-500',
    },
    {
      title: 'Inaccessible Zones',
      description: 'Gyms with ≥ 2 inaccessible zones and ≥ 3 total entries; returns gym ID, name, city',
      endpoint: '/reports/inaccessible-zones',
      icon: MapPin,
      color: 'bg-red-500',
    },
    {
      title: 'Gyms Over 5 Repairs',
      description: 'Gyms that logged more than five repairs – lists name, city, repair count.',
      endpoint: '/reports/gyms-over-5-repairs',
      icon: AlertTriangle,
      color: 'bg-red-600',
    },
    {
      title: 'Inactive Members',
      description: "Active members with no entries since 3 Jan 2025 – shows name, DOB, membership",
      endpoint: '/reports/inactive-members',
      icon: Users,
      color: 'bg-gray-500',
    },
  ];

  /* ---------- jsx ---------- */
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Reports &amp; Analytics</h3>
          <p className="text-gray-600">Execute stored procedures, functions and queries</p>
        </div>
      </div>

      {/* --- functions --- */}
      <Section title="Functions" icon={Database} iconClr="text-blue-600">
        {functions.map((card) => (
          <ReportCard
            key={card.endpoint}
            {...card}
            onExecute={executeReport}
            loading={loading && activeReport === card.endpoint}
          />
        ))}
      </Section>

      {/* --- procedures --- */}
      <Section title="Stored Procedures" icon={TrendingUp} iconClr="text-purple-600">
        {procedures.map((card) => (
          <ReportCard
            key={card.endpoint}
            {...card}
            onExecute={executeReport}
            loading={loading && activeReport === card.endpoint}
          />
        ))}
      </Section>

      {/* --- queries --- */}
      <Section title="Reports & Queries" icon={MapPin} iconClr="text-green-600">
        {queries.map((card) => (
          <ReportCard
            key={card.endpoint}
            {...card}
            onExecute={executeReport}
            loading={loading && activeReport === card.endpoint}
          />
        ))}
      </Section>

      {/* --- last result --- */}
      {lastResult && lastReportName && (
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900">Report Results</h4>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h5 className="text-md font-semibold text-gray-900 mb-4">
              {lastReportName.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </h5>
            {renderResults(lastResult)}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- helper section wrapper ---------- */
function Section({
  title,
  icon: Icon,
  iconClr,
  children,
}: {
  title: string;
  icon: React.ComponentType<any>;
  iconClr: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <Icon className={`w-5 h-5 ${iconClr}`} />
        <span>{title}</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
    </div>
  );
}
