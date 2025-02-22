import About from "./components/About";
import CompanyLogo from "./components/CompanyLogo";
import CustomerReview from "./components/CustomerReview";
import DesignSection from "./components/DesignSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Features />
      <DesignSection />
      <CustomerReview />
      <About />
      <Footer />
    </>
  );
};

export default App;
