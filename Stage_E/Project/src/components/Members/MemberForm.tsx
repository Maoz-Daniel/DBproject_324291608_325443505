import React, { useState, useEffect } from 'react';
import { Member } from '../../types';
import Modal from '../UI/Modal';

interface MemberFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (member: Partial<Member>) => void;
  member?: Member | null;
  loading?: boolean;
}

export default function MemberForm({ isOpen, onClose, onSubmit, member, loading = false }: MemberFormProps) {
  const [formData, setFormData] = useState<Partial<Member>>({
    personid: 0,
    firstname: '',
    lastname: '',
    dateofbirth: '',
    memberstartdate: '',
    membershiptype: 'Basic',
    isactive: true,
  });

  useEffect(() => {
    if (member) {
      setFormData(member);
    } else {
      setFormData({
        personid: 0,
        firstname: '',
        lastname: '',
        dateofbirth: '',
        memberstartdate: '',
        membershiptype: 'Basic',
        isactive: true,
      });
    }
  }, [member]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const changedFields: Partial<Member> = {};
    if (!member) {
      Object.assign(changedFields, formData);
    } else {
      Object.keys(formData).forEach((key) => {
        const field = key as keyof Member;
        if (formData[field] !== member[field]) {
          changedFields[field] = formData[field] as any;
        }
      });
    }

    onSubmit(changedFields);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? Number(value) : value 
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={member ? 'Edit Member' : 'Add New Member'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* ✔️ Person ID — רק במצב יצירה */}
        {!member && (
          <div>
            <label htmlFor="personid" className="block text-sm font-semibold text-slate-700 mb-2">
              Person ID
            </label>
            <input
              type="number"
              id="personid"
              name="personid"
              value={formData.personid || ''}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
            />
          </div>
        )}

        {/* ✔️ First Name */}
        <div>
          <label htmlFor="firstname" className="block text-sm font-semibold text-slate-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
          />
        </div>

        {/* ✔️ Last Name */}
        <div>
          <label htmlFor="lastname" className="block text-sm font-semibold text-slate-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
          />
        </div>

        {/* ✔️ Date of Birth */}
        <div>
          <label htmlFor="dateofbirth" className="block text-sm font-semibold text-slate-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            value={formData.dateofbirth || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
          />
        </div>

        {/* ✔️ Membership Start Date */}
        <div>
          <label htmlFor="memberstartdate" className="block text-sm font-semibold text-slate-700 mb-2">
            Membership Start Date
          </label>
          <input
            type="date"
            id="memberstartdate"
            name="memberstartdate"
            value={formData.memberstartdate || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
          />
        </div>

        {/* ✔️ Membership Type */}
        <div>
          <label htmlFor="membershiptype" className="block text-sm font-semibold text-slate-700 mb-2">
            Membership Type
          </label>
          <select
            id="membershiptype"
            name="membershiptype"
            value={formData.membershiptype || 'Basic'}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Personalized">Personalized</option>
            <option value="Premium">Premium</option>
            <option value="Extended">Extended</option>
            <option value="Visitor">Visitor</option>
          </select>
        </div>

        {/* ✔️ Active */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="isactive"
            name="isactive"
            checked={formData.isactive || false}
            onChange={handleChange}
            className="w-5 h-5 text-amber-600 border-amber-300 rounded focus:ring-amber-500"
          />
          <label htmlFor="isactive" className="text-sm font-semibold text-slate-700">
            Active Member
          </label>
        </div>

        {/* ✔️ Buttons */}
        <div className="flex space-x-4 pt-6">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {loading ? 'Saving...' : member ? 'Update Member' : 'Add Member'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border border-amber-200 rounded-xl text-slate-700 hover:bg-amber-50 transition-all duration-200 font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
