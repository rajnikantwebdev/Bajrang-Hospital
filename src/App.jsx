import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import HeartPage from "./pages/HeartPage";
import StcikyNavbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <StcikyNavbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/heart" element={<HeartPage/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
