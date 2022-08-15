
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Form from './components/Form/Form';
import { useGlobalContext } from './context';

function App() {
  const {darkMode} = useGlobalContext()
  
  console.log(darkMode)
  return (
    <div className={`main-app ${darkMode ? 'dark-theme' : ''}`}>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Testimonials/>
      <Sidebar/>
      <Skills/>
      <Form/>
    </div>
  );
}

export default App;
