import React, { Component } from 'react';

import TopRow from './TopRow';
import InstallRow from './InstallRow';
// import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <TopRow />
        <InstallRow />
      </div>
    );
  }
}

export default App;
