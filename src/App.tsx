import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './components/common/AnimatedRoutes/AnimatedRoutes';
import Navbar from './components/common/NavBar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
