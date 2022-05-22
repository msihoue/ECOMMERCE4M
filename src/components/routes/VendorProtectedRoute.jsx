import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
import { currentVendor } from '../../functions/auth';

const VendorProtectedRoute = ({ children, ...rest }) => {
    const { user } = useSelector(state => ({ ...state }));

    const [ok, setOk] = useState(false);

    useEffect(() => {
        if (user && user.token) {
            currentVendor(user.token)
                .then(res => {
                    if (res.data.success) {
                        setOk(true);
                    }
                })
                .catch();
        }
    }, [user]);

    return ok ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default VendorProtectedRoute;
