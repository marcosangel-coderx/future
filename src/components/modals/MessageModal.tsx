import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../common/Button';
import { Company } from '../../types/company';

interface MessageModalProps {
  company: Company | null;
  isOpen: boolean;
  onClose: () => void;
  onSend: (company: Company, message: string) => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ company, isOpen, onClose, onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (company) {
      onSend(company, message);
      setMessage('');
    }
  };

  if (!isOpen || !company) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Send Message to {company.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 h-32"
              required
              placeholder="Type your message here..."
            />
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose} type="button">Cancel</Button>
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageModal;