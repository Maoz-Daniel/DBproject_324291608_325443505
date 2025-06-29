import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Search, Edit, Trash2, Sparkles } from 'lucide-react';

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchKeys: (keyof T)[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  loading?: boolean;
}

export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchKeys,
  onEdit,
  onDelete,
  loading = false,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = useMemo(() => {
    const safeData = data || [];
    if (!searchTerm) return safeData;
    
    return safeData.filter((item) =>
      searchKeys.some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm, searchKeys]);

  const sortedData = useMemo(() => {
    const safeFilteredData = filteredData || [];
    if (!sortColumn) return safeFilteredData;

    return [...safeFilteredData].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const safeSortedData = sortedData || [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    return safeSortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil((sortedData || []).length / itemsPerPage);

  const handleSort = (column: keyof T) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-amber-200/50 backdrop-blur-sm">
        <div className="p-12 text-center">
          <div className="relative">
            <div className="animate-spin w-12 h-12 border-4 border-amber-200 border-t-amber-600 rounded-full mx-auto"></div>
            <Sparkles className="w-6 h-6 text-amber-500 absolute top-3 left-1/2 transform -translate-x-1/2 animate-pulse" />
          </div>
          <p className="text-slate-600 mt-4 font-medium">Loading premium data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-amber-200/50 backdrop-blur-sm overflow-hidden">
      <div className="p-6 border-b border-amber-100 bg-gradient-to-r from-amber-50/50 to-transparent">
        <div className="relative">
          <Search className="w-5 h-5 text-amber-600 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-4 py-3 w-full border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-slate-50 to-amber-50/30">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:bg-amber-50/50 transition-colors duration-200' : ''
                  }`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-2">
                    <span>{column.label}</span>
                    {column.sortable && sortColumn === column.key && (
                      <div className="text-amber-600">
                        {sortDirection === 'asc' ? 
                          <ChevronUp className="w-4 h-4" /> : 
                          <ChevronDown className="w-4 h-4" />
                        }
                      </div>
                    )}
                  </div>
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-amber-100/50">
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-gradient-to-r hover:from-amber-50/30 hover:to-transparent transition-all duration-200 group">
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 font-medium">
                    {column.render ? column.render(row[column.key], row) : String(row[column.key])}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 hover:scale-110"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-110"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-amber-100 bg-gradient-to-r from-amber-50/30 to-transparent flex items-center justify-between">
          <div className="text-sm text-slate-600 font-medium">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, (sortedData || []).length)} of {(sortedData || []).length} results
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-amber-200 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-50 transition-colors duration-200 font-medium"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-amber-200 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-50 transition-colors duration-200 font-medium"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}