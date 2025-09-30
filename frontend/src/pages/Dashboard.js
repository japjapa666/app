import { FileText, CheckCircle, Clock, XCircle, Users } from 'lucide-react';

const Dashboard = ({ variant = 'v1' }) => {
  const stats = [
    { label: 'Total RKAT', value: '24', icon: FileText, color: 'blue' },
    { label: 'Menunggu Persetujuan', value: '8', icon: Clock, color: 'yellow' },
    { label: 'Disetujui', value: '12', icon: CheckCircle, color: 'green' },
    { label: 'Ditolak', value: '4', icon: XCircle, color: 'red' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color] || colors.blue;
  };

  if (variant === 'v1') {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-500 mt-1">Selamat datang di sistem RKAT Prawindu Rapi Lembang</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(stat.color)} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent RKAT */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">RKAT Terbaru</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">RKAT Kegiatan {i}</p>
                      <p className="text-sm text-gray-500">Dibuat pada 11 Sep 2024</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'v2') {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h2>
            <p className="text-gray-500 mt-2">Selamat datang di sistem RKAT Prawindu Rapi Lembang</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${getColorClasses(stat.color)} flex items-center justify-center`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-bold text-gray-800">{stat.value}</span>
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent RKAT */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">RKAT Terbaru</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-5 border-2 border-blue-100 rounded-xl hover:bg-blue-50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">RKAT Kegiatan {i}</p>
                      <p className="text-sm text-gray-500">Dibuat pada 11 Sep 2024</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-xl text-sm font-bold">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'v3') {
    return (
      <div className="bg-gray-900 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            <p className="text-orange-100 mt-2">Selamat datang di sistem RKAT Prawindu Rapi Lembang</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${getColorClasses(stat.color)} flex items-center justify-center`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-gray-300 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent RKAT */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">RKAT Terbaru</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-5 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">RKAT Kegiatan {i}</p>
                      <p className="text-sm text-gray-400">Dibuat pada 11 Sep 2024</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-yellow-500 text-yellow-900 rounded-xl text-sm font-bold">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Dashboard;