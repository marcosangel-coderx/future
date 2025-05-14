import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import CompanySearchFilters from '../../components/company/CompanySearchFilters';
import CompanyStats from '../../components/company/CompanyStats';
import CompaniesTable from '../../components/company/CompaniesTable';
import EditCompanyModal from '../../components/modals/EditCompanyModal';
import ConfirmationModal from '../../components/modals/ConfirmationModal';
import { Company } from '../../types/company';

// Mock data for companies
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    plan: 'enterprise',
    status: 'active',
    users: 125,
    modulesAssigned: 18,
    lastActive: '2023-06-15T10:30:00',
    subscriptionEnd: '2024-06-15T00:00:00',
  },
  {
    id: '2',
    name: 'Globex Industries',
    plan: 'professional',
    status: 'active',
    users: 47,
    modulesAssigned: 12,
    lastActive: '2023-06-14T16:45:00',
    subscriptionEnd: '2024-03-20T00:00:00',
  },
  {
    id: '3',
    name: 'Initech Solutions',
    plan: 'basic',
    status: 'inactive',
    users: 8,
    modulesAssigned: 5,
    lastActive: '2023-05-30T09:15:00',
    subscriptionEnd: '2023-08-30T00:00:00',
  },
  {
    id: '4',
    name: 'Umbrella Corp',
    plan: 'enterprise',
    status: 'active',
    users: 230,
    modulesAssigned: 24,
    lastActive: '2023-06-15T11:20:00',
    subscriptionEnd: '2024-12-15T00:00:00',
  },
  {
    id: '5',
    name: 'Stark Industries',
    plan: 'professional',
    status: 'active',
    users: 85,
    modulesAssigned: 15,
    lastActive: '2023-06-14T14:30:00',
    subscriptionEnd: '2024-05-10T00:00:00',
  },
  {
    id: '6',
    name: 'Wayne Enterprises',
    plan: 'enterprise',
    status: 'trial',
    users: 35,
    modulesAssigned: 20,
    lastActive: '2023-06-15T09:45:00',
    subscriptionEnd: '2023-07-15T00:00:00',
  },
];

const CompanyMonitor: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [planFilter, setPlanFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  // State for modals
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  
  // State for companies data
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);

  // Filter companies based on search and filters
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = planFilter === 'all' || company.plan === planFilter;
    const matchesStatus = statusFilter === 'all' || company.status === statusFilter;
    
    return matchesSearch && matchesPlan && matchesStatus;
  });

  // Calculate stats
  const activeCompanies = companies.filter(c => c.status === 'active').length;
  const inactiveCompanies = companies.filter(c => c.status === 'inactive').length;
  
  // Handle company actions
  const handleEditCompany = (company: Company) => {
    setSelectedCompany(company);
    setEditModalOpen(true);
  };
  
  const handleDeleteCompany = (company: Company) => {
    setSelectedCompany(company);
    setDeleteModalOpen(true);
  };
  
  const handleBlockCompany = (company: Company) => {
    setSelectedCompany(company);
    setBlockModalOpen(true);
  };
  
  // Save edited company
  const handleSaveCompany = (updatedCompany: Company) => {
    setCompanies(prevCompanies => 
      prevCompanies.map(company => 
        company.id === updatedCompany.id ? updatedCompany : company
      )
    );
    setEditModalOpen(false);
    // Here you would typically call an API to update the company
    console.log('Company updated:', updatedCompany);
  };
  
  // Confirm delete company
  const handleConfirmDelete = () => {
    if (selectedCompany) {
      setCompanies(prevCompanies => 
        prevCompanies.filter(company => company.id !== selectedCompany.id)
      );
      setDeleteModalOpen(false);
      // Here you would typically call an API to delete the company
      console.log('Company deleted:', selectedCompany);
    }
  };
  
  // Confirm block/unblock company
  const handleConfirmBlock = () => {
    if (selectedCompany) {
      setCompanies(prevCompanies => 
        prevCompanies.map(company => 
          company.id === selectedCompany.id 
            ? { ...company, isBlocked: !company.isBlocked, status: !company.isBlocked ? 'inactive' : 'active' } 
            : company
        )
      );
      setBlockModalOpen(false);
      // Here you would typically call an API to block/unblock the company
      console.log('Company block status changed:', selectedCompany);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Company Monitor</h1>
      </div>
      
      {/* Filters and Search */}
      <Card>
        <CompanySearchFilters
          searchTerm={searchTerm}
          planFilter={planFilter}
          statusFilter={statusFilter}
          onSearchChange={setSearchTerm}
          onPlanFilterChange={setPlanFilter}
          onStatusFilterChange={setStatusFilter}
        />
      </Card>
      
      {/* Companies Overview */}
      <CompanyStats
        totalCompanies={companies.length}
        activeCompanies={activeCompanies}
        trialCompanies={inactiveCompanies}
      />
      
      {/* Companies Table */}
      <Card>
        <CompaniesTable 
          companies={filteredCompanies} 
          onEdit={handleEditCompany}
          onDelete={handleDeleteCompany}
          onBlock={handleBlockCompany}
        />
      </Card>
      
      {/* Modals */}
      <EditCompanyModal 
        company={selectedCompany}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveCompany}
      />
      
      <ConfirmationModal
        title="Delete Company"
        message={`Are you sure you want to delete ${selectedCompany?.name}? This action cannot be undone.`}
        isOpen={deleteModalOpen}
        confirmLabel="Delete"
        confirmVariant="danger"
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      
      <ConfirmationModal
        title={selectedCompany?.isBlocked ? "Unblock Company" : "Block Company"}
        message={selectedCompany?.isBlocked 
          ? `Are you sure you want to unblock ${selectedCompany?.name}?` 
          : `Are you sure you want to block ${selectedCompany?.name}? This will prevent all users from accessing the system.`}
        isOpen={blockModalOpen}
        confirmLabel={selectedCompany?.isBlocked ? "Unblock" : "Block"}
        confirmVariant={selectedCompany?.isBlocked ? "primary" : "danger"}
        onClose={() => setBlockModalOpen(false)}
        onConfirm={handleConfirmBlock}
      />
    </div>
  );
};

export default CompanyMonitor;