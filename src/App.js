import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Credit from './Credit';
import Resources from './Resources';
import Conference from './Conference';
import Training from './Training';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <header style={{ backgroundColor: '#333', padding: '1rem' }}>
        <nav>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            backgroundColor: '#0066cc',
            padding: '1rem'
          }}>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/">Home</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/about">About Us</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/credit">Credit Information Sharing</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/resources">Resources</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/conference">Conference</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/training">Training</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;