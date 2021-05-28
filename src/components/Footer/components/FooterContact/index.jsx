import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { logoLink, linkContact } from '../../../../constants/gobal'

function FooterContact(props) {
    return (
        <div className='footer__contact'>
            <img src={logoLink} alt="" />
            <div className="footer__contact--main">
                <a href='' className="footer__contact--main-address"> address : jhf snhnd sdh n s</a>
                <a href="" className="footer__contact--main-phone">phone : 128 3466 933</a>
                <a href="" className="footer__contact--main-email">email : skhshdks.com</a>

            </div>
            <div className="footer__contact--gettouch">
                <h1>get in touch</h1>
                <div className="footer__contact--gettouch-list">
                    {
                        linkContact.map((item, index) => {
                            return <a href="">
                                <img src={item.src}
                                    key={index}
                                    alt="" />
                            </a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

FooterContact.propTypes = {

}

export default FooterContact

