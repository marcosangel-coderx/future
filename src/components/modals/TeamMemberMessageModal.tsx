import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../common/Button';

interface TeamMember {
  id: string;
  name: string;
  email: string;
}

interface TeamMemberMessageModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onSend: (member: TeamMember, message: string) => void;
}

const TeamMemberMessageModal: React.FC<TeamMemberMessageModalProps> = ({ 
  member, 
  isOpen, 
  onClose, 
  onSend 
}) => {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (member && message.trim()) {
      onSend(member, message);
      setMessage('');
      setSubject('');
    }
  };

  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Message {member.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
              <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md p-2">
                <span className="text-gray-700">{member.name}</span>
                <span className="text-gray-500 text-sm ml-2">({member.email})</span>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter message subject..."
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 h-32"
                placeholder="Type your message here..."
                required
              />
            </div>
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

export default TeamMemberMessageModal;