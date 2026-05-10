import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./sections/Products/Products";

import Tech from "./sections/Tech/Tech";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />

      <Tech />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
