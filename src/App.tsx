import Header from "./sections/Header";
import Hero from "./sections/Hero";
import WhyAreWeDifferent from "./sections/WhyAreWeDifferent";
import CoffeeItems from "./sections/CoffeeItems";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import Feedback from "./sections/Feedback";
import AmazingMorning from "./sections/AmazingMoring";
import Discover from "./sections/Discover";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="bg-coffee relative text-white">
        <div className="hero-overlay"></div>
        <Header />
        <Hero />
      </div>

      <Discover />
      <CoffeeItems />
      <WhyAreWeDifferent />
      <AmazingMorning />
      <Feedback />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
