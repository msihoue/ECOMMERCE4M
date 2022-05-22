import React, { useEffect, useState } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { getProductsByCount } from '../../../functions/product';
import AdminProductCard from '../../../components/cards/AdminProductCard';
import { removeProduct } from '../../../functions/product';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { user } = useSelector(state => ({ ...state }));

    useEffect(() => {
        loadAllProducts();
    }, []);

    const loadAllProducts = () => {
        setLoading(true);
        getProductsByCount(100)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    };

    const handleRemove = slug => {
        // let answer = window.confirm("Delete?");
        if (window.confirm('Delete?')) {
            // console.log("send delete request", slug);
            removeProduct(slug, user.token)
                .then(res => {
                    loadAllProducts();
                    toast.error(`${res.data.title} is deleted`);
                })
                .catch(err => {
                    if (err.response.status === 400)
                        toast.error(err.response.data);
                    console.log(err);
                });
        }
    };

    return (
        <section className="h_container">
            <div className="nav">
                <AdminNav />
            </div>
            <div className="content">
                <h2>Dashboard</h2>
                {loading ? (
                    <h4 className="text-danger">Loading...</h4>
                ) : (
                    <h4>All Products</h4>
                )}
                <div className="row">
                    {products.map(product => (
                        <div key={product._id} className="col-md-4">
                            <AdminProductCard
                                product={product}
                                handleRemove={handleRemove}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProducts;
