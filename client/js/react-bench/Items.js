import {default as React, Component} from 'react';
import statefull from 'immutable-di/react/statefull';
import Item from './Item';

import {Getter, Facet, Factory, Setter, Apply} from 'immutable-di/define'


function shuffle(a){
  var o = a.concat();
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

let HandleClick = Factory({
  keys: ['keys'],
  items: ['items'],
  setItems: Setter(['items'])
})(function ({items, keys, setItems}) {
  return function (fakeId) {
    let id = keys[fakeId];
    let {active, name} = items[id];
    items[id] = {name, active: !active};
    setItems({...items});
  }
});

let HandleSort = Factory({
  applyItems: Apply(['keys']),
  items: ['items']
})(function ({applyItems}) {
  return function () {
    applyItems(function (keys) {
      let res = shuffle(keys);
      return res
    });
  }
})


@statefull({
  items: ['items'],
  keys: ['keys'],
  handleClick: HandleClick,
  handleSort: HandleSort
})
class Items extends React.Component {
  render () {
    let {items, keys, handleClick, handleSort} = this.props;
    let itemViews = keys.map((id, idx) => {
      let item = items[id];
      return (<Item {...item} handleClick={handleClick.bind(this, idx)} key={item.name}/>)
    });

    return (
      <div>
        {itemViews}
        <div onClick={handleSort}>Sorter</div>
      </div>
    )
  }
}

export default Items;
