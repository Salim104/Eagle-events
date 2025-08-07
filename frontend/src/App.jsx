import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import PackagesPage from './pages/PackagesPage'
import EquipmentsPage from './pages/EquipmentsPage'
import AdminDashboard from './pages/admin/AdminDashboard'


const App = () => {
  return (
    <div>
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/packages" element={<PackagesPage />} />
     <Route path="/equipments" element={<EquipmentsPage />} />
     <Route path="/admin" element={<AdminDashboard />} />
     </Routes>
    </div>
  )
}

export default App
