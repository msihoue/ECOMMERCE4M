import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import styles from './forgotPassword.module.css';

const ForgotPassword = ({ history }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useSelector(state => ({ ...state }));

    useEffect(() => {
        if (user && user.token) history.push('/');
    }, [user, history]);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true,
        };

        await auth
            .sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('');
                setLoading(false);
                toast.success('Check your email for password reset link');
            })
            .catch(error => {
                setLoading(false);
                toast.error(error.message);
                console.log('ERROR MSG IN FORGOT PASSWORD', error);
            });
    };

    const ForgotPasswordForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="E-mail"
                placeholder="Entrez votre E-mail"
                className={styles.input}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            {/* <input
                type="password"
                placeholder="Entrez votre mot de passe"
                className="register_input"
                onChange={e => e.target.value}
            /> */}
            <button
                type="submit"
                onClick={handleSubmit}
                className={styles.btn}
                disabled={!email}>
                Se connecter
            </button>
        </form>
    );

    return (
        <section className={`${styles.passwordForm} containerFull`}>
            <div className={styles.mainLogo}></div>
            <div className={styles.formContainer}>
                <div className={styles.imageContainer}>
                    <img src="../images/registerimg/re.png" alt="pub" />
                </div>
                <div className={styles.form}>
                    <div className={styles.title}>Se connecter</div>
                    {loading ? (
                        <h4 className="text-danger">Loading...</h4>
                    ) : (
                        <h4>Connexion</h4>
                    )}
                    {ForgotPasswordForm()}
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
