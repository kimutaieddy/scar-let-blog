import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <header>
        <h1>Welcome to Our Website</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Credit Information Sharing</li>
            <li>Resources</li>
            <li>Conference</li>
            <li>Training</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Select a section to explore more about what we offer.</p>
      </main>
    </div>
  );
}

export default App;
