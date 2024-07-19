import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navb from "./Navb";
import Home from "./Home";
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import './sty.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navb />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
root.render(<App />);