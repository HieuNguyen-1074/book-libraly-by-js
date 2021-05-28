import React from 'react'
import PropTypes from 'prop-types'

import { Input } from 'reactstrap';
import { TextField } from '@material-ui/core'


function InputField(props) {

    const { name, type, placeholder, label } = props
    console.log(label, name);
    return (
        <>
            {(label ? <label for={name}>{label}</label> : '')}
            <Input type={type}
                name={name}
                style={{ outline: "none !important" }}

                placeholder={placeholder} variant="outlined" />



        </>
    )
}

InputField.propTypes = {

}

export default InputField

