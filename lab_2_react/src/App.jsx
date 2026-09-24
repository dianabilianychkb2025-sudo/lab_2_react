import { motion } from 'framer-motion';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <motion.div 
      className="cv-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </motion.div>
  );
}

export default App;