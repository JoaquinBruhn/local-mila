import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/navbar/navbar";
import Home from "./components/navigation/home/home";
import Catalogue from "./components/navigation/catalogue/catalogue";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/catalogo" element={<Catalogue />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
