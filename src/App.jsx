import React from 'react';
import './App.css';
import NavigationContainer from './containers/NavigationContainer';
import MainComponent from './containers/MainComponent';
import './styles/reset.css';
import './styles/style.css';

function App() {
  return (
    <div className="root-app-wrapper">
      <div className="navigation-container">
        <NavigationContainer />
      </div>
      <div className="main-container">
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
