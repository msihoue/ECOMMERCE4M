import React from 'react';
import styles from './single.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SingleCarousel from './SingleCarousel';
import Tab from './Tab';
import StarRating from 'react-star-ratings';
import RatingModal from '../modal/RatingModal';
import { Link } from 'react-router-dom';
import ProductListItems from './ProductListItems';

//this a single component of singleProduct
const SingleProductPage = ({ product, onStarClick, star }) => {
    const { _id } = product;
    return (
        <section className={`${styles.wrapper} container`}>
            <div className={styles.presentation}>
                <div className={styles.productContainer}>
                    <SingleCarousel product={product} />
                    <div className={styles.info}>
                        <ProductListItems product={product} />
                        <div className="title"></div>
                        <hr />
                        {/* {category && (
                            <li className="list-group-item">
                                Category{' '}
                                <Link
                                    to={`/category/${category.slug}`}
                                    className="label label-default label-pill pull-xs-right">
                                    {category.name}
                                </Link>
                            </li>
                        )} */}
                        <div className={styles.ratings}>
                            <RatingModal>
                                <StarRating
                                    name={_id}
                                    numberOfStars={5}
                                    rating={star}
                                    changeRating={onStarClick}
                                    isSelectable={true}
                                    starRatedColor="red"
                                />
                            </RatingModal>
                        </div>
                    </div>
                </div>
                <div className={styles.relatedInfo}>content</div>
            </div>
            <div className={styles.tabContainer}>
                <Tab product={product} />
            </div>
        </section>
    );
};

export default SingleProductPage;
