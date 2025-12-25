import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Commit/Details';
import Header from './Commit/Header';
import Footer from './Commit/Footer';
import Enquiry from './Commit/Enquiry';
import Notfound from './Commit/Notfound';
import About from './Commit/About';
import Products from './Commit/Products';
import Home from './Commit/Home';
import Privacy from './Commit/Privacy';
import Trems from './Commit/Trems';
import Product3DStl from './Commit/Product3DStl';

function App() {
  return (
    <div className="App">

      <Header />
     <Routes>
      <Route path='*' element={<Notfound />} />
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<Details />} />
      <Route path='/enquiry' element={<Enquiry />}/>
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/terms' element={<Trems />} />
      <Route path='/3d' element={<Product3DStl />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
