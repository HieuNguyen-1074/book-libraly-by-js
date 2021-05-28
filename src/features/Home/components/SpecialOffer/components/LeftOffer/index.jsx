import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function LeftOffer(props) {
    return (
        <div className="offer__left">
            <h1>special offer</h1>
            <h2>Regererd members</h2>
            <h3>get 10% discount in 2 order</h3>
            <button className="offer__left--btn">explore shop</button>
        </div>
    )
}

LeftOffer.propTypes = {

}

export default LeftOffer

