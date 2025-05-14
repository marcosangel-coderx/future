export interface Company {
  id: string;
  name: string;
  email: string;
  contactPerson: string;
  registrationDate: string;
  status: 'active' | 'inactive' | 'pending';
  usersCount: number;
  lastActive: string | null;
  isBlocked: boolean;
}

// Mock data for company registrations
export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    email: 'admin@acmecorp.com',
    contactPerson: 'John Smith',
    registrationDate: '2023-06-15T10:30:00',
    status: 'active',
    usersCount: 8,
    lastActive: '2023-06-15T10:30:00',
    isBlocked: false,
  },
  {
    id: '2',
    name: 'Globex Industries',
    email: 'info@globex.com',
    contactPerson: 'Sarah Johnson',
    registrationDate: '2023-06-14T16:45:00',
    status: 'active',
    usersCount: 5,
    lastActive: '2023-06-14T16:45:00',
    isBlocked: false,
  },
  {
    id: '3',
    name: 'Initech Solutions',
    email: 'admin@initech.com',
    contactPerson: 'Michael Chen',
    registrationDate: '2023-05-30T09:15:00',
    status: 'inactive',
    usersCount: 0,
    lastActive: '2023-05-30T09:15:00',
    isBlocked: true,
  },
  {
    id: '4',
    name: 'Umbrella Corp',
    email: 'contact@umbrella.org',
    contactPerson: 'Emily Rodriguez',
    registrationDate: '2023-06-15T11:20:00',
    status: 'active',
    usersCount: 12,
    lastActive: '2023-06-15T11:20:00',
    isBlocked: false,
  },
  {
    id: '5',
    name: 'Stark Industries',
    email: 'info@stark.com',
    contactPerson: 'David Wilson',
    registrationDate: '2023-06-14T14:30:00',
    status: 'active',
    usersCount: 3,
    lastActive: '2023-06-14T14:30:00',
    isBlocked: false,
  },
  {
    id: '6',
    name: 'Wayne Enterprises',
    email: 'info@wayne.com',
    contactPerson: 'Jessica Lee',
    registrationDate: '2023-06-10T09:15:00',
    status: 'pending',
    usersCount: 0,
    lastActive: null,
    isBlocked: false,
  },
];