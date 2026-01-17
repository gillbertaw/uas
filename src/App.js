import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import China from "./pages/china/China";
import Korea from "./pages/korea/Korea";
import FAQ from "./pages/faq/FAQ";
import ComingSoon from "./pages/common/ComingSoon";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import SignUp from "./pages/auth/SignUp";
import ListTicket from "./pages/ticket/ListTicket";

import Favorite from "./pages/favorite/Favorite";

import Malaysia from "./pages/malaysia/Malaysia";
import KualaLumpur from "./pages/malaysia/KualaLumpur";
import Penang from "./pages/malaysia/Penang";
import Langkawi from "./pages/malaysia/Langkawi";

import Singapore from "./pages/singapore/Singapore";
import MarinaBay from "./pages/singapore/MarinaBay";
import Sentosa from "./pages/singapore/Sentosa";
import ChinaTown from "./pages/singapore/ChinaTown";

import Thailand from "./pages/thailand/Thailand";
import ChiangMai from "./pages/thailand/ChiangMai";
import Krabi from "./pages/thailand/Krabi";
import Bangkok from "./pages/thailand/Bangkok";

import Vietnam from "./pages/vietnam/Vietnam";
import Hanoi from "./pages/vietnam/Hanoi";
import HaLongBay from "./pages/vietnam/HaLongBay";
import HoiAn from "./pages/vietnam/HoiAn";

import Australia from "./pages/australia/Australia";
import Swizz from "pages/switzerland/Swizz";

import WhatsAppBubble from "./components/WhatsAppBubble";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/china" element={<China />} />
            <Route path="/korea" element={<Korea />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/favorite" element={<Favorite />} />

            <Route path="/australia" element={<Australia />} />
            <Route path="/switzerland" element={<Swizz />} />

            <Route path="/malaysia" element={<Malaysia />} />
            <Route path="/malaysia/kuala-lumpur" element={<KualaLumpur />} />
            <Route path="/malaysia/penang" element={<Penang />} />
            <Route path="/malaysia/langkawi" element={<Langkawi />} />

            <Route path="/singapore" element={<Singapore />} />
            <Route path="/singapore/marina-bay" element={<MarinaBay />} />
            <Route path="/singapore/sentosa" element={<Sentosa />} />
            <Route path="/singapore/chinatown" element={<ChinaTown />} />

            <Route path="/thailand" element={<Thailand />} />
            <Route path="/thailand/chiang-mai" element={<ChiangMai />} />
            <Route path="/thailand/krabi" element={<Krabi />} />
            <Route path="/thailand/bangkok" element={<Bangkok />} />

            <Route path="/vietnam" element={<Vietnam />} />
            <Route path="/vietnam/hanoi" element={<Hanoi />} />
            <Route path="/vietnam/ha-long-bay" element={<HaLongBay />} />
            <Route path="/vietnam/hoi-an" element={<HoiAn />} />

            {/* fallback to home */}
            <Route path="*" element={<ComingSoon />} />

            <Route path="/login" element={<Login />} />
            <Route path="/forgotpass" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/list-ticket" element={<ListTicket />} />
          </Routes>
          <WhatsAppBubble />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
