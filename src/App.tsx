import { Routes, Route } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
    </Routes>
  );
}

export default App;
