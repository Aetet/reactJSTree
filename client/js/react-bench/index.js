import {default as React} from 'react';
import Root from './Root';
import Container from 'immutable-di';
import NativeCursor from 'immutable-di/cursors/native';


function generateItems(num) {
  var res = {
    items: {},
    keys: []
  };
  for (var i = 0; i < num; i++) {
    res.items['item' + i] = {
      active: false,
      name: 'i' + i
    };
    res.keys.push('item' + i);
  }
  return res;
}


let res = generateItems(5000);
const container = new Container(new NativeCursor(res));

React.render(<Root container={container} />, document.querySelectorAll('.app')[0])
