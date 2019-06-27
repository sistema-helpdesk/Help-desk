import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../css/styles.css';

export default props => {
  return (
    <Menu {...props}>
      <Link to="/">{'Main'}</Link>
      <Link to="/lista">{'Lista'}</Link>
      {/* <Link to="/">{'Logout'}</Link> */}
    </Menu>
  );
}
