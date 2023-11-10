import {HashRouter, Routes, Route} from 'react-router-dom';
import './components/style.css'
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home , About, sidebar} from './components/Navcomponents';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
