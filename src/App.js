import React from 'react';
import './App.css';

function App() {
  return (
    <div className="milestone-card">
      
      {/* GitHub Icon */}
      <img 
        src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/github-icon.svg" 
        alt="GitHub Icon" 
        className="milestone-icon"
      />
            
      {/* Title with data-testid for testing */}
      <h1 className="milestone-title" data-testid="project-title">
        Module 1: Git & Deployment
      </h1>
      
      {/* The Story */}
      <p className="milestone-story">
        Our Module 1 is all about learning Git and deploying the basic frontend of our desired project from GitHub Pages. Guided by Prof. Ashesh K, I moved from simply knowing Git commands to understanding when, why, and how to use them. This repo marks that milestone — our first live, working frontend for the world to see.
      </p>
      
      {/* Student Information */}
      <div className="student-info">
        <p className="student-name">R.V. Chandra Sekhara Raju</p>
        <p className="student-id">ID: 2300031237</p>
      </div>

      {/* Guide Information */}
      <div className="guide-info">
        <p>Guided by Prof. Ashesh K</p>
      </div>

    </div>
  );
}

export default App;