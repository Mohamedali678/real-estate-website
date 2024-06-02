import Country from "./components/Country"
import Discover from "./components/Discover"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"


function App() {

  return <div className="overflow-hidden">
    <Header />
    <Hero />
    <Country />
    <WhyChooseUs />
    <Discover />
    <Services />
    <Footer />
  </div>
}
export default App
