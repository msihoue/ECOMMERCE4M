import React from 'react';
import styles from './categoryForm.module.css';

const CategoryForm = ({ handleSubmit, name, setName }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom de la categorie"
                className={styles.input}
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
                required
            />

            <button className={styles.btn}>Créer</button>
        </form>
    );
};

export default CategoryForm;
