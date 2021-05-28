import React from 'react'
import PropTypes from 'prop-types'
import { FastField, Formik } from 'formik'

import './style.css'
import InputField from './../../custom-field/InputField/index';


function FormLogin(props) {
    const { changePosition, formPosition } = props;
    return (
        <div className={formPosition === "login" ? 'activelg' : ''}>
            <h1>Sign in</h1>
            <Formik >
                <form action="" className="formlogin">
                    <FastField
                        component={InputField}
                        label="user name"
                        name="username"
                    />
                    <FastField
                        component={InputField}
                        label="password"
                        name="password"
                    />
                    <div className="formlogin__bottom">
                        <button >sign in</button>
                        <h1>or</h1>
                        <p onClick={() => changePosition('sign')}>sign up</p>
                    </div>


                </form>
            </Formik>

        </div>
    )
}

FormLogin.propTypes = {

}

export default FormLogin

