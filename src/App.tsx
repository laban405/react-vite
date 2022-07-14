import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './routes/AnimatedRoutes';
import Navbar from './components/common/NavBar/Navbar';

function App() {

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
