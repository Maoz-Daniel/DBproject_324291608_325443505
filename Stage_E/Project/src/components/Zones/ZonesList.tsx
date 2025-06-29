import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Zone } from '../../types';
import DataTable from '../UI/DataTable';
import ZoneForm from './ZoneForm';
import ConfirmDialog from '../UI/ConfirmDialog';
import { useApi, useMutation } from '../../hooks/useApi';

export default function ZonesList() {
  const [showForm, setShowForm] = useState(false);
  const [editingZone, setEditingZone] = useState<Zone | null>(null);
  const [deletingZone, setDeletingZone] = useState<Zone | null>(null);

  const { data: zones = [], loading, refetch } = useApi<Zone[]>('/zones');
  const { mutate, loading: mutating } = useMutation<Zone>();

  const columns = [
    { key: 'zoneid' as keyof Zone, label: 'Zone ID', sortable: true },
    { key: 'gymid' as keyof Zone, label: 'Gym ID', sortable: true },
    { key: 'gymname' as keyof Zone, label: 'Gym Name', sortable: true },
    { key: 'city' as keyof Zone, label: 'City', sortable: true },
    { key: 'zonetype' as keyof Zone, label: 'Zone Type', sortable: true },
    {
      key: 'onlyformembers' as keyof Zone,
      label: 'Members Only',
      sortable: true,
      render: (value: boolean) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {value ? 'Yes' : 'No'}
        </span>
      )
    },
    {
      key: 'isaccessible' as keyof Zone,
      label: 'Accessible',
      sortable: true,
      render: (value: boolean) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value ? 'Yes' : 'No'}
        </span>
      )
    },
  ];

  const handleEdit = (zone: Zone) => {
    setEditingZone(zone);
    setShowForm(true);
  };

  const handleDelete = (zone: Zone) => {
    setDeletingZone(zone);
  };

  const confirmDelete = async () => {
    if (deletingZone) {
      const result = await mutate('delete', `/zones/${deletingZone.zoneid}/${deletingZone.gymid}`);
      if (result) {
        refetch();
        setDeletingZone(null);
      }
    }
  };

  const handleSubmit = async (zoneData: Partial<Zone>) => {
    if (editingZone) {
      const result = await mutate('put', `/zones/${editingZone.zoneid}/${editingZone.gymid}`, zoneData);
      if (result) {
        refetch();
        setShowForm(false);
        setEditingZone(null);
      }
    } else {
      const result = await mutate('post', '/zones', zoneData);
      if (result) {
        refetch();
        setShowForm(false);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Zones Management</h3>
          <p className="text-gray-600">Manage gym zones and their configuration</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Zone</span>
        </button>
      </div>

      <DataTable
        data={zones}
        columns={columns}
        searchKeys={['zoneid', 'gymid', 'gymname', 'city', 'zonetype']}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
      />

      <ZoneForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingZone(null);
        }}
        onSubmit={handleSubmit}
        zone={editingZone}
        loading={mutating}
      />

      <ConfirmDialog
        isOpen={!!deletingZone}
        onClose={() => setDeletingZone(null)}
        onConfirm={confirmDelete}
        title="Delete Zone"
        message={`Are you sure you want to delete zone ${deletingZone?.zoneid}? This action cannot be undone.`}
        confirmText="Delete"
        type="danger"
      />
    </div>
  );
}
