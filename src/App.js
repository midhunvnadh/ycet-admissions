import { ParallaxProvider } from "react-scroll-parallax";

import Header from "./components/Header";
import Cs from "./components/Cs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ActionButton from "./components/ActionButton";
function App() {
  return (
    <ParallaxProvider>
      <Header />
      <Cs />
      <Contact />
      <Footer />
      <ActionButton />
    </ParallaxProvider>
  );
}

export default App;
