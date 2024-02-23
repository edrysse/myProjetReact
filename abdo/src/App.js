import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Home2 from './components/Home2';

function App() {
  return (
    <BrowserRouter>
   
    <Header/>
      <Routes>
        {/* <Route path="/home2" element={<Home2/>} /> */}

        <Route path="/" element={<Home/>}/>
   
   
        








        <Route path="/products" element={<div><Product/></div>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
