import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
    return (
        <section className="nav">
            <div className="nav_header"></div>
            <div className="nav_container">
                <ul className="nav_content">
                    <li className="nav_link">
                        <Link to="/user/history">History</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/user/password">Password</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/user/wishlist">Wishlist</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default UserNav;
