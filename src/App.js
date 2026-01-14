import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import About from "./pages/About";
import China from "./pages/China";
import Korea from "./pages/Korea";
import FAQ from "./pages/FAQ";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/china" element={<China />} />
          <Route path="/korea" element={<Korea />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;

