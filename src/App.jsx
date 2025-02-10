import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Navbar from "./components/Navbar";
import Contactpage from "./components/Contactpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        {/* Catch-all route to handle unknown routes */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
