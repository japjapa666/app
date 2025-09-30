import { Calendar } from 'lucide-react';

const InputRKATMockup1 = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Input RKAT</h2>
          <p className="text-gray-500 text-sm mt-1">Formulir Rencana Kerja dan Anggaran Tahunan</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Kode Lapangan */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kode Lapangan
              </label>
              <input
                type="text"
                placeholder="D 11"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Unit Kerja/Sub Unit */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Unit Kerja/Sub Unit
              </label>
              <input
                type="text"
                placeholder="IPNU"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Indikalisasi */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Indikalisasi
              </label>
              <input
                type="text"
                placeholder="Masukan indikalisasi"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Program/Kegiatan */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Program/Kegiatan
            </label>
            <div className="grid grid-cols-2 gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>NU</option>
                <option>Pilih NU 1</option>
                <option>Pilih NU 2</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>Pilih Sub NU</option>
                <option>Sub NU 1</option>
                <option>Sub NU 2</option>
              </select>
            </div>
          </div>

          {/* Tujuan */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tujuan
            </label>
            <textarea
              placeholder="Masukan tujuan"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            ></textarea>
          </div>

          {/* Mataanme & Rancangan */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mataanme & Rancangan
            </label>
            <textarea
              placeholder="Masukan mataanme & rancangan"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Julu Kegiatan */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Julu Kegiatan
              </label>
              <input
                type="text"
                placeholder="Masukan julu kegiatan"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Jadwal Pelaksanaan */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Jadwal Pelaksanaan
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2026-09-11"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* ICE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ICE
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>Pilih ICE</option>
                <option>ICE 1</option>
                <option>ICE 2</option>
              </select>
            </div>

            {/* Lokasi Pelaksanaan */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lokasi Pelaksanaan
              </label>
              <input
                type="text"
                placeholder="Masukan lokasi pelaksanaan"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Latar Belakang */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Latar Belakang
            </label>
            <textarea
              placeholder="Masukan latar belakang"
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            ></textarea>
          </div>

          {/* Indikator Kerja */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Indikator Kerja
            </label>
            <textarea
              placeholder="Tuliskan indikator kerja"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
              Batal
            </button>
            <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-medium shadow-lg">
              Simpan RKAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRKATMockup1;