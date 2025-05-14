import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  FileText,
  Download,
  CreditCard,
  BarChart4,
  MailQuestion,
  Boxes,
  ChevronRight,
  ChevronDown,
  LogOut,
  icons,
} from 'lucide-react';
import { Label } from 'recharts';

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  children?: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  to, 
  icon, 
  label, 
  isActive, 
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Boolean(children);

  return (
    <div className="mb-1">
      {hasChildren ? (
        <>
          <button
            className={`flex items-center w-full px-4 py-3 text-left rounded-md transition-colors 
              ${isActive ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="mr-3">{icon}</span>
            <span className="flex-1">{label}</span>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {isOpen && <div className="ml-12 mt-2 space-y-1">{children}</div>}
        </>
      ) : (
        <Link
          to={to}
          className={`flex items-center px-4 py-3 rounded-md transition-colors 
            ${isActive ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          <span className="mr-3">{icon}</span>
          <span>{label}</span>
        </Link>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { auth, logout } = useAuth();
  
  const isSuperAdmin = auth.user?.role === 'super_admin';
  
  // Define navigation items based on user role
  const navItems = isSuperAdmin 
    ? [
        { path: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
        { path: '/admin/modules', label: 'Module Manager', icon: <Boxes size={18} /> },
        { path: '/admin/companies', label: 'Company Monitor', icon: <Package size={18} /> },
        { path: '/admin/users', label: 'User Manager', icon: <Users size={18} /> },
        { path: '/admin/requests', label: 'Request Center', icon: <MailQuestion size={18} /> },
        { path: '/admin/analytics', label: 'Analytics & AI', icon: <BarChart4 size={18} /> },
      ]
    : [
        { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
        { path: '/modules', label: 'Module Library', icon: <Package size={18} /> },
        { path: '/modules/assignments', label: 'Module Assignments', icon: <FileText size={18} /> },
        { path: '/team', label: 'Team Management', icon: <Users size={18} /> },
        { path: '/downloads', label: 'Download Logs', icon: <Download size={18} /> },
        { path: '/billing', label: 'Billing', icon: <CreditCard size={18} /> },
        { path: '/reports', label: 'Reports Center', icon: <BarChart4 size={18} /> },
        { path: '/support' ,label: 'Support', icon: <MailQuestion size={18}/>},
        { path: '/settings', label: 'Settings', icon: <Settings size={18} /> },
      ];

  return (
    <aside className="h-screen bg-white border-r border-gray-200 w-64 fixed left-0 top-0 z-10">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-900 rounded flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              {auth.company?.name || 'Business Module Hub'}
            </span>
          </Link>
        </div>
        
        <div className="px-2 py-4 flex-1 overflow-y-auto">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <SidebarItem
                key={item.path}
                to={item.path}
                icon={item.icon}
                label={item.label}
                isActive={location.pathname === item.path}
              />
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-semibold">
              {auth.user?.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {auth.user?.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {auth.user?.email}
              </p>
            </div>
          </div>
          
          <button
            onClick={logout}
            className="mt-4 flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;