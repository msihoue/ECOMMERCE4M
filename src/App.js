import React, { useEffect } from 'react';
// import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './screens/Home';
import Login from './screens/auth/login/Login';
import Register from './screens/auth/register/Register';
import RegisterComplete from './screens/auth/registerComplete/RegisterComplete';
import ForgotPassword from './screens/auth/forgetPassword/ForgotPassword';
import History from './screens/user/History';
import UserProtectedRoute from './components/routes/UserProtectedRoute';
import AdminProtectedRoute from './components/routes/AdminProtectedRoute';
import VendorProtectedRoute from './components/routes/VendorProtectedRoute';
import Password from './screens/user/Password';
import Wishlist from './screens/user/Wishlist';
import AdminDashboard from './screens/admin/AdminDashboard';
import VendorDashboard from './screens/Vendor/VendorDashboard';
import CategoryCreate from './screens/admin/category/CategoryCreate';
import CategoryUpdate from './screens/admin/category/CategoryUpdate';
import SubCreate from './screens/admin/sub/SubCreate';
import SubUpdate from './screens/admin/sub/SubUpdate';
import ProductCreate from './screens/admin/product/ProductCreate';
import AllProducts from './screens/admin/product/AllProducts';
import ProductUpdate from './screens/admin/product/ProductUpdate';
import Shop from './screens/shop/Shop';
import SingleProduct from './screens/singleProduct/SingleProduct';
import CategoryHome from './screens/category/categoryHome';
import SubHome from './screens/sub/SubHome';

import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { currentUser } from './functions/auth';
import Header from './components/header/Header';

const App = () => {
    const dispatch = useDispatch();
    // check firebase auth store
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                console.log('user', user);

                currentUser(idTokenResult.token)
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
            }
        });
        // cleanup
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <>
            <Header />
            <ToastContainer />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route
                    exact
                    path="/register/complete"
                    component={RegisterComplete}
                />
                <Route
                    exact
                    path="/forgot/password"
                    component={ForgotPassword}
                />
                <UserProtectedRoute
                    exact
                    path="/user/history"
                    component={History}
                />
                <UserProtectedRoute
                    exact
                    path="/user/wishlist"
                    component={Wishlist}
                />
                <UserProtectedRoute
                    exact
                    path="/user/password"
                    component={Password}
                />
                <VendorProtectedRoute
                    exact
                    path="/vendor/dashboard"
                    component={VendorDashboard}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/dashboard"
                    component={AdminDashboard}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/category"
                    component={CategoryCreate}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/category/:slug"
                    component={CategoryUpdate}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/sub"
                    component={SubCreate}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/sub/:slug"
                    component={SubUpdate}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/product"
                    component={ProductCreate}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/products"
                    component={AllProducts}
                />
                <AdminProtectedRoute
                    exact
                    path="/admin/product/:slug"
                    component={ProductUpdate}
                />
                <Route exact path="/product/:slug" component={SingleProduct} />
                <Route exact path="/category/:slug" component={CategoryHome} />
                <Route exact path="/sub/:slug" component={SubHome} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </>
    );
};

export default App;
