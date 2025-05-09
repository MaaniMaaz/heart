// src/components/Admin/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgba(251,246,243,1)] flex items-center justify-center">
        <div className="w-16 h-16 border-t-4 border-[rgba(168,192,130,1)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/protected" replace />;
};

export default ProtectedRoute;