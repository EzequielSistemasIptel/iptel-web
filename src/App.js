import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Slider />
        <Footer />
      </div>
    </>
  );
}

export default App;
