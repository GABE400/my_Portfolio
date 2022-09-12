import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ScrollToTop />
        <Header />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
