
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { headerContent } from '../../constants/gobal'

import './style.css'
import FormMain from '../FormMain'
import UserInfor from '../UserInfor'

function Users(props) {
    const { userContent } = headerContent;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUser, setIsOpenUser] = useState(false);


    const handleUserInfor = (status) => {

        setIsOpenUser(status);
        console.log(status);

    }

    const handleForm = (status) => {
        setIsOpen(status);
    }
    return (
        <div className='user'>

            <div>
                <div className="formusers">
                    <FormMain
                        isOpen={isOpen}
                        handleForm={handleForm}

                    />
                </div>
                <img src={userContent.src} alt=""
                    onMouseEnter={() => handleUserInfor(true)}
                    onMouseLeave={() => handleUserInfor(false)}

                    onClick={() => handleForm(true)} />
                <p
                    onClick={() => handleForm(true)}
                    onMouseEnter={() => handleUserInfor(true)}
                    onMouseLeave={() => handleUserInfor(false)}
                >
                    {userContent.content}</p>
                <UserInfor
                    isOpenUser={isOpenUser}

                />
            </div>

        </div>
    )
}

Users.propTypes = {

}

export default Users

