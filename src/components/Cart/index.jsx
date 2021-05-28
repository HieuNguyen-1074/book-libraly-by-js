import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { headerContent } from '../../constants/gobal/index'
import './style.css'
import CartList from './components/CartList';

function Cart(props) {

    const [isOpen, setIsOpen] = useState(false);

    const { cartContent } = headerContent;

    const closeCart = () => {
        setIsOpen(false);
        console.log(isOpen);
    }
    const openCart = () => {
        setIsOpen(true);
        console.log(isOpen);
    }
    return (
        <div className='cart'>
            <div>
                <img src={cartContent.src} alt=""
                    onClick={openCart}
                />
                <p
                    onClick={openCart}


                >{cartContent.content}</p>
                <CartList

                    isOpen={isOpen}
                    closeCart={closeCart}
                // onClick={closeCart}


                />
            </div>
        </div>
    )
}

Cart.propTypes = {

}

export default Cart

