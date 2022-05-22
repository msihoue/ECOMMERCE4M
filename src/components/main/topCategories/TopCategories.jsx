import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious, GrFormNext } from 'react-icons/gr';
import { FcFlashOn } from 'react-icons/fc';
import { AiFillStar } from 'react-icons/ai';
import Tdata from './Tdata';
import Categories from '../../categories/Categories';
import { getProducts } from '../../../functions/product';
import styles from './topCategory.module.css';
import speaker from '../../../images/speaker.jpg';
import ProductCard from '../../productCard/ProductCard';

// const SampleNextArrow = props => {
//     const { onClick } = props;
//     return (
//         <div className={styles.control_btn} onClick={onClick}>
//             <button className={styles.next}>
//                 <GrNext />
//             </button>
//         </div>
//     );
// };
// const SamplePrevArrow = props => {
//     const { onClick } = props;
//     return (
//         <div className={styles.control_btn} onClick={onClick}>
//             <button className={styles.prev}>
//                 <GrPrevious />
//             </button>
//         </div>
//     );
// };

const TopCategories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadAllProducts();
    }, []);

    const loadAllProducts = () => {
        // sort, order, limit
        getProducts('createdAt', 'desc', 6).then(res => {
            setProducts(res.data);
        });
    };
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    // };

    return (
        <section className={`${styles.top} background container`}>
            <div className={styles.container}>
                <Categories />
                <div className={`${styles.heading} c_flex`}>
                    <div className={`${styles.left} c_flex`}>
                        <FcFlashOn />
                        <h2>Meilleurs Offres</h2>
                    </div>
                    <div className={styles.right}>
                        <button className={`${styles.vu_btn} c_flex`}>
                            VOIR PLUS <GrFormNext />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {products.map(product => {
                    return (
                        <div className={styles.flashcard_box} key={product._id}>
                            <ProductCard product={product} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TopCategories;
