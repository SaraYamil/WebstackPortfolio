import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import News from "./pages/news";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Module from "./pages/module";
import View from "./pages/view";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/view" element={<View />} />
      </Routes>
      <Footer />
      <Module />
    </Router>
  );
}

export default App;
