import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User, Company } from '../types';
import { superAdminUser, companyAdminUser, companies, simulateApiCall } from '../data/mockData';

const initialState: AuthState = {
  user: null,
  company: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

type AuthContextType = {
  auth: AuthState;
  login: (email: string, password: string, remember?: boolean) => Promise<void>;
  register: (name: string, email: string, password: string, companyName: string, role: string) => Promise<void>;
  logout: () => void;
  checkLocation: (latitude: number, longitude: number) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(initialState);

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('bmh_user');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser) as User;
          let company: Company | null = null;
          
          if (user.companyId) {
            company = companies.find(c => c.id === user.companyId) || null;
          }
          
          await simulateApiCall(null, 300); // Simulate API verification
          
          setAuth({
            user,
            company,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          localStorage.removeItem('bmh_user');
          setAuth({
            ...initialState,
            isLoading: false,
          });
        }
      } else {
        setAuth({
          ...initialState,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, remember = false) => {
    setAuth(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      await simulateApiCall(null, 800); // Simulate API call
      
      let user: User | null = null;
      let company: Company | null = null;
      
      // Check for super admin login
      if (email === superAdminUser.email && password === 'Admin123!') {
        user = superAdminUser;
      }
      // Check for company admin login
      else if (email === companyAdminUser.email && password === 'Company123!') {
        user = companyAdminUser;
        company = companies.find(c => c.id === user?.companyId) || null;
      }
      
      if (user) {
        setAuth({
          user,
          company,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
        
        if (remember) {
          localStorage.setItem('bmh_user', JSON.stringify(user));
        }
      } else {
        setAuth(prev => ({
          ...prev,
          isLoading: false,
          error: 'Invalid email or password',
        }));
      }
    } catch (error) {
      setAuth(prev => ({
        ...prev,
        isLoading: false,
        error: 'An error occurred during login',
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('bmh_user');
    setAuth({
      user: null,
      company: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const checkLocation = (latitude: number, longitude: number): boolean => {
    if (!auth.company) return true;
    
    return auth.company.locations.some(location => {
      const distance = calculateDistance(
        latitude, 
        longitude, 
        location.latitude, 
        location.longitude
      );
      return distance <= location.radius / 1000; // Convert meters to km
    });
  };

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (
    lat1: number, 
    lon1: number, 
    lat2: number, 
    lon2: number
  ): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI/180);
  };

  const register = async (name: string, email: string, password: string, companyName: string, role: string) => {
    setAuth(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      await simulateApiCall(null, 1000); // Simulate API call
      
      // In a real app, this would create a new user and company in the database
      // For now, we'll just simulate success
      
      // Check if email already exists
      if (email === superAdminUser.email || email === companyAdminUser.email) {
        setAuth(prev => ({
          ...prev,
          isLoading: false,
          error: 'Email already in use',
        }));
        return;
      }
      
      // Simulate successful registration
      setAuth(prev => ({
        ...prev,
        isLoading: false,
        error: null,
      }));
      
      // In a real app, we might auto-login the user or redirect to login
      // For now, we'll just return success and let the component handle it
    } catch (error) {
      setAuth(prev => ({
        ...prev,
        isLoading: false,
        error: 'An error occurred during registration',
      }));
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, register, logout, checkLocation }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};