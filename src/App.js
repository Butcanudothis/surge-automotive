import DevelopmentTimeline from "./components/DevelopmentTimeline";
import RX7e from "./components/RX7e";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>




      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/development-timeline" element={<DevelopmentTimeline/>} />
        <Route path="/RX7e" element={<RX7e/>} />
        <Route path="/contact-form" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
