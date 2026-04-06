import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from './components/Footer';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </DarkModeProvider>
  )
}

export default App
