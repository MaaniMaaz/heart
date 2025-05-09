// src/components/Admin/DashboardLayout.jsx
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/protected');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[rgba(251,246,243,0.5)]">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-['Raleway'] text-gray-900">Heart & Home Green Clean CMS</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Sidebar and Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <nav className="pt-6 px-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/admin/dashboard" 
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/home" 
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]"
                >
                  Edit Home Page
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/about" 
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]"
                >
                  Edit About Page
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/services" 
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]"
                >
                  Edit Services Page
                </Link>
              </li>
              <li>
              <Link 
                to="/admin/contact" 
                className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]"
              >
                Edit Request Quote Page
              </Link>
            </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;