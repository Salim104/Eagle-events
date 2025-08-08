import React from 'react';

const AdminNav = () => {
  return (
    <header className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white px-8 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="text-2xl font-bold flex items-center">
          🎉 Event Agency Admin
        </div>
        <div className="flex items-center gap-4">
          <span>Welcome, Admin</span>
          <button
            className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold transform transition-transform duration-300 hover:-translate-y-0.5"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;
