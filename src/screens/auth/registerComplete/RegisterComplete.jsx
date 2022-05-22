import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createOrUpdateUser } from '../../../functions/auth';
import styles from './registerComplete.module.css';

const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const { user } = useSelector(state => ({ ...state }));
    let dispatch = useDispatch();

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'));
        // console.log(window.location.href);
        // console.log(window.localStorage.getItem("emailForRegistration"));
    }, [history]);

    const handleSubmit = async e => {
        e.preventDefault();
        // validation
        if (!email || !password) {
            toast.error('Email and password is required');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        try {
            const result = await auth.signInWithEmailLink(
                email,
                window.location.href,
            );
            //   console.log("RESULT", result);
            if (result.user.emailVerified) {
                // remove user email fom local storage
                window.localStorage.removeItem('emailForRegistration');
                // get user id token
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();
                // redux store
                console.log('user', user, 'idTokenResult', idTokenResult);

                createOrUpdateUser(idTokenResult.token)
                    .then(res => {
                        dispatch({
                            type: 'LOGGED_IN_USER',
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,
                            },
                        });
                    })
                    .catch(err => console.log(err));

                // redirect
                history.push('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const registerCompleteForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="E-mail"
                className={styles.input}
                value={email}
                disabled
            />
            <input
                type="password"
                placeholder="Entrez votre mot de passe"
                className={styles.input}
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
            />
            <button type="submit" className={styles.btn}>
                Finaliser l'inscription
            </button>
        </form>
    );

    return (
        <section className={`${styles.completeForm} containerFull`}>
            <div className={styles.mainLogo}>
                <Link to="/" className={styles.logo}>
                    MALIBRAIRIE
                </Link>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.imageContainer}>
                    <img src="../images/registerimg/re.png" alt="pub" />
                </div>
                <div className={styles.form}>
                    <div className={styles.title}>Finaliser l'inscription</div>
                    {registerCompleteForm()}
                </div>
            </div>
        </section>
    );
};

export default RegisterComplete;
