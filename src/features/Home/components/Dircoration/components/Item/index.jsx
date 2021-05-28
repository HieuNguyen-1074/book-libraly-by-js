import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function Item(props) {
    const { img } = props;
    return (
        <div className="decroration__item">
            <div className="decroration__item--left">
                <img src={img} alt="" />
                <p className="price">
                    $99
              </p>
            </div>
            <div className="decroration__item--right">
                <p>#new arrivals</p>
                <h1>restrostrar footstool</h1>
                <button>shop now</button>
            </div>
        </div>
    )
}

Item.propTypes = {

}

export default Item

