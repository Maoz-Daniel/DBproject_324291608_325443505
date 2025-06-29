import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Modal from './Modal';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
}

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'danger',
}: ConfirmDialogProps) {
  const typeStyles = {
    danger: {
      icon: 'text-red-600',
      button: 'bg-red-600 hover:bg-red-700 text-white',
    },
    warning: {
      icon: 'text-yellow-600',
      button: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    },
    info: {
      icon: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className={`w-6 h-6 ${typeStyles[type].icon}`} />
          <p className="text-gray-700">{message}</p>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${typeStyles[type].button}`}
          >
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </Modal>
  );
}