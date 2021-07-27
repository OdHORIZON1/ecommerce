import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Cart from './cart';

const Nav = ({ totalItems, cartt, handleQuantityUpdate, handleRemoveItem, emptyCart })=>{

    const[bool, setBool] = useState(false);
    const handleClick  =(e)=>{
        e.preventDefault();
        setBool(!bool);
    }
    return(
        <header className="header">
            <div className="logo"><a href="#">OdeCOMMERCE</a></div>
            <div className="cartt" onClick={handleClick}><span className="number">{totalItems}</span><FaShoppingCart /></div>
            {bool && <div className="hidden-cart">
            <Cart 
            handleQuantityUpdate={handleQuantityUpdate}
            handleRemoveItem={handleRemoveItem}
            emptyCart={emptyCart} 
            cart2={cartt}/>
            </div>}
        </header>
    );
}

export default Nav;