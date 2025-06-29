import React, { useState, useEffect } from 'react';
import { Person } from '../../types';
import Modal from '../UI/Modal';

interface PersonFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (person: Partial<Person>) => void;
  person?: Person | null;
  loading?: boolean;
}

export default function PersonForm({ isOpen, onClose, onSubmit, person, loading = false }: PersonFormProps) {
  const [formData, setFormData] = useState<Partial<Person>>({
    personid: 0,
    firstname: '',
    lastname: '',
    dateofbirth: '',
  });

  useEffect(() => {
    if (person) {
      setFormData(person);
    } else {
      setFormData({
        personid: 0,
        firstname: '',
        lastname: '',
        dateofbirth: '',
      });
    }
  }, [person]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const changedFields: Partial<Person> = {};
    if (!person) {
      Object.assign(changedFields, formData);
    } else {
      Object.keys(formData).forEach((key) => {
        const field = key as keyof Person;
        if (formData[field] !== person[field]) {
          changedFields[field] = formData[field] as any;
        }
      });
    }

    onSubmit(changedFields);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'number' ? Number(value) : value 
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={person ? 'Edit Person' : 'Add New Person'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="personid" className="block text-sm font-medium text-gray-700 mb-1">
            personid
          </label>
          <input
            type="number"
            id="personid"
            name="personid"
            value={formData.personid || ''}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
              firstname
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
              lastname
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="dateofbirth" className="block text-sm font-medium text-gray-700 mb-1">
            dateofbirth
          </label>
          <input
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            value={formData.dateofbirth || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : person ? 'Update Person' : 'Add Person'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}