import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        {/* Catch-all route to handle unknown routes */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
