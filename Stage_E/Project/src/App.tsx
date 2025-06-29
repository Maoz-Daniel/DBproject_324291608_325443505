import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import MembersList from './components/Members/MembersList';
import ZonesList from './components/Zones/ZonesList';
import LogsList from './components/Logs/LogsList';
import ReportsView from './components/Reports/ReportsView';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Dashboard';
      case 'members':
        return 'Members';
      case 'zones':
        return 'Zones';
      case 'logs':
        return 'Entry/Exit Records';
      case 'reports':
        return 'Reports';
      default:
        return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onTabChange={setActiveTab} />;
      case 'members':
        return <MembersList />;
      case 'zones':
        return <ZonesList />;
      case 'logs':
        return <LogsList />;
      case 'reports':
        return <ReportsView />;
      default:
        return <Dashboard onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-amber-50/30">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <Navbar title={getPageTitle()} />
      
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
            color: '#fff',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '12px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
          success: {
            style: {
              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            },
          },
          error: {
            style: {
              background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            },
          },
        }}
      />
    </div>
  );
}

export default App;