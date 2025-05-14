import React, { useState } from 'react';
import { Shield, Lock, Eye, EyeOff, Key, Smartphone, Globe, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';

const Security: React.FC = () => {
  const { auth } = useAuth();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [ipRestrictionEnabled, setIpRestrictionEnabled] = useState(false);
  const [dataEncryptionEnabled, setDataEncryptionEnabled] = useState(true);
  const [passwordExpiryDays, setPasswordExpiryDays] = useState(90);
  
  // Mock audit log data
  const auditLogs = [
    { id: 1, user: 'John Developer', action: 'Login', ip: '192.168.1.45', timestamp: '2023-06-15 09:32:15', status: 'success' },
    { id: 2, user: 'Company Admin', action: 'Module Download', ip: '192.168.1.22', timestamp: '2023-06-15 10:15:33', status: 'success' },
    { id: 3, user: 'Sarah Viewer', action: 'Password Change', ip: '192.168.1.87', timestamp: '2023-06-14 16:45:21', status: 'success' },
    { id: 4, user: 'Unknown', action: 'Login Attempt', ip: '203.45.78.32', timestamp: '2023-06-14 02:12:05', status: 'failed' },
    { id: 5, user: 'Mike Developer', action: 'Role Change', ip: '192.168.1.65', timestamp: '2023-06-13 14:22:18', status: 'success' },
  ];
  
  // Mock allowed IP addresses
  const allowedIPs = [
    { id: 1, ip: '192.168.1.0/24', description: 'Office Network', addedBy: 'Company Admin', addedOn: '2023-05-10' },
    { id: 2, ip: '10.0.0.5', description: 'CEO Home Office', addedBy: 'Company Admin', addedOn: '2023-05-12' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>
        <Button variant="outline" className="flex items-center">
          <Shield size={16} className="mr-2" /> Security Audit
        </Button>
      </div>
      
      {/* Access Control */}
      <Card title="Access Control" subtitle="Manage authentication and authorization settings">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Key size={24} className="text-blue-900" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">
                  Require a second form of authentication when users log in
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className={`${twoFactorEnabled ? 'bg-blue-900' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900`}
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              >
                <span className="sr-only">Enable two-factor authentication</span>
                <span
                  className={`${twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Globe size={24} className="text-blue-900" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">IP Restrictions</h3>
                <p className="text-sm text-gray-500">
                  Limit access to specific IP addresses or ranges
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className={`${ipRestrictionEnabled ? 'bg-blue-900' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900`}
                onClick={() => setIpRestrictionEnabled(!ipRestrictionEnabled)}
              >
                <span className="sr-only">Enable IP restrictions</span>
                <span
                  className={`${ipRestrictionEnabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Lock size={24} className="text-blue-900" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Password Expiry</h3>
                <p className="text-sm text-gray-500">
                  Force password changes after a specified number of days
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                max="365"
                className="block w-20 pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm rounded-md"
                value={passwordExpiryDays}
                onChange={(e) => setPasswordExpiryDays(parseInt(e.target.value) || 0)}
              />
              <span className="text-sm text-gray-500">days</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {dataEncryptionEnabled ? <Eye size={24} className="text-blue-900" /> : <EyeOff size={24} className="text-blue-900" />}
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Data Encryption</h3>
                <p className="text-sm text-gray-500">
                  Encrypt sensitive data stored in the system
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className={`${dataEncryptionEnabled ? 'bg-blue-900' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900`}
                onClick={() => setDataEncryptionEnabled(!dataEncryptionEnabled)}
              >
                <span className="sr-only">Enable data encryption</span>
                <span
                  className={`${dataEncryptionEnabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <Button>
            Save Security Settings
          </Button>
        </div>
      </Card>
      
      {/* IP Restrictions */}
      {ipRestrictionEnabled && (
        <Card title="IP Restrictions" subtitle="Manage allowed IP addresses and ranges">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IP Address / Range
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Added By
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Added On
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allowedIPs.map((ip) => (
                  <tr key={ip.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {ip.ip}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ip.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ip.addedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ip.addedOn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-red-600 hover:text-red-900">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                placeholder="IP Address or Range"
              />
              <input
                type="text"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                placeholder="Description"
              />
              <Button>
                Add IP Address
              </Button>
            </div>
          </div>
        </Card>
      )}
      
      {/* Audit Logs */}
      <Card title="Audit Logs" subtitle="Track user actions and system events">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {auditLogs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {log.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.ip}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {log.status === 'success' ? (
                        <>
                          <CheckCircle size={12} className="mr-1" />
                          Success
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={12} className="mr-1" />
                          Failed
                        </>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Clock size={16} className="mr-1" /> Last 24 Hours
            </Button>
            <Button variant="outline" size="sm">
              <Clock size={16} className="mr-1" /> Last 7 Days
            </Button>
            <Button variant="outline" size="sm">
              <Clock size={16} className="mr-1" /> Last 30 Days
            </Button>
          </div>
          
          <Button>
            Export Logs
          </Button>
        </div>
      </Card>
      
      {/* Security Recommendations */}
      <Card title="Security Recommendations" subtitle="Suggestions to improve your account security">
        <div className="space-y-4">
          <div className="flex p-4 bg-yellow-50 rounded-lg">
            <div className="mr-4 flex-shrink-0">
              <AlertTriangle size={24} className="text-yellow-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Enable Two-Factor Authentication</h4>
              <p className="text-gray-600 mt-1">
                Adding a second layer of authentication significantly improves account security.
              </p>
              <Button size="sm" className="mt-2" onClick={() => setTwoFactorEnabled(true)}>
                Enable Now
              </Button>
            </div>
          </div>
          
          <div className="flex p-4 bg-green-50 rounded-lg">
            <div className="mr-4 flex-shrink-0">
              <CheckCircle size={24} className="text-green-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Data Encryption Enabled</h4>
              <p className="text-gray-600 mt-1">
                Your sensitive data is being encrypted for additional security.
              </p>
            </div>
          </div>
          
          <div className="flex p-4 bg-blue-50 rounded-lg">
            <div className="mr-4 flex-shrink-0">
              <Smartphone size={24} className="text-blue-900" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Register Trusted Devices</h4>
              <p className="text-gray-600 mt-1">
                Register your frequently used devices to reduce unnecessary security prompts.
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                Manage Devices
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Security;