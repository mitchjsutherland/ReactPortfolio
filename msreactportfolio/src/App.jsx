import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header'
import Homepage from './Homepage'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  // const [count, setCount] = useState(Homepage)

  return (
    <Router>
      <div className='appbody'>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
