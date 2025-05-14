import { useState, useCallback, useMemo } from 'react';
import { modules as mockModules } from '../../../data/mockData';
import { Module } from '../../../types';
import { ModuleFormData, FormErrors, initialFormState } from './types';

export const useModuleManager = () => {
  // State for modules data
  const [modules, setModules] = useState<Module[]>(mockModules);
  
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  // State for modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // State for selected module and form data
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ModuleFormData>(initialFormState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  
  // State for loading indicators
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Get unique categories from modules - memoized
  const categories = useMemo(() => {
    return ['all', ...new Set(modules.map(module => module.category))];
  }, [modules]);
  
  // Filter modules based on search and filters - memoized
  const filteredModules = useMemo(() => {
    return modules.filter(module => {
      const matchesSearch = 
        module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || module.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || module.status === statusFilter;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [modules, searchTerm, categoryFilter, statusFilter]);

  // Form validation function
  const validateForm = (data: ModuleFormData): FormErrors => {
    const errors: FormErrors = {};
    
    if (!data.title.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!data.description.trim()) {
      errors.description = 'Description is required';
    }
    
    if (!data.version.trim()) {
      errors.version = 'Version is required';
    } else if (!/^\d+\.\d+\.\d+$/.test(data.version)) {
      errors.version = 'Version must be in format x.y.z';
    }
    
    if (!data.size.trim()) {
      errors.size = 'Size is required';
    } else if (isNaN(parseFloat(data.size)) || parseFloat(data.size) < 0) {
      errors.size = 'Size must be a positive number';
    }
    
    // File validation only for new modules
    if (!data.id && !data.file) {
      errors.file = 'Module file is required';
    }
    
    return errors;
  };

  // Reset form state
  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setFormErrors({});
    setSelectedModuleId(null);
  }, []);

  // Handle form field changes
  const handleFormChange = useCallback((field: keyof ModuleFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field if it exists
    if (formErrors[field as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  }, [formErrors]);

  // Handle edit button click
  const handleEditClick = useCallback((moduleId: string) => {
    const moduleToEdit = modules.find(m => m.id === moduleId);
    if (moduleToEdit) {
      setFormData({
        id: moduleToEdit.id,
        title: moduleToEdit.title,
        description: moduleToEdit.description,
        category: moduleToEdit.category,
        version: moduleToEdit.version,
        size: moduleToEdit.size,
        requiredRole: moduleToEdit.requiredRole,
        status: moduleToEdit.status,
        file: null,
      });
      setSelectedModuleId(moduleId);
      setShowEditModal(true);
    }
  }, [modules]);

  // Handle delete button click
  const handleDeleteClick = useCallback((moduleId: string) => {
    setSelectedModuleId(moduleId);
    setShowDeleteConfirm(true);
  }, []);

  // Handle add module submission
  const handleAddModule = useCallback(async () => {
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Create a new module and add it to the modules array
      const newId = `${Date.now()}`; // More unique than sequential IDs
      const newModuleData: Module = {
        id: newId,
        title: formData.title,
        description: formData.description,
        category: formData.category,
        version: formData.version,
        releaseDate: new Date(),
        size: formData.size,
        downloadCount: 0,
        requiredRole: formData.requiredRole,
        status: formData.status,
        lastUpdated: new Date(),
      };
      
      setModules(prev => [...prev, newModuleData]);
      setShowAddModal(false);
      resetForm();
      
      // Show success notification (would implement with a toast library)
      console.log('Module added successfully');
    } catch (error) {
      console.error('Error adding module:', error);
      // Show error notification (would implement with a toast library)
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  // Handle update module
  const handleUpdateModule = useCallback(async () => {
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    if (!selectedModuleId) return;
    
    try {
      setIsSubmitting(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedModules = modules.map(module => {
        if (module.id === selectedModuleId) {
          return {
            ...module,
            title: formData.title,
            description: formData.description,
            category: formData.category,
            version: formData.version,
            size: formData.size,
            requiredRole: formData.requiredRole,
            status: formData.status,
            lastUpdated: new Date(),
          };
        }
        return module;
      });
      
      setModules(updatedModules);
      setShowEditModal(false);
      resetForm();
      
      // Show success notification (would implement with a toast library)
      console.log('Module updated successfully');
    } catch (error) {
      console.error('Error updating module:', error);
      // Show error notification (would implement with a toast library)
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, modules, resetForm, selectedModuleId]);

  // Handle delete module
  const handleDeleteModule = useCallback(async () => {
    if (!selectedModuleId) return;
    
    try {
      setIsDeleting(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setModules(prev => prev.filter(module => module.id !== selectedModuleId));
      setShowDeleteConfirm(false);
      setSelectedModuleId(null);
      
      // Show success notification (would implement with a toast library)
      console.log('Module deleted successfully');
    } catch (error) {
      console.error('Error deleting module:', error);
      // Show error notification (would implement with a toast library)
    } finally {
      setIsDeleting(false);
    }
  }, [selectedModuleId]);

  return {
    // State
    modules,
    filteredModules,
    categories,
    searchTerm,
    categoryFilter,
    statusFilter,
    showAddModal,
    showEditModal,
    showDeleteConfirm,
    selectedModuleId,
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
  };
};