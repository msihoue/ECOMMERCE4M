import React, { useState } from 'react';
import UserNav from '../../components/nav/UserNav';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Password = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        await auth.currentUser
            .updatePassword(password)
            .then(() => {
                setLoading(false);
                setPassword('');
                toast.success('Mot de passe mis à jour');
            })
            .catch(err => {
                setLoading(false);
                toast.error(err.message);
            });
    };

    const passwordForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="password"
                placeholder="Entrez votre password"
                className="register_input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={loading}
            />
            <button
                type="submit"
                className="register_btn"
                disabled={!password || password.length < 6 || loading}>
                Envoyer
            </button>
        </form>
    );

    return (
        <section className="h_container">
            <div className="nav">
                <UserNav />
            </div>
            <div className="content">
                <div className="register_form ">
                    <div className="form_container">
                        <div className="image_container">
                            <img src="../images/registerimg/re.png" alt="pub" />
                        </div>
                        <div className="form">
                            <div className="title">Password</div>
                            {passwordForm()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Password;
