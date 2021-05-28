import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
function SelectField(props) {
  
    const {options} = props;
    return (
        <>
            <Select options={options}>


            </Select>
        </>
    )
}

SelectField.propTypes = {

}

export default SelectField

