import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import Slider from 'react-slick';
import { blogImgs } from '../../../../constants/gobal';
import ItemBlog from './components/ItemBlog';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blog(props) {
    console.log(blogImgs);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,


    };
    return (
        <div className="blog">
            <h1>latest blog</h1>
            <Slider {...settings}>
                {blogImgs.map((item, index) => {

                    return <ItemBlog
                        key={index}
                        src={item.src}
                        content={item.content}
                        id={item.id}
                        author={item.author}
                        date={item.date}
                    />
                })}

            </Slider>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog

