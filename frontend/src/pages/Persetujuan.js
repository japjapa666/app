import { CheckCircle, XCircle, Eye } from 'lucide-react';

const Persetujuan = ({ variant = 'v1' }) => {
  const rkatList = [
    { id: 1, title: 'RKAT Kegiatan Pelatihan', unit: 'IPNU', date: '11 Sep 2024', status: 'pending' },
    { id: 2, title: 'RKAT Program Dakwah', unit: 'NU', date: '10 Sep 2024', status: 'pending' },
    { id: 3, title: 'RKAT Kegiatan Sosial', unit: 'IPPNU', date: '09 Sep 2024', status: 'pending' },
  ];

  if (variant === 'v1') {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Persetujuan RKAT</h2>
            <p className="text-gray-500 mt-1">Kelola persetujuan RKAT yang masuk</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              {rkatList.map((rkat) => (
                <div key={rkat.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{rkat.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Unit: {rkat.unit} • Tanggal: {rkat.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                      Menunggu
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Setujui
                    </button>
                    <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium flex items-center justify-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Tolak
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Lihat Detail
                    </button>
                  </div>
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
              Persetujuan RKAT
            </h2>
            <p className="text-gray-500 mt-2">Kelola persetujuan RKAT yang masuk</p>
          </div>

          <div className="space-y-6">
            {rkatList.map((rkat) => (
              <div key={rkat.id} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-gray-800 text-xl">{rkat.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">Unit: {rkat.unit} • Tanggal: {rkat.date}</p>
                  </div>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-xl text-sm font-bold">
                    Menunggu
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 font-bold flex items-center justify-center gap-2 shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                    Setujui
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 font-bold flex items-center justify-center gap-2 shadow-lg">
                    <XCircle className="w-5 h-5" />
                    Tolak
                  </button>
                  <button className="px-6 py-3 border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 font-bold flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
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
            <h2 className="text-3xl font-bold text-white">Persetujuan RKAT</h2>
            <p className="text-orange-100 mt-2">Kelola persetujuan RKAT yang masuk</p>
          </div>

          <div className="space-y-6">
            {rkatList.map((rkat) => (
              <div key={rkat.id} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-white text-xl">{rkat.title}</h3>
                    <p className="text-sm text-gray-400 mt-2">Unit: {rkat.unit} • Tanggal: {rkat.date}</p>
                  </div>
                  <span className="px-4 py-2 bg-yellow-500 text-yellow-900 rounded-xl text-sm font-bold">
                    Menunggu
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-bold flex items-center justify-center gap-2 shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                    Setujui
                  </button>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 font-bold flex items-center justify-center gap-2 shadow-lg">
                    <XCircle className="w-5 h-5" />
                    Tolak
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700 font-bold flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Persetujuan;