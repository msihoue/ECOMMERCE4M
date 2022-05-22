import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './search.module.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch();
    const { search } = useSelector(state => ({ ...state }));
    const { text } = search;

    const history = useHistory();

    const handleChange = e => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: e.target.value },
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/shop?${text}`);
    };

    return (
        <form className={styles.search} onSubmit={handleSubmit}>
            <BiSearchAlt2
                className={styles.searchIcon}
                onClick={handleSubmit}
            />
            <input
                onChange={handleChange}
                type="text"
                placeholder="RECHERCHER ICI"
                className={styles.searchInput}
            />
            <button className={styles.search_btn} onClick={handleSubmit}>
                RECHERCHER
            </button>
        </form>
    );
};

export default Search;
