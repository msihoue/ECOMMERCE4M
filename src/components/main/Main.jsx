import TopCategories from '../main/topCategories/TopCategories';
import NewArrival from '../main/newProduct/NewProducts';
import NewProducts from '../main/newProduct/NewProducts';
import styles from './main.module.css';
import LowPrice from './lowPrice/LowPrice';
import Pcarousel from '../productCard/Pcarousel';
import CategoryList from '../category/CategoryList';
import SubList from '../sub/SubList';

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.topCategory}>
                <TopCategories />
            </div>
            {/* <NewArrival /> */}
            <NewProducts />
            {/* <LowPrice /> */}
            <div className="pCarousel">
                <SubList />
            </div>
        </section>
    );
};

export default Main;
