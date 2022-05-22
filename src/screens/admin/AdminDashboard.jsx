import React from 'react';
import AdminNav from '../../components/nav/AdminNav';

const AdminDashboard = () => {
    return (
        <section className="h_container">
            <div className="nav">
                <AdminNav />
            </div>
            <div className="content">
                <h2>Dashboard</h2>
            </div>
        </section>
    );
};

export default AdminDashboard;
