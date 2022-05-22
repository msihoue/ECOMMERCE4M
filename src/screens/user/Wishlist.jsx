import React from 'react';
import UserNav from '../../components/nav/UserNav';

const Wishlist = () => {
    return (
        <section className="h_container">
            <div className="nav">
                <UserNav />
            </div>
            <div className="content">
                <h2>wishlist</h2>
            </div>
        </section>
    );
};

export default Wishlist;
