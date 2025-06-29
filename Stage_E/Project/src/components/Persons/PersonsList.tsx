import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Person } from '../../types';
import DataTable from '../UI/DataTable';
import PersonForm from './PersonForm';
import ConfirmDialog from '../UI/ConfirmDialog';
import { useApi, useMutation } from '../../hooks/useApi';

export default function PersonsList() {
  const [showForm, setShowForm] = useState(false);
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);
  const [deletingPerson, setDeletingPerson] = useState<Person | null>(null);

  const { data: persons = [], loading, refetch } = useApi<Person[]>('/persons');
  const { mutate, loading: mutating } = useMutation<Person>();

  const columns = [
    { key: 'personid' as keyof Person, label: 'personid', sortable: true },
    { key: 'firstname' as keyof Person, label: 'firstname', sortable: true },
    { key: 'lastname' as keyof Person, label: 'lastname', sortable: true },
    { key: 'dateofbirth' as keyof Person, label: 'dateofbirth', sortable: true },
  ];

  const handleEdit = (person: Person) => {
    setEditingPerson(person);
    setShowForm(true);
  };

  const handleDelete = (person: Person) => {
    setDeletingPerson(person);
  };

  const confirmDelete = async () => {
    if (deletingPerson) {
      const result = await mutate('delete', `/persons/${deletingPerson.personid}`);
      if (result) {
        refetch();
        setDeletingPerson(null);
      }
    }
  };

  const handleSubmit = async (personData: Partial<Person>) => {
    if (editingPerson) {
      const result = await mutate('put', `/persons/${editingPerson.personid}`, personData);
      if (result) {
        refetch();
        setShowForm(false);
        setEditingPerson(null);
      }
    } else {
      const result = await mutate('post', '/persons', personData);
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
          <h3 className="text-lg font-semibold text-gray-900">Persons Management</h3>
          <p className="text-gray-600">Manage person records and their information</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Person</span>
        </button>
      </div>

      <DataTable
        data={persons}
        columns={columns}
        searchKeys={['personid', 'firstname', 'lastname']}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
      />

      <PersonForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingPerson(null);
        }}
        onSubmit={handleSubmit}
        person={editingPerson}
        loading={mutating}
      />

      <ConfirmDialog
        isOpen={!!deletingPerson}
        onClose={() => setDeletingPerson(null)}
        onConfirm={confirmDelete}
        title="Delete Person"
        message={`Are you sure you want to delete ${deletingPerson?.firstname} ${deletingPerson?.lastname}? This action cannot be undone.`}
        confirmText="Delete"
        type="danger"
      />
    </div>
  );
}