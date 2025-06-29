import React from 'react';
import { 
  Home,
  Users, 
  MapPin, 
  ClipboardList, 
  BarChart3,
  Dumbbell,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'members', label: 'Members', icon: Users },
  { id: 'zones', label: 'Zones', icon: MapPin },
  { id: 'logs', label: 'Entry/Exit Records', icon: ClipboardList },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
];

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col shadow-2xl border-r border-amber-500/20">
      {/* Header */}
      <div className="p-6 border-b border-amber-500/30 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex-shrink-0 shadow-lg">
            <Dumbbell className="w-6 h-6 text-slate-900" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              GymControl
            </h1>
            <p className="text-amber-200/70 text-sm">Premium Management</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left group ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-300 shadow-lg border border-amber-500/30 transform scale-105'
                  : 'text-slate-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-amber-600/10 hover:text-amber-200 hover:transform hover:scale-102 hover:border hover:border-amber-500/20'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 transition-colors ${
                isActive ? 'text-amber-400' : 'group-hover:text-amber-400'
              }`} />
              <span className="font-medium truncate">{item.label}</span>
              {isActive && (
                <div className="w-2 h-2 bg-amber-400 rounded-full ml-auto animate-pulse"></div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-amber-500/30 flex-shrink-0">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-600/10 hover:text-red-300 rounded-xl transition-all duration-300 group">
          <LogOut className="w-5 h-5 flex-shrink-0 group-hover:text-red-400" />
          <span className="font-medium truncate">Sign Out</span>
        </button>
      </div>
    </div>
  );
}