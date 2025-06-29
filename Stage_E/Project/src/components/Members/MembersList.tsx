import React, { useState } from 'react';
import { Plus, Crown } from 'lucide-react';
import { Member } from '../../types';
import DataTable from '../UI/DataTable';
import MemberForm from './MemberForm';
import ConfirmDialog from '../UI/ConfirmDialog';
import { useApi, useMutation } from '../../hooks/useApi';

export default function MembersList() {
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [deletingMember, setDeletingMember] = useState<Member | null>(null);

  const { data: members = [], loading, refetch } = useApi<Member[]>('/members');
  const { mutate, loading: mutating } = useMutation<Member>();

  const columns = [
    { key: 'personid' as keyof Member, label: 'Person ID', sortable: true },
    { key: 'firstname' as keyof Member, label: 'First Name', sortable: true },
    { key: 'lastname' as keyof Member, label: 'Last Name', sortable: true },
    { key: 'memberstartdate' as keyof Member, label: 'Start Date', sortable: true },
    { 
      key: 'membershiptype' as keyof Member, 
      label: 'Membership Type', 
      sortable: true,
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          value === 'Premium' ? 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-300' :
          value === 'Standard' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300' :
          value === 'Basic' ? 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-300' :
          value === 'Personalized' ? 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border border-emerald-300' :
          value === 'Extended' ? 'bg-gradient-to-r from-violet-100 to-violet-200 text-violet-800 border border-violet-300' :
          'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border border-orange-300'
        }`}>
          {value === 'Premium' && <Crown className="w-3 h-3 inline mr-1" />}
          {value}
        </span>
      )
    },
    { 
      key: 'isactive' as keyof Member, 
      label: 'Status', 
      sortable: true,
      render: (value: boolean) => (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          value ? 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border border-emerald-300' : 
                  'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300'
        }`}>
          {value ? 'Active' : 'Inactive'}
        </span>
      )
    },
  ];

  const handleEdit = (member: Member) => {
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDelete = (member: Member) => {
    setDeletingMember(member);
  };

  const confirmDelete = async () => {
    if (deletingMember) {
      const result = await mutate('delete', `/members/${deletingMember.personid}`);
      if (result) {
        refetch();
        setDeletingMember(null);
      }
    }
  };

  const handleSubmit = async (memberData: Partial<Member>) => {
    if (editingMember) {
      const result = await mutate('put', `/members/${editingMember.personid}`, memberData);
      if (result) {
        refetch();
        setShowForm(false);
        setEditingMember(null);
      }
    } else {
      const result = await mutate('post', '/members', memberData);
      if (result) {
        refetch();
        setShowForm(false);
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Premium Members
          </h3>
          <p className="text-slate-600 mt-1">Manage exclusive gym memberships and member privileges</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
        >
          <Plus className="w-5 h-5" />
          <span>Add Member</span>
        </button>
      </div>

      <DataTable
        data={members}
        columns={columns}
        searchKeys={['personid', 'firstname', 'lastname', 'membershiptype']}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
      />

      <MemberForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingMember(null);
        }}
        onSubmit={handleSubmit}
        member={editingMember}
        loading={mutating}
      />

      <ConfirmDialog
        isOpen={!!deletingMember}
        onClose={() => setDeletingMember(null)}
        onConfirm={confirmDelete}
        title="Delete Member"
        message={`Are you sure you want to delete member ${deletingMember?.firstname} ${deletingMember?.lastname}? This action cannot be undone.`}
        confirmText="Delete"
        type="danger"
      />
    </div>
  );
}
