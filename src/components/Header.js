import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../public/img/CarRelated/letter-x.png';
import CompanyLogo from '../../public/img/CompanyRelated/CompanyLogoWithTitle.png';
import { processLoginLogout } from '../action/auth';
import { SetBtnInfo } from '../action/auth';

const Header = () => (
    <div class = "Header">
        <div className = "Comp-Logo">
            <img src = {CompanyLogo} />
        </div>
        <div className = "NavBar">
            <div className = "Close">
                <img src = {close}/>
            </div>
            <div className = "Option">
                <NavLink id = "external-link-btn" className = "Option__text" activeClassName="isActive" exact={true} to = "/">Home</NavLink>
            </div>
            <div className = "Option">
                <NavLink  id = "external-link-btn" className = "Option__text" activeClassName="isActive" to = "/products" >Products</NavLink>
            </div>
            <div className = "Option">
                <NavLink id = "external-link-btn" className = "Option__text" activeClassName="isActive" to = "/team" >Team</NavLink>
            </div>
            <div className = "login__btn Option">
                <button id ="log__btn" onClick = {processLoginLogout} className = "Option__text"></button>
            </div>
        </div>
        <div className = "login-user">
            <h1>Welcome, Guest</h1>
        </div>
        <div className = "HamBurgers">
            <div className = "Burgers"></div>
            <div className = "Burgers"></div>
            <div className = "Burgers"></div>
        </div>
    </div>
);

export default Header;
