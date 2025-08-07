import React from 'react';
import AdminNav from './adminNav';

const AdminDashboard = () => {
 

  return (
    <div>
      <AdminNav />
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
     
      }}>
        {/* Sidebar */}
        <aside style={{
          background: 'white',
          padding: '2rem 0',
          boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
        }}>
          <nav>
            {[
              { icon: '📊', text: 'Dashboard', active: true },
              { icon: '📦', text: 'Packages' },
              { icon: '🎪', text: 'Equipment' },
              { icon: '⚙️', text: 'Services' },
              { icon: '📅', text: 'Bookings' },
              { icon: '👥', text: 'Customers' },
              { icon: '📈', text: 'Analytics' },
              { icon: '⚙️', text: 'Settings' }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem 2rem',
                  color: item.active ? '#667eea' : '#64748b',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  borderLeft: item.active ? '3px solid #667eea' : '3px solid transparent',
                  background: item.active ? '#f8fafc' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    e.target.style.background = '#f8fafc';
                    e.target.style.color = '#667eea';
                    e.target.style.borderLeftColor = '#667eea';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#64748b';
                    e.target.style.borderLeftColor = 'transparent';
                  }
                }}
              >
                <span style={{ marginRight: '0.75rem', fontSize: '1.2rem' }}>
                  {item.icon}
                </span>
                {item.text}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ padding: '2rem' }}>
          {/* Dashboard Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2rem',
              color: '#2c3e50',
              marginBottom: '0.5rem'
            }}>
              Dashboard Overview
            </h1>
            <p style={{ color: '#64748b' }}>
              Manage your event agency business
            </p>
          </div>

          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: 'Total Packages',
                icon: '📦',
                number: '24',
                change: '+3 this month',
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              },
              {
                title: 'Equipment Items',
                icon: '🎪',
                number: '156',
                change: '+8 this month',
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
              },
              {
                title: 'Active Services',
                icon: '⚙️',
                number: '18',
                change: '+2 this month',
                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
              },
              {
                title: 'This Month Bookings',
                icon: '📅',
                number: '47',
                change: '+12 this month',
                gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
              }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    color: '#64748b',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    fontWeight: '600'
                  }}>
                    {stat.title}
                  </span>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: 'white',
                    background: stat.gradient
                  }}>
                    {stat.icon}
                  </div>
                </div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#10b981'
                }}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              marginBottom: '1rem',
              color: '#2c3e50'
            }}>
              Quick Actions
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {['+ Add New Package', '+ Add Equipment', '+ Add Service', '📊 View Reports'].map((action, index) => (
                <button
                  key={index}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Items */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                color: '#2c3e50',
                margin: 0
              }}>
                Recent Packages
              </h3>
            </div>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr>
                  {['Name', 'Category', 'Price', 'Status', 'Actions'].map((header, index) => (
                    <th key={index} style={{
                      textAlign: 'left',
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid #f3f4f6',
                      background: '#f8fafc',
                      color: '#64748b',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      textTransform: 'uppercase'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Premium Wedding Package',
                    category: 'Wedding Packages',
                    price: 'R15,000',
                    status: 'Active',
                    statusActive: true
                  },
                  {
                    name: 'Corporate Event Package',
                    category: 'Corporate Packages',
                    price: 'R12,500',
                    status: 'Active',
                    statusActive: true
                  },
                  {
                    name: 'Birthday Celebration',
                    category: 'Birthday Packages',
                    price: 'R8,000',
                    status: 'Draft',
                    statusActive: false
                  }
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={{
                      textAlign: 'left',
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      {row.name}
                    </td>
                    <td style={{
                      textAlign: 'left',
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      {row.category}
                    </td>
                    <td style={{
                      textAlign: 'left',
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      {row.price}
                    </td>
                    <td style={{
                      textAlign: 'left',
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        background: row.statusActive ? '#d1fae5' : '#fee2e2',
                        color: row.statusActive ? '#065f46' : '#991b1b'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{
                      textAlign: 'left',
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <button style={{
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Edit
                      </button>
                      <button style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;