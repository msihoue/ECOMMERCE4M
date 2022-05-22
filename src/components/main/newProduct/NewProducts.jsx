import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../functions/product';
import speaker from '../../../images/speaker.jpg';
import newProductStyles from './newProduct.module.css';
import LoadingCard from '../../cards/LoadingCard';
import ProductCard from '../../productCard/ProductCard';

const NewProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadAllProducts();
    }, []);

    const loadAllProducts = () => {
        // sort, order, limit
        getProducts('sold', 'desc', 5).then(res => {
            setProducts(res.data);
        });
    };
    return (
        <section
            className={`${newProductStyles.container} container background`}>
            <div className={newProductStyles.heading}>
                <h2>Nouvelle arrivages</h2>
            </div>
            <div className={newProductStyles.content}>
                {products.map(product => {
                    return (
                        <div
                            key={product._id}
                            className={newProductStyles.product}>
                            <ProductCard product={product} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default NewProducts;
