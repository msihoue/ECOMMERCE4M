import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, googleAuthProvider } from '../../../firebase';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdateUser } from '../../../functions/auth';
import styles from './login.module.css';

const Login = ({ history }) => {
    const [email, setEmail] = useState('msihoue@gmail.com');
    const [password, setPassword] = useState('123456');
    const [loading, setLoading] = useState(false);

    const { user } = useSelector(state => ({ ...state }));

    useEffect(() => {
        let intended = history.location.state;
        if (intended) {
            return;
        } else {
            if (user && user.token) history.push('/');
        }
    }, [user, history]);

    let dispatch = useDispatch();

    const roleBasedRedirect = res => {
        // check if intended
        let intended = history.location.state;
        if (intended) {
            history.push(intended.from);
        } else {
            if (res.data.role === 'admin') {
                history.push('/admin/dashboard');
            } else {
                history.push('/user/history');
            }
        }
    };
    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        // console.table(email, password);
        try {
            const result = await auth.signInWithEmailAndPassword(
                email,
                password,
            );
            // console.log(result);
            const { user } = result;
            const idTokenResult = await user.getIdTokenResult();

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
                    roleBasedRedirect(res);
                })
                .catch(err => console.log(err));

            // history.push('/');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setLoading(false);
        }
    };

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider)
            .then(async result => {
                const { user } = result;
                const idTokenResult = await user.getIdTokenResult();
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
                        roleBasedRedirect(res);
                    })
                    .catch(err => console.log(err));
                // history.push('/');
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            });
    };

    const loginForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="E-mail"
                placeholder="Entrez votre E-mail"
                className={styles.input}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Entrez votre mot de passe"
                className={styles.input}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div className={styles.password}>
                <Link to="/forgot/password" className={styles.lien}>
                    Mot de passe oublié ?
                </Link>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className={styles.btn}
                disabled={!email || password.length < 6}>
                Se connecter
            </button>
            <button
                type="submit"
                onClick={googleLogin}
                className={styles.googleBtn}>
                Se connecter avec google
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
            <div className={styles.formContainer}>
                <div className={styles.imageContainer}>
                    <img src="../images/registerimg/re.png" alt="pub" />
                </div>
                <div className={styles.form}>
                    <div className={styles.title}></div>
                    {loading ? (
                        <h4 className="text-danger">Loading...</h4>
                    ) : (
                        <h4>Se connecter</h4>
                    )}
                    {loginForm()}
                </div>
            </div>
        </section>
    );
};

export default Login;
