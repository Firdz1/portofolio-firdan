import React, { Profiler } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Footer from "./components/Footer";
import Riwayat from "./components/Riwayat";
const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <About />
      <Riwayat />
      <Footer />
    </div>
  );
};

export default App;
