import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import Pdata from './Pdata';
import ProductCard from './ProductCard';

const Pcarousel = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    return (
        <>
            <MdArrowBackIos
                size={35}
                className="slider-icon left "
                onClick={slideLeft}
            />
            <div id="slider background">
                {Pdata.products.map(product => {
                    return (
                        <div className="slider-card">
                            <ProductCard key={product.name} product={product} />
                        </div>
                    );
                })}
            </div>
            <MdArrowForwardIos
                size={35}
                className="slider-icon right "
                onClick={slideRight}
            />
        </>
    );
};

export default Pcarousel;
