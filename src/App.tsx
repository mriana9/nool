import "./App.css";
import { CTASection } from "./components/CTASection";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Tools } from "./components/Tools";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Tools />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
