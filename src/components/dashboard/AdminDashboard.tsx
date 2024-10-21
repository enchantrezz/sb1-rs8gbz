import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UsersIcon, DollarSignIcon, ActivityIcon, SettingsIcon } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const features = [
    { name: 'Users', icon: UsersIcon, href: '#', color: 'bg-blue-500' },
    { name: 'Revenue', icon: DollarSignIcon, href: '#', color: 'bg-green-500' },
    { name: 'Activity', icon: ActivityIcon, href: '#', color: 'bg-purple-500' },
    { name: 'Settings', icon: SettingsIcon, href: '#', color: 'bg-gray-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className={`${feature.color} rounded-md p-3 inline-block`}>
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
                Manage {feature.name.toLowerCase()} across the platform.
              </p>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <a
                href={feature.href}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View details<span className="sr-only"> for {feature.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;