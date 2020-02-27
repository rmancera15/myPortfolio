import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import IntroComponent from './components/intro/IntroComponent';

function App() {
  return (
    <div className="App">
             <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent/>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <IntroComponent/>
            </div>
          </div>
    </div>
  );
}

export default App;
