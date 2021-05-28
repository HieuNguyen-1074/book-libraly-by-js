import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import FooterContact from './components/FooterContact'
import FooterAbout from './components/FooterAbout'
import FooterServices from './components/FooterServices/index';
import FooterInfor from './components/FooterInfor'
import FooterCopy from './components/FooterCopy'
function Footer(props) {
    return (
        <div className='footer'>
            <div className="footertop">
                <FooterContact />
                <FooterAbout />
                <FooterServices />
                <FooterInfor />
            </div>
            <FooterCopy />
        </div>
    )
}

Footer.propTypes = {

}

export default Footer

