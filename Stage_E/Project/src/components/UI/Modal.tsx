import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-slate-900/50 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className={`inline-block align-bottom bg-white rounded-2xl px-6 pt-6 pb-6 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle ${sizeClasses[size]} sm:w-full border border-amber-200/50`}>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-100">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl leading-6 font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-amber-50 rounded-lg transition-colors duration-200 group"
            >
              <X className="w-5 h-5 text-slate-500 group-hover:text-slate-700" />
            </button>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}