import "./App.css";
import ChannelSection from "./components/channelSection/ChannelSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ServicesSection from "./components/servicesSection/ServicesSection";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Slider />
        <ServicesSection />
        <ChannelSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
