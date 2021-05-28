import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import InputField from '../../../../../../custom-field/InputField'
import { Formik } from 'formik'
import SelectField from '../../../../../../custom-field/SelectField'

function CartListPay(props) {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <Formik>
            <form >
                <div className="cart__list--pay">
                    <h1>payments</h1>

                    <div className="cart__list--pay-top">
                        <p>item <span>3</span></p>
                        <p>$9999</p>
                    </div>
                    <div className="cart__list--pay-ship">
                        <h1>shipping</h1>
                        <SelectField
                            options={options}

                        />
                    </div>
                    <div className="cart__list--pay-promo">
                        <h1>promo code</h1>
                        <InputField />

                    </div>
                    <button>checkout</button>


                </div>
            </form>
        </Formik>
    )
}

CartListPay.propTypes = {

}

export default CartListPay

