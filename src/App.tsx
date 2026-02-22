import "./App.css";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Header } from "./components/layout/Header";
import { Tools } from "./components/Tools";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Tools />
    </>
  );
}

export default App;
