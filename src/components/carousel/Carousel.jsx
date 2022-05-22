import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Cdata from './Cdata';
import carouselStyles from './carousel.module.css';

const CarouselNextArrow = props => {
    const { onClick } = props;
    return (
        <div
            className={carouselStyles.carousel_c_control_btn}
            onClick={onClick}>
            <button className={carouselStyles.next}>
                <GrNext />
            </button>
        </div>
    );
};
const CarouselPrevArrow = props => {
    const { onClick } = props;
    return (
        <div
            className={carouselStyles.carousel_c_control_btn}
            onClick={onClick}>
            <button className={carouselStyles.next}>
                <GrPrevious />
            </button>
        </div>
    );
};

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <CarouselNextArrow />,
        prevArrow: <CarouselPrevArrow />,
    };
    return (
        <div className={`${carouselStyles.c_content} containerFull}`}>
            <Slider {...settings}>
                {Cdata.map((item, index) => {
                    return (
                        <div className={carouselStyles.slide_box} key={index}>
                            <img src={item.cover} alt="" />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Carousel;
