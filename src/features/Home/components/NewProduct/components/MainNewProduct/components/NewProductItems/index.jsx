import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick';
import { productItems } from '../../../../../../../../constants/image';
import ItemProduct from './../../../../../../../../components/ItemProduct/index';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css';


function NewProductItems(props) {

    const { setNext, setPrev } = props;
    const ref = useRef({});

    const next = () => {
        return () => {
            ref.current.slickNext();
        }

    }




    const prev = () => {
        console.log('ss');
        return () => {
            ref.current.slickPrev();
        }



    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // rows: 1,
        slidesPerRow: 2
    };
    console.log(productItems);

    useEffect(() => {

        setPrev(prev);
        setNext(next);
    }, [])

    return (
        <div className='newproductitems'>
            <Slider ref={ref} {...settings} className="deal__slider">
                {
                    productItems.map((item, index) => {
                        return <ItemProduct
                            src={item.src}
                            key={index}


                        />

                    })
                }

            </Slider>

        </div>
    )
}

NewProductItems.propTypes = {

}

export default NewProductItems

