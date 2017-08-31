import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDisplay from './ItemDisplay';
import Nav from './Nav';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemDisplay/>
        <Nav/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(App);
