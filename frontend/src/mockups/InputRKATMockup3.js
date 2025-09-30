import { Calendar, FileText, Save, X } from 'lucide-react';

const InputRKATMockup3 = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Input RKAT</h2>
              <p className="text-orange-100 text-sm mt-1">Formulir Rencana Kerja dan Anggaran Tahunan</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          {/* Section 1: Informasi Dasar */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-orange-500">Informasi Dasar</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Kode Lapangan
                </label>
                <input
                  type="text"
                  placeholder="D 11"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Unit Kerja/Sub Unit
                </label>
                <input
                  type="text"
                  placeholder="IPNU"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Indikalisasi
                </label>
                <input
                  type="text"
                  placeholder="Masukan indikalisasi"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Program */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-orange-500">Program & Kegiatan</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <select className="px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium">
                  <option>NU</option>
                  <option>Pilih NU 1</option>
                  <option>Pilih NU 2</option>
                </select>
                <select className="px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium">
                  <option>Pilih Sub NU</option>
                  <option>Sub NU 1</option>
                  <option>Sub NU 2</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Tujuan
                </label>
                <textarea
                  placeholder="Masukan tujuan kegiatan..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Section 3: Detail Kegiatan */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-orange-500">Detail Kegiatan</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Mataanme & Rancangan
                </label>
                <textarea
                  placeholder="Masukan mataanme & rancangan..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Julu Kegiatan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan julu kegiatan"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Jadwal Pelaksanaan
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      defaultValue="2026-09-11"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                    <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    ICE
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium">
                    <option>Pilih ICE</option>
                    <option>ICE 1</option>
                    <option>ICE 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Lokasi Pelaksanaan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan lokasi pelaksanaan"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Latar Belakang
                </label>
                <textarea
                  placeholder="Masukan latar belakang..."
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Indikator Kerja
                </label>
                <textarea
                  placeholder="Tuliskan indikator kerja..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t border-gray-700">
            <button className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 font-bold transition-all flex items-center gap-2">
              <X className="w-5 h-5" />
              Batal
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 font-bold shadow-xl transition-all flex items-center gap-2">
              <Save className="w-5 h-5" />
              Simpan RKAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRKATMockup3;
