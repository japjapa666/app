import { User, Bell } from 'lucide-react';

const Header = ({ title, variant = 'default' }) => {
  // Variant 1: Original Design (Teal)
  if (variant === 'v1') {
    return (
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm">📄</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{title}</h1>
              <p className="text-xs text-teal-500 font-semibold">ADMIN</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-teal-500" />
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center cursor-pointer">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variant 2: Modern Minimalist (Blue/Purple)
  if (variant === 'v2') {
    return (
      <div className="bg-white shadow-sm px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xs text-gray-500 mt-1">ADMIN</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center cursor-pointer">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variant 3: Dark Modern (Dark/Orange)
  if (variant === 'v3') {
    return (
      <div className="bg-gray-800 border-b border-gray-700 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-xs text-orange-500 mt-1 font-semibold">ADMIN</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-orange-500" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center cursor-pointer">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Header;