import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/footer'
import Bubble from './components/bubble';
import Personal from './components/personal'
import Work from './components/work'
// import './App.css'

function App() {
  return (
    <div>
      <Personal/>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work/>
      <Projects />
      <Contact />
      <Footer/>
      <Bubble/>
    </div>
  );
}

export default App;