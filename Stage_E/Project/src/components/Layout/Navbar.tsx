import React from 'react';
import { Bell, Search, User, Crown } from 'lucide-react';

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <div className="h-16 bg-gradient-to-r from-white via-amber-50/50 to-white border-b border-amber-200/50 fixed top-0 left-64 right-0 z-40 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-3">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-amber-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-80 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
            />
          </div>

          <button className="relative p-2 text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-all duration-200 group">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center shadow-lg animate-pulse">
              3
            </span>
          </button>

          <div className="flex items-center space-x-3 pl-4 border-l border-amber-200">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="w-5 h-5 text-slate-900" />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-800">Premium Admin</p>
              <p className="text-amber-600 font-medium">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}