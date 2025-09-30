import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MockupSelector from "./components/MockupSelector";

// Pages
import Dashboard from "./pages/Dashboard";
import Persetujuan from "./pages/Persetujuan";
import Monitoring from "./pages/Monitoring";
import BuatAkun from "./pages/BuatAkun";
import Profil from "./pages/Profil";

// Mockups
import InputRKATMockup1 from "./mockups/InputRKATMockup1";
import InputRKATMockup2 from "./mockups/InputRKATMockup2";
import InputRKATMockup3 from "./mockups/InputRKATMockup3";

function App() {
  const [variant, setVariant] = useState('v1');

  const Layout = ({ children, title }) => (
    <div className="flex min-h-screen">
      <Sidebar variant={variant} />
      <div className="flex-1">
        <Header title={title} variant={variant} />
        {children}
      </div>
      <MockupSelector onSelect={setVariant} />
    </div>
  );

  // Input RKAT page with three mockup variants
  const InputRKATPage = () => {
    if (variant === 'v1') {
      return <Layout title="Input RKAT"><InputRKATMockup1 /></Layout>;
    } else if (variant === 'v2') {
      return <Layout title="Input RKAT"><InputRKATMockup2 /></Layout>;
    } else {
      return <Layout title="Input RKAT"><InputRKATMockup3 /></Layout>;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout title="Dashboard"><Dashboard variant={variant} /></Layout>} />
          <Route path="/input-rkat" element={<InputRKATPage />} />
          <Route path="/persetujuan" element={<Layout title="Persetujuan"><Persetujuan variant={variant} /></Layout>} />
          <Route path="/monitoring" element={<Layout title="Monitoring"><Monitoring variant={variant} /></Layout>} />
          <Route path="/buat-akun" element={<Layout title="Buat Akun"><BuatAkun variant={variant} /></Layout>} />
          <Route path="/profil" element={<Layout title="Profil"><Profil variant={variant} /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
