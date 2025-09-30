import { User, Mail, Phone, MapPin, Edit2, Camera } from 'lucide-react';

const Profil = ({ variant = 'v1' }) => {
  if (variant === 'v1') {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Profil Akun</h2>
            <p className="text-gray-500 mt-1">Kelola informasi profil Anda</p>
          </div>

          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Admin User</h3>
                <p className="text-gray-500 mt-1">Administrator</p>
                <span className="inline-block mt-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  Admin
                </span>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Informasi Personal</h3>
              <button className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg font-medium flex items-center gap-2">
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nama Lengkap
                  </div>
                </label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                </label>
                <input
                  type="email"
                  defaultValue="admin@prawindu.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Nomor Telepon
                  </div>
                </label>
                <input
                  type="tel"
                  defaultValue="+62 812 3456 7890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Alamat
                  </div>
                </label>
                <textarea
                  rows="3"
                  defaultValue="Jl. Raya Lembang No. 123, Bandung, Jawa Barat"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Batal
              </button>
              <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-medium shadow-lg">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'v2') {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Profil Akun
            </h2>
            <p className="text-gray-500 mt-2">Kelola informasi profil Anda</p>
          </div>

          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <User className="w-14 h-14 text-white" />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-white border-2 border-blue-200 rounded-xl flex items-center justify-center hover:bg-blue-50 shadow-lg">
                  <Camera className="w-5 h-5 text-blue-600" />
                </button>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">Admin User</h3>
                <p className="text-gray-500 mt-1 text-lg">Administrator</p>
                <span className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-xl text-sm font-bold">
                  Admin
                </span>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-800">Informasi Personal</h3>
              <button className="px-6 py-3 text-blue-600 hover:bg-blue-50 rounded-xl font-bold flex items-center gap-2 border-2 border-blue-200">
                <Edit2 className="w-5 h-5" />
                Edit
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    Nama Lengkap
                  </div>
                </label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Email
                  </div>
                </label>
                <input
                  type="email"
                  defaultValue="admin@prawindu.com"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    Nomor Telepon
                  </div>
                </label>
                <input
                  type="tel"
                  defaultValue="+62 812 3456 7890"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    Alamat
                  </div>
                </label>
                <textarea
                  rows="3"
                  defaultValue="Jl. Raya Lembang No. 123, Bandung, Jawa Barat"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-bold transition-all">
                Batal
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 font-bold shadow-xl transition-all">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'v3') {
    return (
      <div className="bg-gray-900 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white">Profil Akun</h2>
            <p className="text-orange-100 mt-2">Kelola informasi profil Anda</p>
          </div>

          {/* Profile Header */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <User className="w-14 h-14 text-white" />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-gray-700 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:bg-gray-600 shadow-lg">
                  <Camera className="w-5 h-5 text-orange-500" />
                </button>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Admin User</h3>
                <p className="text-gray-400 mt-1 text-lg">Administrator</p>
                <span className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl text-sm font-bold">
                  Admin
                </span>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">Informasi Personal</h3>
              <button className="px-6 py-3 text-orange-500 hover:bg-gray-700 rounded-xl font-bold flex items-center gap-2 border-2 border-gray-600">
                <Edit2 className="w-5 h-5" />
                Edit
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-orange-500" />
                    Nama Lengkap
                  </div>
                </label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-500" />
                    Email
                  </div>
                </label>
                <input
                  type="email"
                  defaultValue="admin@prawindu.com"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    Nomor Telepon
                  </div>
                </label>
                <input
                  type="tel"
                  defaultValue="+62 812 3456 7890"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Alamat
                  </div>
                </label>
                <textarea
                  rows="3"
                  defaultValue="Jl. Raya Lembang No. 123, Bandung, Jawa Barat"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-700">
              <button className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 font-bold transition-all">
                Batal
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 font-bold shadow-xl transition-all">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Profil;
