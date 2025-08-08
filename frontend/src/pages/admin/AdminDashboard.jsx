import React from 'react';
import AdminNav from './adminNav';
import AdminSidebar from './Adminsidebar';
import DashboardContent from './DashboardContent';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <AdminNav />

      {/* Layout Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <DashboardContent />
      </div>
    </div>
  );
};
export default AdminDashboard;