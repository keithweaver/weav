import React, { Component } from 'react';
import objectAssign from 'object-assign';

import TabNavbar from '../../elements/tabs/TabNavbar';
import Tab from '../../elements/tabs/Tab'

const wrapperStyle = {
  width: '100%',
  borderWidth: 1,
  borderColor: '#D8D8D8',
  borderRadius: 2,
  borderStyle: 'solid',
};

class TabPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: this.props.startingTab,
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({
      currentTab: tab,
    });
  }

  render() {
    const { tabs, style } = this.props;
    const { currentTab } = this.state;

    return (
      <div
        style={objectAssign({}, style, wrapperStyle)}
      >
        {this.props.header}
        <TabNavbar
          tabs={tabs}
          current={currentTab}
          navbarBackgroundColor="#D8D8D8"
          changeTab={this.changeTab}
        />
        <Tab>
          {this.props[currentTab]}
        </Tab>
      </div>
    );
  }
};

export default TabPage;
