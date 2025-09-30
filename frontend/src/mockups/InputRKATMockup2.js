import { Calendar, FileText } from 'lucide-react';

const InputRKATMockup2 = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Input RKAT
              </h2>
              <p className="text-gray-500 text-sm">Formulir Rencana Kerja dan Anggaran Tahunan</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Section 1: Informasi Dasar */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 pb-2 border-b-2 border-blue-200">
              📋 Informasi Dasar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Kode Lapangan
                </label>
                <input
                  type="text"
                  placeholder="D 11"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Unit Kerja/Sub Unit
                </label>
                <input
                  type="text"
                  placeholder="IPNU"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Indikalisasi
                </label>
                <input
                  type="text"
                  placeholder="Masukan indikalisasi"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Program */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">
              🎯 Program & Kegiatan
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <select className="px-4 py-3 border-2 border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-medium">
                <option>NU</option>
                <option>Pilih NU 1</option>
                <option>Pilih NU 2</option>
              </select>
              <select className="px-4 py-3 border-2 border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-medium">
                <option>Pilih Sub NU</option>
                <option>Sub NU 1</option>
                <option>Sub NU 2</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Tujuan
              </label>
              <textarea
                placeholder="Masukan tujuan kegiatan..."
                rows="3"
                className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              ></textarea>
            </div>
          </div>

          {/* Section 3: Detail Kegiatan */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-600 mb-4 pb-2 border-b-2 border-indigo-200">
              📝 Detail Kegiatan
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Mataanme & Rancangan
                </label>
                <textarea
                  placeholder="Masukan mataanme & rancangan..."
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Julu Kegiatan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan julu kegiatan"
                    className="w-full px-4 py-3 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Jadwal Pelaksanaan
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      defaultValue="2026-09-11"
                      className="w-full px-4 py-3 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                    <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    ICE
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-medium">
                    <option>Pilih ICE</option>
                    <option>ICE 1</option>
                    <option>ICE 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Lokasi Pelaksanaan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan lokasi pelaksanaan"
                    className="w-full px-4 py-3 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Latar Belakang
                </label>
                <textarea
                  placeholder="Masukan latar belakang..."
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Indikator Kerja
                </label>
                <textarea
                  placeholder="Tuliskan indikator kerja..."
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-bold transition-all">
              Batal
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 font-bold shadow-xl transition-all">
              Simpan RKAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRKATMockup2;