// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fetch from "./components/Fetch";
import Cointainer from "./components/Cointainer";
// import Hero from "./components/cointainer/Hero";


function App() {
  const location = useLocation();
  return (
    <>
<Header />
      {/* <Cointainer /> */}
      {location.pathname !== "/fetch" && <Cointainer />}

     
      <Routes>
        
        <Route path="/fetch" element={<Fetch />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
