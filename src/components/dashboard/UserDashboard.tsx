import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FileTextIcon, FileIcon, UsersIcon, BarChartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  const features = [
    { name: 'Invoices', icon: FileTextIcon, href: '/invoices', color: 'bg-indigo-500', count: 12 },
    { name: 'Quotations', icon: FileIcon, href: '/quotations', color: 'bg-green-500', count: 5 },
    { name: 'Clients', icon: UsersIcon, href: '/clients', color: 'bg-yellow-500', count: 8 },
    { name: 'Reports', icon: BarChartIcon, href: '/reports', color: 'bg-red-500', count: 3 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Welcome to KingVoice Invoice, {user?.email}</h1>
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
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="text-2xl font-semibold text-gray-900">{feature.count}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Manage your {feature.name.toLowerCase()} efficiently.
              </p>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <Link
                to={feature.href}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View all<span className="sr-only"> {feature.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;