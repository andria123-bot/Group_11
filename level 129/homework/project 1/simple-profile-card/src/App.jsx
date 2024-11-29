import React from 'react';
import './App.css'; // Link to the CSS file

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img 
        src="https://via.placeholder.com/100" 
        alt="Andria Lezhava" 
        className="profile-image" 
      />
      <h1>Andria Lezhava</h1>
      <p className="age">15 Years Old</p>
      <p className="learning">Learning React</p>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>Lua</li>
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

export default App;
