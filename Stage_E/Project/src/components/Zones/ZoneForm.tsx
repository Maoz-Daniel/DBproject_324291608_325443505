// src/components/Zones/ZoneForm.tsx
import React, { useEffect, useState } from 'react';
import Modal from '../UI/Modal';
import { Zone } from '../../types';
import { useApi } from '../../hooks/useApi';

interface ZoneFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (zone: Partial<Zone>) => void;
  zone?: Zone | null;
  loading?: boolean;
}

export default function ZoneForm({
  isOpen,
  onClose,
  onSubmit,
  zone,
  loading = false,
}: ZoneFormProps) {
  const [formData, setFormData] = useState<Partial<Zone>>({
    zoneid: 0,
    gymid: 0,
    zonetype: '',
    onlyformembers: false,
    isaccessible: true,
  });

  const { data: gyms, loading: gymsLoading, error: gymsError } = useApi<any[]>('/gyms');

  useEffect(() => {
    if (zone) {
      setFormData(zone);
    } else {
      setFormData({
        zoneid: 0,
        gymid: 0,
        zonetype: '',
        onlyformembers: false,
        isaccessible: true,
      });
    }
  }, [zone]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'number'
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderGymOptions = () => {
    if (gymsLoading) {
      return <option>Loading gyms...</option>;
    }

    if (gymsError) {
      return <option>Error loading gyms</option>;
    }

    if (!gyms || gyms.length === 0) {
      return <option value="" disabled>No gyms available</option>;
    }

    return (
      <>
        <option value="">Select Gym</option>
        {gyms.map((gym: any) => (
          <option key={gym.gymid} value={gym.gymid}>
            {gym.name} - {gym.gymlocation}
          </option>
        ))}
      </>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={zone ? 'Edit Zone' : 'Add New Zone'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Zone ID */}
        {!zone && (
          <div>
            <label htmlFor="zoneid" className="block mb-2 font-medium">
              Zone ID
            </label>
            <input
              type="number"
              id="zoneid"
              name="zoneid"
              value={formData.zoneid}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}

        {/* Gym Selector */}
        <div>
          <label htmlFor="gymid" className="block mb-2 font-medium">
            Gym
          </label>
          <select
            id="gymid"
            name="gymid"
            value={formData.gymid || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          >
            {renderGymOptions()}
          </select>
        </div>

        {/* Zone Type */}
        <div>
          <label htmlFor="zonetype" className="block mb-2 font-medium">
            Zone Type
          </label>
          <input
            type="text"
            id="zonetype"
            name="zonetype"
            value={formData.zonetype}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="onlyformembers"
            name="onlyformembers"
            checked={formData.onlyformembers}
            onChange={handleChange}
          />
          <label htmlFor="onlyformembers">Members Only</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="isaccessible"
            name="isaccessible"
            checked={formData.isaccessible}
            onChange={handleChange}
          />
          <label htmlFor="isaccessible">Accessible</label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 disabled:opacity-60"
          >
            {loading ? 'Saving...' : zone ? 'Update Zone' : 'Add Zone'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}