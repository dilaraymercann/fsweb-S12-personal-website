import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Skills />
    </>
  )
}

export default App
