import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Homepage from './Homepage'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  // const [count, setCount] = useState(Homepage)

  return (
    <div className='appbody'>
      <Header />
      <Homepage />
      <Projects />
      <Contact /> 
    </div>
  );
};

export default App;
