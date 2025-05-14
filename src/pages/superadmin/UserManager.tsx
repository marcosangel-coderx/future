import React, { useState, useCallback, useEffect } from 'react';
import { Company, mockCompanies } from '../../types/company';
import EditCompanyModal from '../../components/modals/EditCompanyModal';
import MessageModal from '../../components/modals/MessageModal';
import ConfirmationModal from '../../components/modals/ConfirmationModal';
import CompanyStatistics from '../../components/company/CompanyStatistics';
import CompanyTable from '../../components/company/CompanyTable';
import CompanyFilters from '../../components/company/CompanyFilters';
import { useLocation } from 'react-router-dom';

const UserManager: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);
  
  // Check if we have a search term from navigation state (from CompanyMonitor)
  useEffect(() => {
    if (location.state && location.state.searchTerm) {
      setSearchTerm(location.state.searchTerm);
      // Clear the location state to prevent persisting the search term
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  
  // Modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showBlockConfirm, setShowBlockConfirm] = useState(false);
  const [showApproveConfirm, setShowApproveConfirm] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  // Filter companies based on search and filters
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = 
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || company.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Handle approving a company registration
  const handleApproveClick = useCallback((company: Company) => {
    setSelectedCompany(company);
    setShowApproveConfirm(true);
  }, []);

  const handleApproveConfirm = useCallback(() => {
    if (selectedCompany) {
      setCompanies(prev => 
        prev.map(company => 
          company.id === selectedCompany.id ? { ...company, status: 'active' } : company
        )
      );
      setShowApproveConfirm(false);
      setSelectedCompany(null);
      // In a real application, you would send an API request here
    }
  }, [selectedCompany]);

  // Handle editing a company
  const handleEditClick = useCallback((company: Company) => {
    setSelectedCompany(company);
    setShowEditModal(true);
  }, []);

  const handleEditSave = useCallback((updatedCompany: Company) => {
    setCompanies(prev => 
      prev.map(company => 
        company.id === updatedCompany.id ? updatedCompany : company
      )
    );
    setShowEditModal(false);
    setSelectedCompany(null);
    // In a real application, you would send an API request here
  }, []);

  // Handle deleting a company
  const handleDeleteClick = useCallback((company: Company) => {
    setSelectedCompany(company);
    setShowDeleteConfirm(true);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (selectedCompany) {
      setCompanies(prev => prev.filter(company => company.id !== selectedCompany.id));
      setShowDeleteConfirm(false);
      setSelectedCompany(null);
      // In a real application, you would send an API request here
    }
  }, [selectedCompany]);

  // Handle messaging a company
  const handleMessageClick = useCallback((company: Company) => {
    setSelectedCompany(company);
    setShowMessageModal(true);
  }, []);

  const handleSendMessage = useCallback((company: Company, message: string) => {
    // In a real application, you would send an API request here
    alert(`Message sent to ${company.name}: ${message}`);
    setShowMessageModal(false);
    setSelectedCompany(null);
  }, []);

  // Handle blocking/unblocking a company
  const handleBlockClick = useCallback((company: Company) => {
    setSelectedCompany(company);
    setShowBlockConfirm(true);
  }, []);

  const handleBlockConfirm = useCallback(() => {
    if (selectedCompany) {
      setCompanies(prev => 
        prev.map(company => 
          company.id === selectedCompany.id ? { ...company, isBlocked: !company.isBlocked } : company
        )
      );
      setShowBlockConfirm(false);
      setSelectedCompany(null);
      // In a real application, you would send an API request here
    }
  }, [selectedCompany]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Company Manager</h1>
      </div>
      
      {/* Filters and Search */}
      <CompanyFilters 
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        onSearchChange={setSearchTerm}
        onStatusFilterChange={setStatusFilter}
      />
      
      {/* Company Statistics */}
      <CompanyStatistics companies={companies} />
      
      {/* Companies Table */}
      <CompanyTable 
        companies={filteredCompanies}
        onApprove={handleApproveClick}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
        onMessage={handleMessageClick}
        onBlock={handleBlockClick}
      />
      
      {/* Modals */}
      <EditCompanyModal 
        company={selectedCompany}
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleEditSave}
      />
      
      <MessageModal 
        company={selectedCompany}
        isOpen={showMessageModal}
        onClose={() => setShowMessageModal(false)}
        onSend={handleSendMessage}
      />
      
      <ConfirmationModal 
        title="Delete Company"
        message={`Are you sure you want to delete ${selectedCompany?.name}? This action cannot be undone.`}
        isOpen={showDeleteConfirm}
        confirmLabel="Delete"
        confirmVariant="danger"
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeleteConfirm}
      />
      
      <ConfirmationModal 
        title={selectedCompany?.isBlocked ? "Unblock Company" : "Block Company"}
        message={selectedCompany?.isBlocked 
          ? `Are you sure you want to unblock ${selectedCompany?.name}?` 
          : `Are you sure you want to block ${selectedCompany?.name}? This will prevent them from accessing the system.`}
        isOpen={showBlockConfirm}
        confirmLabel={selectedCompany?.isBlocked ? "Unblock" : "Block"}
        confirmVariant={selectedCompany?.isBlocked ? "primary" : "danger"}
        onClose={() => setShowBlockConfirm(false)}
        onConfirm={handleBlockConfirm}
      />
      
      <ConfirmationModal 
        title="Approve Company"
        message={`Are you sure you want to approve ${selectedCompany?.name}?`}
        isOpen={showApproveConfirm}
        confirmLabel="Approve"
        confirmVariant="primary"
        onClose={() => setShowApproveConfirm(false)}
        onConfirm={handleApproveConfirm}
      />
    </div>
  );
};

export default UserManager;