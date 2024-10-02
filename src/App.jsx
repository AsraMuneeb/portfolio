import { useState, useEffect} from 'react'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/light/Navbar'
import Home from './components/light/Home'
import About from './components/light/About'
import Tools from './components/light/Tools'
import Projects from './components/light/Projects'
import Contact from './components/light/Contact'
import DarkNavBar from './components/dark/Navbar';
import DarkHome from './components/dark/Home';
import DarkAbout from './components/dark/About';
import DarkTools from './components/dark/Tools';
import DarkProjects from './components/dark/Projects';
import DarkContact from './components/dark/Contact';

function App() {

  const [activeSection, setActiveSection] = useState('home'); // Track the active section
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save the user's theme preference in localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5, // 50% of the section needs to be visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <div className='app'>
        <NavBar activeSection={activeSection}></NavBar>
        <label class="switch">
  <input type="checkbox" checked={isDarkMode} onChange={handleThemeSwitch}/>
  <span class="slider round"></span>
</label>
      <section className='home' id='home'>
      {isDarkMode ? <DarkHome /> : <Home />}
      </section>
      <section className="about" id='about'>
      {isDarkMode ? <DarkAbout /> : <About />}
      </section>
      <section className="tools" id='tools'>
      {isDarkMode ? <DarkTools /> : <Tools />}
      </section>
      <section className="projects" id='projects'>
      {isDarkMode ? <DarkProjects /> : <Projects />}
      </section>
      <section className="contact" id='contact'>
      {isDarkMode ? <DarkContact /> : <Contact />}

      </section>
      </div>
  )
};

export default App;
