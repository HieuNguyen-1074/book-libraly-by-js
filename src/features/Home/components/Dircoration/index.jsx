import React from 'react'
import PropTypes from 'prop-types'
import { dcContent } from '../../../../constants/gobal'
import Item from './components/Item';

import './style.css'
function Dircoration(props) {

    let dc = [];
    for (const key in dcContent) {
        dc.push(dcContent[key])
    }

    return (
        <div className="decroration">
            {
                dc.map((item, index) => {
                    return <Item
                        key={index}
                        img={item.src}
                    />
                })
            }

        </div>
    )
}

Dircoration.propTypes = {

}

export default Dircoration

