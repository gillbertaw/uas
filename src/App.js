import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Australia from "./pages/Australia";
import Swizz from "./pages/Swizz";
import UserMember from "./pages/UserMember";
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/china" element={<China />} />
          <Route path="/korea" element={<Korea />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/swizz" element={<Swizz />} />
          <Route path="/user-member" element={<UserMember />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;

