import React, { useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { MdAccountCircle, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './mainHead.module.css';

// import Dropdown from './Dropdown';
import Dropdown2 from '../dropdown/Dropdown2';
import Search from '../../nav/forms/search/Search';

const MainHead = () => {
    const [dropdown, setDropdown] = useState(false);
    // const [dropdown2, setDropdown2] = useState(false);

    let { user } = useSelector(state => ({ ...state }));

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <section className={styles.main_head}>
                <Link to="/" className={styles.main_logo}>
                    <h1>MALIBRAIRIE</h1>
                </Link>
                <div className={styles.searchForm}>
                    <Search />
                </div>
                <div className={styles.header_right}>
                    {/* <div
                        className="nav_item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link to="/login" className="nav_links c_flex">
                            <MdAccountCircle />
                            Se connecter <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </div> */}

                    <div
                        className={styles.nav_item}
                        onMouseOver={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        {user ? (
                            user.email && user.email.split('@')[0]
                        ) : (
                            <Link
                                to="/login"
                                className={`${styles.nav_links} c_flex`}>
                                <MdAccountCircle />
                                Se connecter <i className="fas fa-caret-down" />
                            </Link>
                        )}

                        {dropdown && <Dropdown2 />}
                    </div>

                    {/* {!user && (
                        <div className={`${styles.nav_item} c_flex`}>
                            <Link
                                to="/register"
                                className={`${styles.nav_links} c_flex`}>
                                <MdAccountCircle />
                                S'inscrire <i className="fas fa-caret-down" />
                            </Link>
                        </div>
                    )} */}

                    <div className={`${styles.header_support} c_flex`}>
                        <BiSupport />
                        <span className={styles.support}>Support</span>
                    </div>
                    {/* <div
                        className="nav_item"
                        onMouseOver={onMouseOver}
                        onMouseLeave={onMouseLeave}>
                        <button>Connexion</button>
                        {dropdown && <Dropdown2 />}
                    </div> */}
                    <div className={`${styles.header_basket} c_flex`}>
                        <MdShoppingCart />
                        <span className={styles.basket_title}>Panier</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainHead;
