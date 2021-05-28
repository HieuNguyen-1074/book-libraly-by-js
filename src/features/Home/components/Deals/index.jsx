import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import TopDeal from './components/Top'
import Slider from 'react-slick'
import { productItems } from '../../../../constants/gobal/index'
import ItemProduct from '../../../../components/ItemProduct'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Deals(props) {

    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    }

    const prev = () => {
        ref.current.slickPrev();

    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    console.log(productItems);
    return (
        <div className="deal">
            <TopDeal

                sliderNext={next}
                sliderPrev={prev}
            />

            <Slider ref={ref} {...settings} className="deal__slider">
                {
                    productItems.map((item, index) => {
                        return <ItemProduct
                            src={item.src}
                            key={index} />
                    })
                }

            </Slider>
        </div>
    )
}

Deals.propTypes = {

}

export default Deals

