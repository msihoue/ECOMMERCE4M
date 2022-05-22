import React from 'react';
import styles from '../singleProductPage/singleCarousel.module.css';
import { Carousel } from 'react-responsive-carousel';
import speaker from '../../../images/speaker.jpg';

const SingleCarousel = ({ product }) => {
    const { images } = product;
    return (
        <div className={styles.carousel_wrapper}>
            {images && images.length ? (
                <Carousel
                    showArrows={false}
                    showIndicators={false}
                    showThumbs={true}
                    thumbWidth={60}
                    // autoPlay
                    infiniteLoop
                    className={`${styles.carousel_slider} carousel`}>
                    {images &&
                        images.map(i => (
                            <img src={i.url} key={i.public_id} alt="" />
                        ))}
                </Carousel>
            ) : (
                <img src={speaker} className="mb-3 card-image" alt="" />
            )}
        </div>
    );
};

export default SingleCarousel;
