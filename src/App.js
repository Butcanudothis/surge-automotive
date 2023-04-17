import DevelopmentTimeline from "./components/DevelopmentTimeline";
import RX7e from "./components/RX7e";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>




      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/development-timeline" element={<DevelopmentTimeline/>} />
        <Route path="/RX7e" element={<RX7e/>} />
      </Routes>
    </>
  );
}

export default App;
