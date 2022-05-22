import { useState } from 'react';
import speaker from '../../images/speaker.jpg';
import styles from './productCard.module.css';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const ProductCard = ({ product }) => {
    const [tooltip, setTooltip] = useState('Click to add');

    const handleAddToCart = () => {
        // create cart array
        let cart = [];
        if (typeof window !== 'undefined') {
            // if cart is in local storage GET it
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            // push new product to cart
            cart.push({
                ...product,
                count: 1,
            });
            // remove duplicates
            let unique = _.uniqWith(cart, _.isEqual);
            // save to local storage
            // console.log('unique', unique)
            localStorage.setItem('cart', JSON.stringify(unique));
            // show tooltip
            setTooltip('Added');
        }
    };

    // destructure
    const { images, title, price, old_price, slug } = product;
    return (
        <div className={styles.productCard}>
            <Link to={`/product/${slug}`}>
                <div className={styles.img}>
                    {/* <span className="discount">{props.product.discount} </span> */}
                    <img
                        src={images && images.length ? images[0].url : speaker}
                        alt=""
                    />
                </div>
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <div className={styles.stars}></div>
                    <div className={styles.productPrice}>
                        <p className={styles.price}>{`${price} FCFA`}</p>
                        <p className={styles.oldPrice}>{`${old_price} FCFA`}</p>
                    </div>
                </div>
            </Link>
            <button onClick={handleAddToCart}>ACHETER</button>
        </div>
    );
};

export default ProductCard;
