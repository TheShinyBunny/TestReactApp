import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>ShinyBunny's website</h1>
        {this.props.children}
      </div>
    );
  }
}