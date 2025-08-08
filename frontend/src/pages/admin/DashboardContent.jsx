import React from "react";

const DashboardContent = () => {
  const stats = [
    {
      title: "Total Packages",
      icon: "📦",
      number: "24",
      change: "+3 this month",
      gradient: "bg-gradient-to-br from-customIndigo to-customPurple",
    },
    {
      title: "Equipment Items",
      icon: "🎪",
      number: "156",
      change: "+8 this month",
      gradient: "bg-gradient-to-br from-pink-300 to-pink-500",
    },
    {
      title: "Active Services",
      icon: "⚙️",
      number: "18",
      change: "+2 this month",
      gradient: "bg-gradient-to-br from-sky-400 to-cyan-300",
    },
    {
      title: "This Month Bookings",
      icon: "📅",
      number: "47",
      change: "+12 this month",
      gradient: "bg-gradient-to-br from-green-400 to-teal-300",
    },
  ];

  const actions = [
    "+ Add New Package",
    "+ Add Equipment",
    "+ Add Service",
    "📊 View Reports",
  ];

  const recentPackages = [
    {
      name: "Premium Wedding Package",
      category: "Wedding Packages",
      price: "R15,000",
      status: "Active",
      statusActive: true,
    },
    {
      name: "Corporate Event Package",
      category: "Corporate Packages",
      price: "R12,500",
      status: "Active",
      statusActive: true,
    },
    {
      name: "Birthday Celebration",
      category: "Birthday Packages",
      price: "R8,000",
      status: "Draft",
      statusActive: false,
    },
  ];

  return (
    <main className="p-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#2c3e50] mb-2">Dashboard Overview</h1>
        <p className="text-slate-500">Manage your event agency business</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md transition-transform duration-300 cursor-pointer hover:-translate-y-0.5"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-500 text-sm uppercase font-semibold">
                {stat.title}
              </span>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg text-white ${stat.gradient}`}
              >
                {stat.icon}
              </div>
            </div>
            <div className="text-3xl font-bold text-[#2c3e50]">
              {stat.number}
            </div>
            <div className="text-sm text-emerald-500">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="mb-4 text-[#2c3e50] font-semibold">Quick Actions</h3>
        <div className="flex gap-4 flex-wrap">
          {actions.map((action, index) => (
            <button
              key={index}
              className="bg-gradient-to-br from-customIndigo to-customPurple text-white px-6 py-3 rounded-lg font-semibold transform transition-transform duration-300 hover:-translate-y-0.5"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Items */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-[#2c3e50] m-0 font-semibold">
            Recent Packages
          </h3>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {["Name", "Category", "Price", "Status", "Actions"].map(
                (header, index) => (
                  <th
                    key={index}
                    className="text-left px-6 py-4 border-b border-gray-100 bg-slate-50 text-slate-500 font-semibold text-xs uppercase"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {recentPackages.map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.category}</td>
                <td className="px-6 py-4">{row.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      row.statusActive
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DashboardContent;
