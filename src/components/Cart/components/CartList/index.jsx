import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import CartListItem from './components/CartListItem'
import { FaTimes } from 'react-icons/fa';
import { logoImg, productItems } from '../../../../constants/image';
import CartListPay from './components/CartListPay';

function CartList(props) {
    const { closeCart, isOpen } = props;

    return (
        <div className={isOpen ? 'cart__list active' : 'cart__list'} >
            <div className="container">
                <div className="cart__list--content">
                    <div className="cart__list--content-top">
                        <img src={logoImg} alt="" />
                        <h1>cart</h1>
                        <FaTimes
                            onClick={closeCart}
                        />

                    </div>
                    <div className="cart__list--content-main">
                        {
                            productItems.map((item, index) => {
                                return <CartListItem
                                    key={index}
                                    img={item.src}
                                />
                            })
                        }
                    </div>
                </div>
                <CartListPay />

            </div>
        </ div>
    )
}

CartList.propTypes = {

}

export default CartList

