import { UserPlus, Mail, Lock, Shield } from 'lucide-react';

const BuatAkun = ({ variant = 'v1' }) => {
  if (variant === 'v1') {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Buat Akun</h2>
            <p className="text-gray-500 mt-1">Tambahkan pengguna baru ke sistem</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Nama Lengkap
                  </div>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
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
                  placeholder="Masukkan email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password
                  </div>
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Role
                  </div>
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Batal
              </button>
              <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-medium shadow-lg flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Buat Akun
              </button>
            </div>
          </div>

          {/* User List */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Daftar Pengguna</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">User {i}</p>
                      <p className="text-sm text-gray-500">user{i}@email.com</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Admin
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Buat Akun
            </h2>
            <p className="text-gray-500 mt-2">Tambahkan pengguna baru ke sistem</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-blue-600" />
                    Nama Lengkap
                  </div>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
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
                  placeholder="Masukkan email"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-600" />
                    Password
                  </div>
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    Role
                  </div>
                </label>
                <select className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium">
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-bold transition-all">
                Batal
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 font-bold shadow-xl transition-all flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Buat Akun
              </button>
            </div>
          </div>

          {/* User List */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Daftar Pengguna</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-5 border-2 border-blue-100 rounded-xl hover:bg-blue-50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <UserPlus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">User {i}</p>
                      <p className="text-sm text-gray-500">user{i}@email.com</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-bold">
                    Admin
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white">Buat Akun</h2>
            <p className="text-orange-100 mt-2">Tambahkan pengguna baru ke sistem</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-orange-500" />
                    Nama Lengkap
                  </div>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
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
                  placeholder="Masukkan email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-orange-500" />
                    Password
                  </div>
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-orange-500" />
                    Role
                  </div>
                </label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium">
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-700">
              <button className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 font-bold transition-all">
                Batal
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 font-bold shadow-xl transition-all flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Buat Akun
              </button>
            </div>
          </div>

          {/* User List */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 mt-8">
            <h3 className="text-xl font-bold text-white mb-6">Daftar Pengguna</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-5 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <UserPlus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">User {i}</p>
                      <p className="text-sm text-gray-400">user{i}@email.com</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm font-bold">
                    Admin
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

export default BuatAkun;