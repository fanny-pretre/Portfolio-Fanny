import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="root">
      <main>
        <Outlet />
        <Footer />
        <Navbar />
      </main>
    </div>
  );
}

export default App;
