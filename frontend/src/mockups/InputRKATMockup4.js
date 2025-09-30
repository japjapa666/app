import { Calendar, Save, X } from 'lucide-react';

const InputRKATMockup4 = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Card with Custom Colors */}
        <div className="bg-gradient-to-r from-[#007582] to-[#005d67] rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#FFC107] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-[#007582] text-3xl">📋</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Input RKAT</h2>
              <p className="text-[#FFC107] text-sm mt-1 font-semibold">Formulir Rencana Kerja dan Anggaran Tahunan</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#FFC107]">
          {/* Section 1: Informasi Dasar */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#007582]">
              <div className="w-2 h-8 bg-gradient-to-b from-[#007582] to-[#FFC107] rounded-full"></div>
              <h3 className="text-xl font-bold text-[#007582]">📋 Informasi Dasar</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#007582] mb-2">
                  Kode Lapangan
                </label>
                <input
                  type="text"
                  placeholder="D 11"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#007582] mb-2">
                  Unit Kerja/Sub Unit
                </label>
                <input
                  type="text"
                  placeholder="IPNU"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#007582] mb-2">
                  Indikalisasi
                </label>
                <input
                  type="text"
                  placeholder="Masukan indikalisasi"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Program */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#007582]">
              <div className="w-2 h-8 bg-gradient-to-b from-[#007582] to-[#FFC107] rounded-full"></div>
              <h3 className="text-xl font-bold text-[#007582]">🎯 Program & Kegiatan</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#007582] mb-2">
                    Program NU
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all font-medium bg-white">
                    <option>NU</option>
                    <option>Pilih NU 1</option>
                    <option>Pilih NU 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#007582] mb-2">
                    Sub Program
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all font-medium bg-white">
                    <option>Pilih Sub NU</option>
                    <option>Sub NU 1</option>
                    <option>Sub NU 2</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#007582] mb-2">
                  Tujuan
                </label>
                <textarea
                  placeholder="Masukan tujuan kegiatan..."
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Section 3: Detail Kegiatan */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#007582]">
              <div className="w-2 h-8 bg-gradient-to-b from-[#007582] to-[#FFC107] rounded-full"></div>
              <h3 className="text-xl font-bold text-[#007582]">📝 Detail Kegiatan</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#007582] mb-2">
                  Mataanme & Rancangan
                </label>
                <textarea
                  placeholder="Masukan mataanme & rancangan..."
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#007582] mb-2">
                    Julu Kegiatan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan julu kegiatan"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#007582] mb-2">
                    Jadwal Pelaksanaan
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      defaultValue="2026-09-11"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                    />
                    <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-[#007582] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#007582] mb-2">
                    ICE
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all font-medium bg-white">
                    <option>Pilih ICE</option>
                    <option>ICE 1</option>
                    <option>ICE 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#007582] mb-2">
                    Lokasi Pelaksanaan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan lokasi pelaksanaan"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#007582] mb-2">
                  Latar Belakang
                </label>
                <textarea
                  placeholder="Masukan latar belakang..."
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#007582] mb-2">
                  Indikator Kerja
                </label>
                <textarea
                  placeholder="Tuliskan indikator kerja..."
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFC107] focus:border-[#007582] transition-all"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t-2 border-gray-100">
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-bold transition-all flex items-center gap-2">
              <X className="w-5 h-5" />
              Batal
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-[#007582] to-[#005d67] text-white rounded-xl hover:shadow-xl font-bold transition-all flex items-center gap-2 shadow-lg border-2 border-[#FFC107]">
              <Save className="w-5 h-5 text-[#FFC107]" />
              Simpan RKAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRKATMockup4;
