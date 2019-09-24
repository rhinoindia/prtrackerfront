import React from 'react';
import './App.css';
import NavigationContainer from './containers/NavigationContainer';
import MainContainer from './containers/MainContainer';
import './styles/reset.css';
import './styles/style.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

function App() {
  return (
    <div className="root-app-wrapper">
      <div className="navigation-container">
        <NavigationContainer />
      </div>
      <div className="main-container">
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
