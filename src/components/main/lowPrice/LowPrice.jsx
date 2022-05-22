import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './lowPrice.module.css';
import Slider from 'react-slick';
import speaker from '../../../images/speaker.jpg';
// import Ndata from './Ndata';
import { getProducts } from '../../../functions/product';

const CarouselNextArrow = props => {
    const { onClick } = props;
    return (
        <div className={styles.c_control_btn} onClick={onClick}>
            <button className={styles.next}>
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    );
};
const CarouselPrevArrow = props => {
    const { onClick } = props;
    return (
        <div className={styles.c_control_btn} onClick={onClick}>
            <button className={styles.prev}>
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    );
};

const LowPrice = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadAllProducts();
    }, []);

    const loadAllProducts = () => {
        // sort, order, limit
        getProducts('createdAt', 'desc', 3).then(res => {
            setProducts(res.data);
        });
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        nextArrow: <CarouselNextArrow />,
        prevArrow: <CarouselPrevArrow />,
    };
    return (
        <div className={`${styles.content} container background`}>
            <div className={styles.heading}>
                <h4>PETITS PRIX</h4>
            </div>
            <Slider {...settings}>
                {products.map(product => {
                    return (
                        <div className={styles.box} key={product._id}>
                            <div className={styles.img}>
                                <img
                                    src={
                                        product.images && product.images.length
                                            ? product.images[0].url
                                            : speaker
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default LowPrice;
