import React, { Component } from 'react';
import Header from '../components/Header';
import PrListContainer from '../components/PrListContainer'

class MainComponent extends Component {
    state={};

    render() {
      return (
        <div className="header-container">
          <Header />
          <PrListContainer />
        </div>
      );
    }
}

export default MainComponent;