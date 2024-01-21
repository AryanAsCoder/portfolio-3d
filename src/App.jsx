import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import {Home, About, Projects, Contact} from './pages'
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
