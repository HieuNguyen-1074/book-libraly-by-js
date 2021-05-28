import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

function ItemWrapper(props) {
    const { src, content } = props;
    return (
        <div className='wrapper__item'>
            <img src={src} style={{ width: '100%' }}
                alt="" />
        </div>
    )
}

ItemWrapper.propTypes = {

}

export default ItemWrapper

