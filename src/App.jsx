import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Skills />
      <Profile />
    </>
  )
}

export default App
