import "./App.css";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
}

export default App;
