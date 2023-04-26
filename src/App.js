import DevelopmentTimeline from "./components/DevelopmentTimeline";
import RX7e from "./components/RX7e";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>




      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/development-timeline" element={<DevelopmentTimeline/>} />
        <Route path="/RX7e" element={<RX7e/>} />
        <Route path="/contact-form" element={<Contact/>} />
        <Route path="*" element={<Home/>} />
        <Route path="/projects" element={<ComingSoon/>} />
        <Route path="/services" element={<ComingSoon/>} />
        <Route path="/about" element={<ComingSoon/>} />
        <Route path="/shop" element={<ComingSoon/>} />
        <Route path="/account" element={<ComingSoon/>} />
        

      </Routes>
    </>
  );
}

export default App;
