import React from 'react'
import PropTypes from 'prop-types'
import RightDeal from './components/RightDeal/index';
import './style.css'

function TopDeal(props) {
    const { sliderNext, slickPrev } = props;
    return (
        <div className="deal__top">
            <h1>Top's deal</h1>
            <RightDeal
                sliderNext={sliderNext}
                slickPrev={slickPrev}
            />
        </div>
    )
}

TopDeal.propTypes = {

}

export default TopDeal

