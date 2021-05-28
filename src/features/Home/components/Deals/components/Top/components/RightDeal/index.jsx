import React from 'react'
import PropTypes from 'prop-types'
import { GrFormNextLink } from 'react-icons/gr';

import { FcNext, FcPrevious } from 'react-icons/fc';

import './style.css'

function RightDeal(props) {

    const { sliderNext, slickPrev } = props;
    return (
        <div className="deal__right">
            <button className="deal__right--btn"><a href="">see all catagories<GrFormNextLink /></a></button>
            <div>
                <FcPrevious className="prev"
                    onClick={slickPrev}
                />
                <FcNext className="next"
                    onClick={sliderNext}
                />
            </div>
        </div>
    )
}

RightDeal.propTypes = {

}

export default RightDeal

