import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import styles from './register.module.css';

const Register = ({ history }) => {
    const [email, setEmail] = useState('');

    const { user } = useSelector(state => ({ ...state }));

    useEffect(() => {
        if (user && user.token) history.push('/');
    }, [user, history]);

    const handleSubmit = async e => {
        e.preventDefault(); // prevents the browser to refresh the page
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        };
        auth.sendSignInLinkToEmail(email, config);
        toast.success(
            `un email a été envoyé à ${email} cliquez sur le lien pour finaliser voter inscription`,
        );

        // save user email in local storage
        window.localStorage.setItem(`emailForRegistration`, email);

        //clear the state
        setEmail('');
    };

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="E-mail"
                placeholder="Entrez votre E-mail"
                className={styles.input}
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
            />
            <button type="submit" className={styles.btn}>
                Créer un compte
            </button>
        </form>
    );

    return (
        <section className={`${styles.registerForm} containerFull`}>
            <div className={styles.mainLogo}>
                <Link to="/" className={styles.logo}>
                    MALIBRAIRIE
                </Link>
            </div>
            <div className={styles.formContent}>
                <div className={styles.imageContent}>
                    <img src="../images/registerimg/re.png" alt="pub" />
                </div>
                <div className={styles.form}>
                    <div className={styles.title}>Créer un compte</div>
                    {registerForm()}
                </div>
            </div>
        </section>
    );
};

export default Register;
