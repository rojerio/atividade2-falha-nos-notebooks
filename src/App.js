import NavBar from "./components/NavBar";
import {BrowserRounter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import BanhoTosa from "./pages/BanhoTosa"

function App() {
  return (
    <>
      <header>
        <div className="container">
          <NavBar />

        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/banho-e-tosa" element={<BanhoTosa />}/>
        </Routes>
      </main>
      <BrowserRounter />
    </>
  );
}

export default App;
