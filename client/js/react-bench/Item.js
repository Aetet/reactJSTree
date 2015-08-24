import {default as React, Component} from 'react';
import cn from 'classnames';

class Item extends React.Component {
  shouldComponentUpdate(nextProps) {
    let {name, active} = nextProps
    return !(name === this.props.name && active === this.props.active)
  }
  render () {
    let {name, active, handleClick} = this.props;

    let classes = cn('item_container', {'item_container_selected': active});
    return (
      <span onClick={handleClick} className={classes}>{name}</span>
    );
  }
}

export default Item;
