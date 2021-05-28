import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

function LeftWrapper(props) {
    return (
        <div className='wrapper__left'>
            <p>new arrivals 2020</p>
            <h1>design furniture <br />
           flite collection
           </h1>
            <h3>Special offer 15% dining table , chair </h3>
            <button>shop now</button>
        </div>
    )
}

LeftWrapper.propTypes = {

}

export default LeftWrapper

