import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { GrNext, GrPrevious, GrFormNext } from 'react-icons/gr';
import Pdata from '../../productCard/Pdata';
import ProductCard from '../../productCard/ProductCard';
import { getProducts } from '../../../functions/product';

const NewArrival = () => {
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

    const SampleNextArrow = props => {
        const { onClick } = props;
        return (
            <div className="control_btn" onClick={onClick}>
                <button className="next">
                    <GrNext />
                </button>
            </div>
        );
    };
    const SamplePrevArrow = props => {
        const { onClick } = props;
        return (
            <div className="control_btn" onClick={onClick}>
                <button className="prev">
                    <GrPrevious />
                </button>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <div className="new_container container">
                <div className="heading c_flex   ">
                    <div className="left f_flex">
                        <h2>Nouveaux Arrivages</h2>
                    </div>
                    <div className="right ">
                        <button className="vu_btn f_flex ">
                            VOIR PLUS <GrFormNext />
                        </button>
                    </div>
                </div>
            </div>
            <div className="new_content background container ">
                <Slider {...settings}>
                    {products.map(product => {
                        return (
                            <div key={product._id} className="slick_content">
                                <ProductCard product={product} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </>
    );
};

export default NewArrival;
