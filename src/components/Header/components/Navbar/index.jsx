import React from 'react'
import PropTypes from 'prop-types'
import { navbarLink } from '../../../../constants/gobal'

import './style.css'


function Navbar(props) {

    let navbar = [];
    for (const key in navbarLink) {
        navbar.push(navbarLink[key])
    }
    console.log(navbar);




    return (
        <div className='navbar'>
            <ul>
                {
                    navbar.map((link, index) => {

                        return <li key={index}>
                            <a href={link.src}>
                                {link.title}
                            </a>
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar

