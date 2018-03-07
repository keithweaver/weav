import React, { Component } from 'react';

import TopRow from './TopRow';
import InstallRow from './InstallRow';
import CodeDemoRow from './CodeDemoRow';
import FooterRow from './FooterRow';
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
     *  textbox
     *
     *  [test]
     *
     *  <Textbox />
     *
     * -
     *
     * copyright
     */
    return (
      <div>
        <TopRow />
        <InstallRow />
        <CodeDemoRow />
        <FooterRow />
      </div>
    );
  }
}

export default App;
