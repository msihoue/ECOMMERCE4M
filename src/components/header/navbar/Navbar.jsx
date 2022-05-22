import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

import Dropdown from '../../Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
            <nav className={styles.navbar}>
                <Link
                    to="/"
                    className={styles.navbar_logo}
                    onClick={closeMobileMenu}>
                    EPIC
                    <i class="fab fa-firstdraft" />
                </Link>
                <div className={styles.menu_icon} onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul
                    className={
                        click
                            ? `${styles.nav_menu} active`
                            : `${styles.nav_menu}`
                    }>
                    <li className={styles.nav_item}>
                        <Link
                            to="/"
                            className={styles.nav_links}
                            onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className={styles.nav_item}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link
                            to="/services"
                            className={styles.nav_links}
                            onClick={closeMobileMenu}>
                            Services <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className={styles.nav_item}>
                        <Link
                            to="/products"
                            className={styles.nav_links}
                            onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link
                            to="/contact-us"
                            className={styles.nav_links}
                            onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sign-up"
                            className={styles.nav_link_mobile}
                            onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {/* <Button /> */}
            </nav>
        </>
    );
}

export default Navbar;
