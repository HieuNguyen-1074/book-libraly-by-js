import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormLogin from '../FormLogin'
import FormSign from '../FormSign'
import './style.css'

import { FaTimes } from 'react-icons/fa';

function FormMain(props) {

    const { handleForm, isOpen } = props;

    const [formPosition, setFormPosition] = useState('login');



    const changePosition = (position) => {
        setFormPosition(position);
        console.log(position);

    }

    return (
        <div className="formmain"
            style={{ display: `${isOpen ? 'unset' : 'none'}` }}
        >
            <FaTimes

                className="formmain__icon"
                onClick={() => handleForm(false)}

            />
            <div className="container">

                <FormLogin
                    formPosition={formPosition}
                    changePosition={changePosition}
                />
                <FormSign
                    formPosition={formPosition}
                    changePosition={changePosition}
                />
            </div>

        </div >
    )
}

FormMain.propTypes = {

}

export default FormMain

