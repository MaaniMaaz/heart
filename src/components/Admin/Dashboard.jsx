// src/components/Admin/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold font-['Raleway'] mb-6">Welcome to Heart & Home Green Clean CMS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[rgba(168,192,130,1)]">
          <h3 className="text-lg font-semibold mb-2">Home Page</h3>
          <p className="text-gray-600 mb-4">Edit your website's main landing page.</p>
          <a href="/admin/home" className="text-[rgba(168,192,130,1)] hover:underline">Edit Content →</a>
        </div>
        
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[rgba(255,174,174,1)]">
          <h3 className="text-lg font-semibold mb-2">About Page</h3>
          <p className="text-gray-600 mb-4">Update your company information and team details.</p>
          <a href="/admin/about" className="text-[rgba(255,174,174,1)] hover:underline">Edit Content →</a>
        </div>
        

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[rgba(168,192,130,1)]">
          <h3 className="text-lg font-semibold mb-2">Services Page</h3>
          <p className="text-gray-600 mb-4">Manage your service offerings and descriptions.</p>
          <a href="/admin/services" className="text-[rgba(168,192,130,1)] hover:underline">Edit Content →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[rgba(255,174,174,1)]">
        <h3 className="text-lg font-semibold mb-2">Request Quote</h3>
        <p className="text-gray-600 mb-4">Update contact page content and information.</p>
        <a href="/admin/contact" className="text-[rgba(255,174,174,1)] hover:underline">Edit Content →</a>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;