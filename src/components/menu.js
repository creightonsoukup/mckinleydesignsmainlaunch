import React, {Component} from 'react';
import { Button } from 'reactstrap'

const Menu = ({toggleMenu}) => {

    return (
      <div className='menu'>
        <Button
        onClick={toggleMenu}>Close</Button>
        test
      </div>
    )

}

export default Menu
