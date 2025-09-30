import { useState } from 'react';
import { Palette } from 'lucide-react';

const MockupSelector = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mockups = [
    { 
      id: 'v1', 
      name: 'Desain 1: Teal Classic', 
      description: 'Desain klasik dengan warna teal dan cyan',
      preview: 'bg-gradient-to-r from-teal-500 to-cyan-500'
    },
    { 
      id: 'v2', 
      name: 'Desain 2: Blue Modern', 
      description: 'Desain modern dengan warna biru dan ungu',
      preview: 'bg-gradient-to-r from-blue-500 to-purple-500'
    },
    { 
      id: 'v3', 
      name: 'Desain 3: Dark Orange', 
      description: 'Desain gelap dengan warna orange dan merah',
      preview: 'bg-gradient-to-r from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80">
          <h3 className="font-bold text-gray-800 mb-4 text-lg">Pilih Desain Mockup</h3>
          <div className="space-y-3">
            {mockups.map((mockup) => (
              <button
                key={mockup.id}
                onClick={() => {
                  onSelect(mockup.id);
                  setIsOpen(false);
                }}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className={`w-full h-12 rounded-lg mb-3 ${mockup.preview}`}></div>
                <p className="font-bold text-gray-800 group-hover:text-blue-600">{mockup.name}</p>
                <p className="text-xs text-gray-500 mt-1">{mockup.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Palette className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};

export default MockupSelector;
