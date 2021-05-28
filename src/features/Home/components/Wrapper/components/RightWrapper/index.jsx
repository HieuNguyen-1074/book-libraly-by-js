import React from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from './components/Items'
import { chairContent } from '../../../../../../constants/gobal'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { FcNext, FcPrevious } from 'react-icons/fc';



function RightWrapper(props) {
    console.log(chairContent);
    let chair = [];
    for (const key in chairContent) {
        chair.push(chairContent[key])
    }
    console.log(chair);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <FcNext />,
        prevArrow: <FcPrevious />

    };

    return (
        <Slider {...settings} className='wrapper__right' >

            {
                chair.map((item, index) => {
                    return <ItemWrapper
                        key={index}
                        src={item.src}
                        content='' />
                })
            }

        </Slider>
    )
}

RightWrapper.propTypes = {

}

export default RightWrapper

