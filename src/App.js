import React, { Component } from 'react';

import TopRow from './TopRow';
import InstallRow from './InstallRow';
import CodeDemoRow from './CodeDemoRow';
// import logo from './logo.svg';


class App extends Component {
  render() {
    /*
     * Page layout:
     * -
     *
     *    weav
     *    about
     *
     * -
     *    npm install
     * -
     *
     */
    return (
      <div>
        <TopRow />
        <InstallRow />
        <CodeDemoRow />
      </div>
    );
  }
}

export default App;
