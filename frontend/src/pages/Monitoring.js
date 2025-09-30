import { Activity, TrendingUp, BarChart3 } from 'lucide-react';

const Monitoring = ({ variant = 'v1' }) => {
  const activities = [
    { id: 1, action: 'RKAT Disetujui', user: 'Admin', time: '2 jam yang lalu', type: 'success' },
    { id: 2, action: 'RKAT Ditolak', user: 'Admin', time: '3 jam yang lalu', type: 'error' },
    { id: 3, action: 'RKAT Dibuat', user: 'User 1', time: '5 jam yang lalu', type: 'info' },
    { id: 4, action: 'RKAT Disetujui', user: 'Admin', time: '1 hari yang lalu', type: 'success' },
  ];

  if (variant === 'v1') {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Monitoring</h2>
            <p className="text-gray-500 mt-1">Pantau aktivitas dan statistik RKAT</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Aktivitas</p>
                  <p className="text-2xl font-bold text-gray-800">127</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Tingkat Persetujuan</p>
                  <p className="text-2xl font-bold text-gray-800">85%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Aktivitas Hari Ini</p>
                  <p className="text-2xl font-bold text-gray-800">12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Log Aktivitas</h3>
            <div className="space-y-3">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activity.type === 'success' ? 'bg-green-100 text-green-600' :
                      activity.type === 'error' ? 'bg-red-100 text-red-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{activity.action}</p>
                      <p className="text-sm text-gray-500">oleh {activity.user}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
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
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Monitoring
            </h2>
            <p className="text-gray-500 mt-2">Pantau aktivitas dan statistik RKAT</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Aktivitas</p>
                  <p className="text-3xl font-bold text-gray-800">127</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Tingkat Persetujuan</p>
                  <p className="text-3xl font-bold text-gray-800">85%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Aktivitas Hari Ini</p>
                  <p className="text-3xl font-bold text-gray-800">12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Log Aktivitas</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-5 border-2 border-blue-100 rounded-xl hover:bg-blue-50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activity.type === 'success' ? 'bg-green-500 text-white' :
                      activity.type === 'error' ? 'bg-red-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{activity.action}</p>
                      <p className="text-sm text-gray-500">oleh {activity.user}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{activity.time}</span>
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
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white">Monitoring</h2>
            <p className="text-orange-100 mt-2">Pantau aktivitas dan statistik RKAT</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Aktivitas</p>
                  <p className="text-3xl font-bold text-white">127</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Tingkat Persetujuan</p>
                  <p className="text-3xl font-bold text-white">85%</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Aktivitas Hari Ini</p>
                  <p className="text-3xl font-bold text-white">12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Log Aktivitas</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-5 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activity.type === 'success' ? 'bg-green-600' :
                      activity.type === 'error' ? 'bg-red-600' :
                      'bg-blue-600'
                    }`}>
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{activity.action}</p>
                      <p className="text-sm text-gray-400">oleh {activity.user}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{activity.time}</span>
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

export default Monitoring;