import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <h1>Welcome to Our Website</h1>
        <nav>
          <ul
          backgroud ="Blue"
          colour ="white" >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/credit">Credit Information Sharing</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/conference">Conference</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main>
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
