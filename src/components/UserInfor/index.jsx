import React from 'react'
import PropTypes from 'prop-types'

import "./style.css";
import { FastField, Formik } from 'formik';
import FileField from './../../custom-field/FileField/index';

function UserInfor(props) {
    const { isOpenUser } = props;
    console.log(isOpenUser);
    return (

        <div className="user__infor">

        </div>
    )
}

UserInfor.propTypes = {

}

export default UserInfor

