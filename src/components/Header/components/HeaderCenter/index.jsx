import React from 'react'
import PropTypes from 'prop-types'


import { Formik, FastField } from 'formik';
import { logoLink } from '../../../../constants/gobal';
import { BsSearch } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import InputField from './../../../../custom-field/InputField/index';


import './style.css'
import Users from '../../../Users';
import Cart from '../../../Cart';

function HeaderCenter(props) {
    return (
        <div className='header__center'>

            <img src={logoLink} alt="" className='header__center--logo' />

            <Formik>
                <form className='header__center--form' >
                    <FastField
                        name='search'
                        type='text'
                        component={InputField}
                        placeholder='Search.....'


                    />

                    <button><BsSearch /></button>
                </form>
            </Formik>
            <div className='header__center--right'>
                <Cart />
                <Users />
                <div className='help'>
                    <p>service/help</p>
                    <IoMdArrowDropdown />
                </div>
            </div>


        </div>
    )
}

HeaderCenter.propTypes = {

}

export default HeaderCenter

