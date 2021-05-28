import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Button } from '@material-ui/core';
import InputField from './../../../../../../custom-field/InputField/index';

import { FaPlus, FaRegWindowMinimize } from 'react-icons/fa';

function CartListItem(props) {
    const { img } = props;
    return (
        <div className='cart__list--item'>
            <div className="cart__list--item-infor">
                <img src={img} alt="" />
                <div className="cart__list--item-infor-main">
                    <h1>some name</h1>
                    <p variant="outlined">$99</p>
                    <Button variant="contained" color="#ed6c63">
                        remove
                    </Button>

                </div>
            </div>
            <div className="cart__list--item-quality">
                <h1>quality</h1>
                <div className="cart__list--item-quality-main">
                    <FaPlus />
                    <Button variant="outlined" >
                        3
                    </Button>
                    <FaRegWindowMinimize />
                </div>
                {/* <div className="cart__list--item-quality-main">

                </div> */}
            </div>
            <div className="cart__list--item-quality">
                <h1>price</h1>
                <Button variant="outlined">$99</Button>
            </div>
            <div className="cart__list--item-quality">
                <h1>total</h1>

                <Button variant="outlined">$999</Button>
            </div>

        </div>
    )
}

CartListItem.propTypes = {

}

export default CartListItem

