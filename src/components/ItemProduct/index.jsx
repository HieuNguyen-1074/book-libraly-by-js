import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { RiShoppingCart2Line } from 'react-icons/ri';


function ItemProduct(props) {
    const { src, percent, name, stars, id, price } = props;
    return (
        <div className="product__item">
            <div className="product__item--img">
                <img src={src} alt="" />
            </div>
            <p>-25%</p>
            <div className="product__item--infor">
                <h1>medusa side chair</h1>
                <div className="product__item--infor-rate">
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />

                </div>
                <div className="product__item--infor-bottom">
                    <h1>$32.89</h1>
                    <RiShoppingCart2Line />
                </div>

            </div>
        </div>
    )
}

ItemProduct.propTypes = {

}

export default ItemProduct

