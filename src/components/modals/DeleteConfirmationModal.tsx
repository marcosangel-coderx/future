import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import Button from '../common/Button';

interface TeamMember {
  id: string;
  name: string;
  email: string;
}

interface DeleteConfirmationModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (member: TeamMember) => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ 
  member, 
  isOpen, 
  onClose, 
  onConfirm 
}) => {
  if (!isOpen || !member) return null;

  const handleConfirm = () => {
    onConfirm(member);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-red-600 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Delete Team Member
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="py-4">
          <p className="text-gray-700 mb-2">Are you sure you want to remove <span className="font-semibold">{member.name}</span> from the team?</p>
          <p className="text-gray-500 text-sm">This action cannot be undone. The user will lose access to all assigned modules and company resources.</p>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose} type="button">Cancel</Button>
          <Button variant="danger" onClick={handleConfirm}>Delete Member</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;