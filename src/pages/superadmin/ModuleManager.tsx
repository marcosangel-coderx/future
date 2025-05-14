import React from 'react';
import { Plus } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import ModuleForm from '../../components/modules/ModuleForm';
import ConfirmationDialog from '../../components/modules/ConfirmationDialog';
import ModuleFilters from '../../components/modules/ModuleFilters';
import { useModuleManager } from './modules/useModuleManager';
import ModuleTable from './modules/ModuleTable';

const ModuleManager: React.FC = () => {
  const {
    // State
    filteredModules,
    categories,
    searchTerm,
    categoryFilter,
    statusFilter,
    showAddModal,
    showEditModal,
    showDeleteConfirm,
    formData,
    formErrors,
    isSubmitting,
    isDeleting,
    
    // Actions
    setSearchTerm,
    setCategoryFilter,
    setStatusFilter,
    setShowAddModal,
    setShowEditModal,
    setShowDeleteConfirm,
    handleFormChange,
    handleEditClick,
    handleDeleteClick,
    handleAddModule,
    handleUpdateModule,
    handleDeleteModule,
    resetForm
  } = useModuleManager();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Module Manager</h1>
        <Button onClick={() => {
          resetForm();
          setShowAddModal(true);
        }}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Module
        </Button>
      </div>
      
      {/* Filters and Search */}
      <Card>
        <ModuleFilters
          searchTerm={searchTerm}
          categoryFilter={categoryFilter}
          statusFilter={statusFilter}
          categories={categories}
          onSearchChange={setSearchTerm}
          onCategoryFilterChange={setCategoryFilter}
          onStatusFilterChange={setStatusFilter}
        />
      </Card>
      
      {/* Modules Table */}
      <Card>
        <ModuleTable 
          modules={filteredModules}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      </Card>
      
      {/* Add Module Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Add New Module</h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <ModuleForm
              formData={formData}
              formErrors={formErrors}
              isSubmitting={isSubmitting}
              onClose={() => setShowAddModal(false)}
              onChange={handleFormChange}
              onSubmit={handleAddModule}
            />
          </div>
        </div>
      )}
      
      {/* Edit Module Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Edit Module</h2>
              <button 
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <ModuleForm
              formData={formData}
              formErrors={formErrors}
              isEdit={true}
              isSubmitting={isSubmitting}
              onClose={() => setShowEditModal(false)}
              onChange={handleFormChange}
              onSubmit={handleUpdateModule}
            />
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <ConfirmationDialog
          title="Delete Module"
          message="Are you sure you want to delete this module? This action cannot be undone."
          confirmLabel="Delete"
          cancelLabel="Cancel"
          isLoading={isDeleting}
          onConfirm={handleDeleteModule}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </div>
  );
};

export default ModuleManager;