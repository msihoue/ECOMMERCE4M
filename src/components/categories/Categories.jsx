import Bdata from './Bdata';
import styles from './category.module.css';

const Categories = () => {
    return (
        <div className={`${styles.categories_container} `}>
            <div className={styles.categories_heading}>
                <h4>Top Catégories</h4>
            </div>
            <div className={styles.categories_box}>
                {Bdata.categories.map((categories, index) => (
                    <div key={index} className={styles.categories}>
                        <img src={categories.cover} alt="" />
                        <h3>{categories.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
