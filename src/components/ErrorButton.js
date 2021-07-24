import React from 'react';
import { Link } from 'react-router-dom';

const ErrorButton = (props) => (
    <div className ="Not-Found">
        <h1>{props.message}</h1>
        <Link to = "/" className = "GoHome-btn">Go To Home Page</Link>
    </div>
);

export default ErrorButton;