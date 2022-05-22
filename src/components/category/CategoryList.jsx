import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../functions/category';
import styles from './categoryList.module.css';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCategories().then(c => {
            setCategories(c.data);
            setLoading(false);
        });
    }, []);

    const showCategories = () =>
        categories.map(c => (
            <button key={c._id} className={styles.category}>
                <Link to={`/category/${c.slug}`}>{c.name}</Link>
            </button>
        ));

    return (
        <div className={styles.container}>
            <div className={styles.raw}>
                <Link to="/shop">SHOP</Link>

                {loading ? (
                    <h4 className="text-center">Loading...</h4>
                ) : (
                    showCategories()
                )}
            </div>
        </div>
    );
};

export default CategoryList;
