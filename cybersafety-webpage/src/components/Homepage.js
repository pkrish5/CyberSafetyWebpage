import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple homepage created with React.js.</p>
      </main>
    </div>
  );
}

export default Homepage;

