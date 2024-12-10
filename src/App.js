import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from './Home';

function App() {
  return (
    <Router>
      <header>
        <nav style={{
          backgroundColor: '#0066cc',
          padding: '1rem'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '1.5rem' }} to="/">Home</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/about">About Us</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/credit">Credit Information Sharing</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/resources">Resources</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/conference">Conference</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/training">Training</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }} to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;