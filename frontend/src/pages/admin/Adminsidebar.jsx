import React from "react";

const AdminSidebar = () => {
  const menuItems = [
    { icon: "📊", text: "Dashboard", active: true },
    { icon: "📦", text: "Packages" },
    { icon: "🎪", text: "Equipment" },
    { icon: "⚙️", text: "Services" },
    { icon: "📅", text: "Bookings" },
    { icon: "👥", text: "Customers" },
    { icon: "📈", text: "Analytics" },
    { icon: "⚙️", text: "Settings" },
  ];

  return (
    <aside className="bg-white py-8 shadow-md">
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-8 py-4 transition-all duration-300 
              border-l-4 ${
                item.active
                  ? "bg-slate-50 text-customIndigo border-customIndigo"
                  : "text-slate-500 border-transparent hover:bg-slate-50 hover:text-customIndigo hover:border-customIndigo"
              }`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
