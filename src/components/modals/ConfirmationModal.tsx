import React from 'react';
import { AlertCircle } from 'lucide-react';
import Button from '../common/Button';

interface ConfirmationModalProps {
  title: string;
  message: string;
  isOpen: boolean;
  confirmLabel: string;
  confirmVariant?: 'primary' | 'danger';
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  message,
  isOpen,
  confirmLabel,
  confirmVariant = 'danger',
  onClose,
  onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center text-red-600 mb-4">
          <AlertCircle className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          <Button 
            variant="outline" 
            onClick={onClose}
            type="button"
          >
            Cancel
          </Button>
          <Button 
            variant={confirmVariant}
            onClick={onConfirm}
            type="button"
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;