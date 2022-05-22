import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import {
    createCategory,
    getCategories,
    removeCategory,
} from '../../../functions/category';
import { Link } from 'react-router-dom';
import CategoryForm from '../../../components/nav/forms/CategoryForm';
import LocalSearch from '../../../components/nav/forms/LocalSearch';
import styles from './create.module.css';

const CategoryCreate = () => {
    const { user } = useSelector(state => ({ ...state }));
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    // step 1
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () =>
        getCategories().then(c => setCategories(c.data));

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        createCategory({ name }, user.token)
            .then(res => {
                // console.log(res)
                setLoading(false);
                setName('');
                toast.success(`"${res.data.name}" is created`);
                loadCategories();
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                if (err.response.status === 400) toast.error(err.response.data);
            });
    };

    const handleRemove = async slug => {
        // let answer = window.confirm("Delete?");
        // console.log(answer, slug);
        if (window.confirm('Delete?')) {
            setLoading(true);
            removeCategory(slug, user.token)
                .then(res => {
                    setLoading(false);
                    toast.error(`${res.data.name} deleted`);
                    loadCategories();
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        setLoading(false);
                        toast.error(err.response.data);
                    }
                });
        }
    };

    // step 4
    const searched = keyword => c => c.name.toLowerCase().includes(keyword);

    return (
        <section className="h_container">
            <div className={styles.nav}>
                <AdminNav />
            </div>

            <div className={styles.createForm}>
                <div className={styles.form}>
                    {loading ? (
                        <h4 className="text-danger">Loading..</h4>
                    ) : (
                        <h4>Create category</h4>
                    )}

                    <CategoryForm
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                    />

                    {/* step 2 & 3 */}
                    <LocalSearch keyword={keyword} setKeyword={setKeyword} />

                    {/* step 5 */}

                    {categories.filter(searched(keyword)).map(c => (
                        <div key={c}>
                            {c.name}
                            <span
                                onClick={() => handleRemove(c.slug)}
                                className="btn btn-sm float-right">
                                <MdDelete className="text-danger" />
                            </span>
                            <Link to={`/admin/category/${c.slug}`}>
                                <span className="btn btn-sm float-right">
                                    <MdEdit className="text-warning" />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryCreate;
