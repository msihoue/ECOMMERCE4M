import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './dropdown.css';

const Dropdown2 = () => {
    const [click, setClick] = useState(false);

    const dispatch = useDispatch();
    let { user } = useSelector(state => ({ ...state }));
    let history = useHistory();

    const handleClick = () => setClick(!click);

    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type: 'LOGOUT',
            payload: null,
        });
        history.push('/login');
    };

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown_menu clicked' : 'dropdown_menu'}>
                {user && user.role === 'subscriber' && (
                    <Link to="/user/history">
                        <li className="dropdown_links">Tableau de Bord </li>
                    </Link>
                )}
                {user && user.role === 'admin' && (
                    <Link to="/admin/dashboard">
                        <li className="dropdown_links">Tableau de Bord </li>
                    </Link>
                )}

                <li className="dropdown_links" onClick={logout}>
                    Logout
                </li>
            </ul>
        </>
    );
};

export default Dropdown2;
