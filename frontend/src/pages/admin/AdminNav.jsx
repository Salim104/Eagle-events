import React from 'react';

const AdminNav = () => {
  return (
    <header style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',color: 'white',padding: '1rem 2rem',boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center'
        }}>
          🎉 Event Agency Admin
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span>Welcome, Admin</span>
          <button style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '0.5rem 1rem',
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
          }}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;