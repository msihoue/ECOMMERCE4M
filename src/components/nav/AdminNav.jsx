import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <section className="nav">
            <div className="nav_header"></div>
            <div className="nav_container">
                <ul className="nav_content">
                    <li className="nav_link">
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/admin/product">Product</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/admin/products">Products</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/admin/category">Category</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/admin/sub"> Sub Category</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/admin/coupon">Coupon</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/user/password">Password</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AdminNav;
