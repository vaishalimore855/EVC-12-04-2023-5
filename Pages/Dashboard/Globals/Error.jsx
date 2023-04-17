import React, { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const Error = ({ title }) => {

    useEffect(() => {
        document.title = title ? title : 'EVC Avatars | Page Not Found';
        document.querySelector('.page-title').innerText = "Page Not Found";
    }, [])

    return (
        <div className="dashboard-wrap">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                </li>
                <Breadcrumb.Item active>Page Not Found</Breadcrumb.Item>
            </Breadcrumb>

            <div className="dash-content-area p-5 text-center">
                <div className="display-1">404</div>
                <p>Page not Found</p>
                Go Back to <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    )
    
}

export default Error;