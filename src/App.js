import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Commit/Details';
import Header from './Commit/Header';
import Footer from './Commit/Footer';
import Enquiry from './Commit/Enquiry';
import Notfound from './Commit/Notfound';
import Contact from './Commit/Contact';
import About from './Commit/About';
import Products from './Commit/Products';

function App() {
  return (
    <div className="App">

      <Header />
     <Routes>
      <Route path='*' element={<Notfound />} />
      <Route path='/' element={<Details />} />
      <Route path='/enquiry' element={<Enquiry />}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
