import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[url('./assets/Homepage-rx7-image-small.webp')] lg:bg-[url('./assets/Homepage-rx7-image-large.webp')] h-screen bg-cover bg-center">
      <Navbar />
      <Model />
    </div>
  );
}

export default App;
