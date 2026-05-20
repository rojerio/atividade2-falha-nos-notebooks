import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import BanhoTosa from "./pages/BanhoTosa";
import Adestramento from "./pages/Adestramento";
import HotelRisorte from "./pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="container">
          <NavBar />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/banho-e-tosa" element={<BanhoTosa />}/>
          <Route path="/adestramento" element={<Adestramento />}/>
          <Route path="/hotel-risorte" element={<HotelRisorte />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;