import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Reviews/>
      <Footer/>
    </>
  );
}
