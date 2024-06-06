import { Outlet } from "react-router-dom";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1600px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className="root">
      <main>
        <ScrollToTop />
        <Outlet />
        <Footer />
        {isTabletOrMobile && <Navbar />}
      </main>
    </div>
  );
}

export default App;
