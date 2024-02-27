import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Blog from './pages/Blogs/Blog';
import About from './pages/aboutus/About';
import Contactus from './pages/contactus/Contactus';
import Footer from './pages/Footer';
import EachBlog from './pages/Blogs/EachBlog';
import Products from './pages/products/Products';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/blogs/:id" element={<EachBlog />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
