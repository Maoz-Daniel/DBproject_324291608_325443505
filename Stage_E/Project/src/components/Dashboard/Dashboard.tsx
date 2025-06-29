import React from 'react';
import { Users, MapPin, ClipboardList, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  onClick: () => void;
  gradient: string;
}

function DashboardCard({ title, description, icon: Icon, onClick, gradient }: DashboardCardProps) {
  return (
    <button
      onClick={onClick}
      className={`${gradient} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-left w-full group relative overflow-hidden border border-white/20`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Sparkles className="w-8 h-8" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Icon className="w-8 h-8" />
          </div>
          <ArrowRight className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/90 text-lg leading-relaxed">{description}</p>
      </div>
    </button>
  );
}

interface DashboardProps {
  onTabChange: (tab: string) => void;
}

export default function Dashboard({ onTabChange }: DashboardProps) {
  const navigationCards = [
    {
      title: 'Members Management',
      description: 'Manage premium gym members and their exclusive memberships',
      icon: Users,
      gradient: 'bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700',
      tab: 'members',
    },
    {
      title: 'Zones Management',
      description: 'Configure premium zones and manage exclusive access areas',
      icon: MapPin,
      gradient: 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700',
      tab: 'zones',
    },
    {
      title: 'Entry/Exit Records',
      description: 'Monitor member activity and access logs in real-time',
      icon: ClipboardList,
      gradient: 'bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700',
      tab: 'logs',
    },
    {
      title: 'Reports & Analytics',
      description: 'Generate comprehensive insights and executive reports',
      icon: BarChart3,
      gradient: 'bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700',
      tab: 'reports',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-12 shadow-2xl border border-amber-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/10"></div>
          <div className="absolute top-8 right-8 opacity-20">
            <Sparkles className="w-16 h-16 text-amber-400" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Premium GymControl
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Elite fitness management system for premium gym operations and member experiences
            </p>
            <div className="flex items-center justify-center space-x-12 text-amber-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{new Date().toLocaleDateString()}</div>
                <div className="text-sm opacity-75 font-medium">Today's Date</div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <div className="text-sm opacity-75 font-medium">Current Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Management Hub
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Access all premium gym management tools from your executive dashboard
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {navigationCards.map((card) => (
            <DashboardCard
              key={card.tab}
              title={card.title}
              description={card.description}
              icon={card.icon}
              gradient={card.gradient}
              onClick={() => onTabChange(card.tab)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}