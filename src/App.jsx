import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from './components/Footer';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { MessageProvider } from './contexts/MessageContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="overflow-x-hidden">
      <DarkModeProvider>
        <LanguageProvider>
          <MessageProvider>
            <Header />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
            <ToastContainer position="top-right" />
          </MessageProvider>
        </LanguageProvider>
      </DarkModeProvider>
    </div>
  )
}

export default App
