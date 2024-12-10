import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header style={{ backgroundColor: '#333', padding: '1rem' }}>
        <h1 style={{ color: 'white', textAlign: 'center', margin: '0 0 1rem' }}>
          Welcome to Our Website
        </h1>
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
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About Us</h2>} />
          <Route path="/credit" element={<h2>Credit Information Sharing</h2>} />
          <Route path="/resources" element={<h2>Resources</h2>} />
          <Route path="/conference" element={<h2>Conference</h2>} />
          <Route path="/training" element={<h2>Training</h2>} />
          <Route path="/contact" element={<h2>Contact Us</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
