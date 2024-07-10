import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Registrar } from "./components/Registrar";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Registrar" element={<Registrar />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
