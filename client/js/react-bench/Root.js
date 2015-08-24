import {default as React, Component} from 'react';
import root from 'immutable-di/react/root';
import Items from './Items';

@root
class Root extends React.Component {
  render () {
    return <Items />
  }
}

export default Root;
