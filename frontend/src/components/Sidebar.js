import { Home, FileText, CheckCircle, Monitor, UserPlus, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ variant = 'default' }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'DASHBOARD', icon: Home, path: '/' },
    { name: 'INPUT RKAT', icon: FileText, path: '/input-rkat' },
    { name: 'PERSETUJUAN', icon: CheckCircle, path: '/persetujuan' },
    { name: 'MONITORING', icon: Monitor, path: '/monitoring' },
    { name: 'BUAT AKUN', icon: UserPlus, path: '/buat-akun' },
    { name: 'PROFIL', icon: User, path: '/profil' }
  ];

  const isActive = (path) => location.pathname === path;

  // Variant 1: Original Design (Teal/Cyan)
  if (variant === 'v1') {
    return (
      <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full px-6 py-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-teal-500" />
            </div>
            <span className="text-white font-bold text-sm">Prawindu Rapi Lembang</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-semibold text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    );
  }

  // Variant 2: Modern Minimalist (Blue/Purple)
  if (variant === 'v2') {
    return (
      <div className="w-64 bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xs">Prawindu</h3>
                <p className="text-xs text-gray-500">Rapi Lembang</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-xl transition-all ${
                isActive(item.path)
                  ? 'bg-white text-blue-600 shadow-lg scale-105'
                  : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    );
  }

  // Variant 3: Dark Modern (Dark/Orange)
  if (variant === 'v3') {
    return (
      <div className="w-64 bg-gray-900 min-h-screen flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Prawindu</h3>
              <p className="text-xs text-gray-400">Rapi Lembang</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    );
  }

  // Variant 4: Custom Teal & Amber (#007582 & #FFC107)
  if (variant === 'v4') {
    return (
      <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col shadow-lg">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#007582] to-[#005d67] rounded-xl px-6 py-4 shadow-lg">
            <div className="w-12 h-12 bg-[#FFC107] rounded-lg flex items-center justify-center shadow-md">
              <FileText className="w-6 h-6 text-[#007582]" />
            </div>
            <div>
              <span className="text-white font-bold text-sm block">Prawindu</span>
              <span className="text-[#FFC107] text-xs font-semibold">Rapi Lembang</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-xl transition-all ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-[#007582] to-[#005d67] text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-[#007582]'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-[#FFC107]' : ''}`} />
              <span className="font-semibold text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    );
  }

  return null;
};

export default Sidebar;