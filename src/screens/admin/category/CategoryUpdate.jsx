import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getCategory, updateCategory } from '../../../functions/category';
import CategoryForm from '../../../components/nav/forms/CategoryForm';

const CategoryUpdate = ({ history, match }) => {
    const { user } = useSelector(state => ({ ...state }));

    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    // step 1
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = () =>
        getCategory(match.params.slug).then(c => setName(c.data.name));

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(name);
        setLoading(true);
        updateCategory(match.params.slug, { name }, user.token)
            .then(res => {
                // console.log(res)
                setLoading(false);
                setName('');
                toast.success(`"${res.data.name}" is updated`);
                history.push('/admin/category');
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                if (err.response.status === 400) toast.error(err.response.data);
            });
    };

    return (
        <section className="h_container">
            <div className="nav">
                <AdminNav />
            </div>

            <div className="form_container">
                <div className="form">
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
                </div>
            </div>
        </section>
    );
};

export default CategoryUpdate;
