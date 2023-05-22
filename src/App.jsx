import './App.css';
import Footer from './UI/Footer';
import Header from './UI/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Project from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
